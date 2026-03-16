// ── content.js ────────────────────────────────────────────────────────────────
// Injected into every page. Responsible for:
// 1. Scanning the page for recognisable form fields
// 2. Returning a field map to the popup on request
// 3. Filling fields when instructed by the popup

// Guard: entire file runs only once per page load, even if injected multiple times
if (window.__autofillContentLoaded) {
  // Already loaded — just make sure the listener is alive and exit
  void 0;
} else {
window.__autofillContentLoaded = true;

// ── Field matching rules ──────────────────────────────────────────────────────
// Each rule: { key, patterns }
// key        → matches a key in the profile (e.g. "firstName")
// patterns   → array of regex strings matched against name / id / placeholder / aria-label of the input

const FIELD_RULES = [
  // ── Personal basics ───────────────────────────────────────────────────────
  { key: "firstName",    patterns: ["first.?name", "fname", "given.?name", "prenom", "名字"] },
  { key: "lastName",     patterns: ["last.?name", "lname", "surname", "family.?name", "nom", "姓氏", "^姓$"] },
  { key: "fullName",     patterns: ["^name$", "full.?name", "your.?name", "applicant.?name", "candidate.?name", "姓名", "真实姓名", "求职者姓名"] },
  { key: "gender",       patterns: ["gender", "sex", "性别"] },
  { key: "email",        patterns: ["e.?mail", "courriel", "邮箱", "电子邮件", "电子邮箱"] },
  { key: "phone",        patterns: ["phone", "mobile", "tel(ephone)?", "contact.?number", "手机", "电话", "联系电话", "手机号"] },
  { key: "linkedin",     patterns: ["linkedin", "linked.in", "profile.?url"] },
  { key: "website",      patterns: ["website", "portfolio", "personal.?site", "homepage", "个人网站", "个人主页"] },
  { key: "location",     patterns: ["city", "location", "address", "country", "ville", "pays", "城市", "当前居住城市", "工作城市", "意向城市", "所在城市", "地区", "省份"] },

  // ── Education ────────────────────────────────────────────────────────────
  { key: "eduSchool",    patterns: ["school", "university", "institution", "etablissement", "学校名称", "毕业院校", "就读院校", "大学"] },
  { key: "eduCollege",   patterns: ["college", "faculty", "department(?!.*work)", "学院", "学院名称"] },
  { key: "eduDegree",    patterns: ["degree", "diploma", "qualification", "diplome", "学历", "学位", "最高学历"] },
  { key: "eduField",     patterns: ["field.?of.?study", "major", "subject", "discipline", "specialisation", "专业名称", "所学专业"] },
  { key: "eduGpa",       patterns: ["gpa", "grade(?!.*work)", "note", "绩点", "成绩排名", "成绩"] },
  { key: "eduFullTime",  patterns: ["full.?time", "是否全日制", "全日制"] },
  { key: "eduLab",       patterns: ["lab", "laboratory", "实验室"] },
  { key: "eduAdvisor",   patterns: ["advisor", "supervisor", "mentor", "导师"] },
  { key: "eduResearch",  patterns: ["research", "研究方向", "研究领域"] },
  { key: "eduStart",     patterns: ["入学时间", "入学年份", "start.*campus", "campus.*start"] },
  { key: "eduEnd",       patterns: ["毕业时间", "毕业年份", "预计毕业", "end.*campus", "campus.*end"] },

  // ── Work / Internship ────────────────────────────────────────────────────
  { key: "expCompany",   patterns: ["company", "employer", "organisation", "organization", "entreprise", "公司名称", "单位", "工作单位"] },
  { key: "expDept",      patterns: ["department.*work", "部门", "部门名称"] },
  { key: "expRole",      patterns: ["job.?title", "position", "role(?!.*campus)", "poste", "fonction", "职位名称", "岗位名称", "职务"] },
  { key: "expType",      patterns: ["work.?type", "employment.?type", "job.?type", "工作类型", "实习类型"] },
  { key: "expStart",     patterns: ["work.*start", "start.*work", "employment.?start", "入职时间", "在开始时间"] },
  { key: "expEnd",       patterns: ["work.*end", "end.*work", "employment.?end", "离职时间", "结束时间"] },
  { key: "expDesc",      patterns: ["work.*desc", "job.*desc", "工作描述", "工作内容", "岗位职责"] },

  // ── Project ───────────────────────────────────────────────────────────────
  { key: "projName",     patterns: ["project.*name", "项目名称"] },
  { key: "projRole",     patterns: ["project.*role", "项目角色"] },
  { key: "projStart",    patterns: ["project.*start", "项目.*开始"] },
  { key: "projEnd",      patterns: ["project.*end", "项目.*结束"] },
  { key: "projLink",     patterns: ["project.*link", "项目链接"] },
  { key: "projDesc",     patterns: ["project.*desc", "项目描述"] },

  // ── Language ──────────────────────────────────────────────────────────────
  { key: "langType",     patterns: ["language.*type", "语言类型"] },
  { key: "langLevel",    patterns: ["language.*level", "语言水平"] },

  // ── Campus activity ───────────────────────────────────────────────────────
  { key: "campusName",   patterns: ["campus.*name", "校园经历名称"] },
  { key: "campusRole",   patterns: ["campus.*role", "校园.*角色"] },
  { key: "campusDesc",   patterns: ["campus.*desc", "校园经历描述"] },

  // ── Cover letter / open-ended ─────────────────────────────────────────────
  { key: "coverLetter",  patterns: ["cover.?letter", "lettre.?motivation", "motivation", "why.?(us|company|role|apply)", "tell.?us", "about.?yourself", "introduce", "自我介绍", "求职信", "求职动机", "为什么", "介绍一下"] },
];

// ── Flatten all input-like elements on the page ───────────────────────────────
function getAllFields() {
  // Standard form elements
  const standard = Array.from(
    document.querySelectorAll("input, textarea, select, [contenteditable='true']")
  ).filter((el) => {
    const type = el.getAttribute("type") || "";
    return !["hidden", "submit", "button", "reset", "checkbox", "radio", "file"].includes(type);
  });

  // Custom components (Meituan MTD, Element UI, Ant Design, iView, Vant…)
  const custom = Array.from(
    document.querySelectorAll(
      // MTD (Meituan) — select triggers and text inputs
      ".mtd-input, .mtd-textarea, .mtd-select .mtd-input, " +
      "[class*='mtd-select__input'], [class*='mtd-input__inner'], " +
      // Generic role-based
      "[role='combobox'], [role='textbox'], [role='spinbutton'], " +
      // Element UI
      ".el-input__inner, .el-textarea__inner, " +
      // Ant Design
      ".ant-input, .ant-select-selection-search-input, " +
      // iView / Vant
      ".ivu-input, .ivu-select-input, .van-field__control"
    )
  ).filter((el) => !standard.includes(el));

  return [...standard, ...custom];
}

// ── Get all text visible near a field (label, parent text, sibling text) ──────
function getNearbyText(el) {
  const texts = [];

  // Direct label via for= attribute
  const id = el.getAttribute("id");
  if (id) {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) texts.push(label.innerText || label.textContent || "");
  }

  // Closest wrapping label
  const closestLabel = el.closest("label");
  if (closestLabel) texts.push(closestLabel.innerText || "");

  // Parent container text (up to 2 levels — catches "意向城市 *" above the input)
  let parent = el.parentElement;
  for (let i = 0; i < 3 && parent; i++) {
    const text = (parent.innerText || "").slice(0, 100);
    if (text) texts.push(text);
    parent = parent.parentElement;
  }

  // Previous sibling text
  const prev = el.previousElementSibling;
  if (prev) texts.push(prev.innerText || prev.textContent || "");

  return texts.join(" ").toLowerCase();
}

// ── Score a field against a rule ─────────────────────────────────────────────
function matchField(el, patterns) {
  const attrs = [
    el.getAttribute("name") || "",
    el.getAttribute("id") || "",
    el.getAttribute("placeholder") || "",
    el.getAttribute("aria-label") || "",
    el.getAttribute("aria-placeholder") || "",
    el.getAttribute("autocomplete") || "",
    el.getAttribute("data-field") || "",
    el.getAttribute("data-key") || "",
    getNearbyText(el),
  ]
    .join(" ");

  return patterns.some((p) => new RegExp(p, "i").test(attrs));
}

// ── Build a map of { ruleKey → DOMElement } for all detected fields ───────────
function detectFields() {
  const fields = getAllFields();
  const detected = {};

  for (const rule of FIELD_RULES) {
    for (const el of fields) {
      if (matchField(el, rule.patterns)) {
        if (!detected[rule.key]) {
          detected[rule.key] = el;
        }
      }
    }
  }
  return detected;
}

// ── Set a value into an input in a React/Vue/Angular-safe way ─────────────────
function setNativeValue(el, value) {
  const inputDesc    = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,   "value");
  const textareaDesc = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value");

  if (el.tagName === "TEXTAREA" && textareaDesc) {
    textareaDesc.set.call(el, value);
  } else if (el.tagName === "INPUT" && inputDesc) {
    inputDesc.set.call(el, value);
  } else if (el.getAttribute("contenteditable")) {
    el.innerText = value;
  } else {
    el.value = value;
  }
  el.dispatchEvent(new Event("input",  { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Value normaliser: map English/shorthand → Chinese dropdown text ───────────
const VALUE_ALIASES = {
  // Degree 学历
  "phd": "博士研究生", "doctorate": "博士研究生", "doctoral": "博士研究生",
  "master": "硕士研究生", "masters": "硕士研究生", "msc": "硕士研究生",
  "ma": "硕士研究生", "mba": "硕士研究生", "meng": "硕士研究生",
  "bachelor": "大学本科", "bachelors": "大学本科", "bsc": "大学本科",
  "ba": "大学本科", "undergraduate": "大学本科",
  // Gender 性别
  "female": "女", "woman": "女", "f": "女",
  "male": "男", "man": "男", "m": "男",
  // Full-time 是否全日制
  "yes": "是", "true": "是", "full time": "是", "full-time": "是",
  "no": "否", "false": "否", "part time": "否", "part-time": "否",
  // Work type 工作类型
  "internship": "实习", "intern": "实习", "实习生": "实习",
  "fulltime": "全职", "full time job": "全职",
  "part time": "兼职", "parttime": "兼职",
};

function normaliseValue(value) {
  if (!value) return value;
  const lower = value.trim().toLowerCase();
  // 1. Exact match
  if (VALUE_ALIASES[lower]) return VALUE_ALIASES[lower];
  // 2. Keyword contains match (e.g. "Master of Environmental Policy" → 硕士研究生)
  for (const [key, mapped] of Object.entries(VALUE_ALIASES)) {
    if (lower.includes(key)) return mapped;
  }
  return value;
}

// ── Detect if element is inside an MTD select (not a date picker) ─────────────
function isSelectTrigger(el) {
  // Definitive: inside .mtd-select but NOT inside .mtd-date-picker
  if (el.closest(".mtd-date-picker")) return false;
  if (el.closest(".mtd-select"))       return true;
  // Fallback: ARIA combobox
  if (/combobox|listbox/.test(el.getAttribute("role") || "")) return true;
  // Fallback: Element UI / Ant Design select inputs
  if (el.classList.contains("el-select__input")) return true;
  if (el.classList.contains("ant-select-selection-search-input")) return true;
  return false;
}

// ── Find visible MTD option items ─────────────────────────────────────────────
function getVisibleOptions() {
  return Array.from(document.querySelectorAll(
    // MTD — exact classes confirmed from DOM inspection
    ".mtd-select-item-content, .mtd-select-item, " +
    // Element UI
    ".el-select-dropdown__item, " +
    // Ant Design
    ".ant-select-item-option-content, " +
    // Generic ARIA
    "[role='option']"
  )).filter(el => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });
}

// ── Try to pick a matching option from the open dropdown ──────────────────────
async function pickDropdownOption(value) {
  await sleep(250);
  const options = getVisibleOptions();
  if (options.length === 0) return false;

  const norm = value.trim().toLowerCase();
  // 1. Exact text match
  let match = options.find(o => o.textContent.trim().toLowerCase() === norm);
  // 2. Option text contains our value
  if (!match) match = options.find(o => o.textContent.trim().toLowerCase().includes(norm));
  // 3. Our value contains the option text (for short options like "女")
  if (!match) match = options.find(o => {
    const ot = o.textContent.trim().toLowerCase();
    return ot.length > 0 && norm.includes(ot);
  });

  if (match) {
    match.scrollIntoView({ block: "nearest" });
    // Prefer clicking the parent .mtd-select-item if content element
    const clickTarget = match.closest(".mtd-select-item") || match;
    clickTarget.click();
    await sleep(120);
    return true;
  }
  return false;
}

// ── Fill an MTD select field ───────────────────────────────────────────────────
async function fillMtdSelect(el, rawValue) {
  const value = normaliseValue(rawValue);

  // The real trigger to click is the .mtd-select container (or .mtd-select-filter)
  const trigger = el.closest(".mtd-select") || el.closest(".mtd-select-filter") || el;

  trigger.click();
  await sleep(200);

  // For searchable selects: type into the filter input to narrow results
  const filterInput = trigger.querySelector(".mtd-select-filter-input")
                   || (trigger.classList.contains("mtd-select-filter-input") ? trigger : null);
  if (filterInput && filterInput !== el) {
    setNativeValue(filterInput, value);
    await sleep(350);
  }

  const picked = await pickDropdownOption(value);
  if (!picked) {
    // Close the dropdown and leave the typed value
    document.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
}

// ── Parse "2023-09" / "2023" → { year, month } ───────────────────────────────
function parseDateValue(value) {
  const parts = String(value).split("-");
  return {
    year:  parseInt(parts[0], 10) || null,
    month: parseInt(parts[1], 10) || null,
  };
}

// ── Detect whether an element is a date-picker trigger ───────────────────────
function isDateInput(el) {
  const ph = el.getAttribute("placeholder") || "";
  const nearby = getNearbyText(el);
  return (
    el.getAttribute("type") === "date" ||
    /yyyy|mm|dd|年|月/i.test(ph) ||
    /入学|毕业|在校|开始时间|结束时间|日期|start.*date|end.*date/i.test(ph + " " + nearby)
  );
}

// ── Get all currently visible picker panels on the page ───────────────────────
function getVisiblePanels() {
  // Exact known classes first (e.g. Meituan MTD, Element UI, Ant Design)
  const exactSel =
    ".mtd-datepicker-pop, .mtd-month-calendar, .mtd-month-calendar-content, " +
    ".el-picker-panel, .el-date-picker, .el-date-range-picker, " +
    ".ant-picker-dropdown, .ant-calendar, " +
    ".flatpickr-calendar, .datepicker, [class*='DatePicker__panel']";
  const exact = Array.from(document.querySelectorAll(exactSel)).filter(el => {
    const r = el.getBoundingClientRect();
    return r.width > 80 && r.height > 60;
  });
  if (exact.length > 0) return exact;

  // Fallback: scan all elements for date/pick/calendar keywords
  return Array.from(document.querySelectorAll("div, section, aside")).filter(el => {
    if (!el.className || typeof el.className !== "string") return false;
    if (!/pick|date|calendar|calend|month/i.test(el.className)) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 100 && rect.height > 60;
  });
}

// ── Read the year currently shown in a picker panel header ───────────────────
function readPanelYear(panel) {
  // ── MTD (Meituan Design) ──────────────────────────────────────────────────
  const mtdYearBtn = panel.querySelector(".mtd-month-calendar-year-btn");
  if (mtdYearBtn) {
    const n = parseInt(mtdYearBtn.textContent.replace(/\D/g, ""), 10);
    if (n > 1990 && n < 2100) return { year: n, el: mtdYearBtn };
  }

  // ── Element UI ────────────────────────────────────────────────────────────
  const elLabel = panel.querySelector(".el-date-picker__header-label");
  if (elLabel) {
    const n = parseInt(elLabel.textContent.replace(/\D/g, ""), 10);
    if (n > 1990 && n < 2100) return { year: n, el: elLabel };
  }

  // ── Generic fallback ──────────────────────────────────────────────────────
  const candidates = panel.querySelectorAll("[class*='year'], [class*='Year']");
  for (const c of candidates) {
    if (["button","input","select"].includes(c.tagName.toLowerCase())) continue;
    const n = parseInt(c.textContent.replace(/\D/g, ""), 10);
    if (n > 1990 && n < 2100) return { year: n, el: c };
  }

  const m = panel.textContent.match(/\b(19|20)\d{2}\b/);
  if (m) return { year: parseInt(m[0], 10), el: panel };
  return null;
}

// ── Find prev-year and next-year buttons in a panel ───────────────────────────
function findYearNavButtons(panel) {
  // ── MTD (Meituan Design): exact classes ───────────────────────────────────
  const mtdPrev = panel.querySelector(".mtd-month-calendar-year-switcher.left-switcher");
  const mtdNext = panel.querySelector(".mtd-month-calendar-year-switcher.right-switcher");
  if (mtdPrev || mtdNext) return { prev: mtdPrev, next: mtdNext };

  // ── Element UI ────────────────────────────────────────────────────────────
  const elPrev = panel.querySelector(".el-icon-d-arrow-left")?.closest("button")
               || panel.querySelector("button.el-date-picker__prev-btn");
  const elNext = panel.querySelector(".el-icon-d-arrow-right")?.closest("button")
               || panel.querySelector("button.el-date-picker__next-btn");
  if (elPrev || elNext) return { prev: elPrev, next: elNext };

  // ── Generic fallback: first/last clickable in the header row ─────────────
  let prev = null, next = null;
  const allClickable = Array.from(panel.querySelectorAll("button, span[role='button'], a"));
  for (const b of allClickable) {
    const cls = ((b.className || "") + " " + (b.getAttribute("aria-label") || "")).toLowerCase();
    if (!prev && /prev|left|上一|backward/i.test(cls))  prev = b;
    if (!next && /next|right|下一|forward/i.test(cls))  next = b;
  }
  if (!prev || !next) {
    const header = panel.querySelector("[class*='header'], [class*='Header']");
    if (header) {
      const btns = Array.from(header.querySelectorAll("button, span[role='button']"))
        .filter(b => b.getBoundingClientRect().width > 0);
      if (!prev && btns[0])                    prev = btns[0];
      if (!next && btns[btns.length - 1])      next = btns[btns.length - 1];
    }
  }
  return { prev, next };
}

// ── Navigate a panel to the target year ──────────────────────────────────────
async function navigatePanelYear(panel, targetYear) {
  for (let i = 0; i < 15; i++) {
    const info = readPanelYear(panel);
    if (!info || info.year === targetYear) break;

    const { prev, next } = findYearNavButtons(panel);
    const btn = info.year > targetYear ? prev : next;
    if (!btn) break;
    btn.click();
    await sleep(120);
  }
}

// ── Click the correct month cell inside a panel ───────────────────────────────
async function clickMonthCell(panel, month) {
  await sleep(80);
  const targetText = `${month}月`;

  // ── MTD (Meituan Design): .mtd-month-panel-list-data ─────────────────────
  const mtdCells = Array.from(panel.querySelectorAll(".mtd-month-panel-list-data"));
  if (mtdCells.length > 0) {
    const cell = mtdCells.find(c => c.textContent.trim() === targetText);
    if (cell) { cell.click(); await sleep(120); return true; }
  }

  // ── Element UI: td in .el-month-table ────────────────────────────────────
  const elCells = Array.from(panel.querySelectorAll(".el-month-table td .cell"));
  if (elCells.length > 0) {
    const cell = elCells.find(c => c.textContent.trim() === targetText);
    if (cell) { cell.click(); await sleep(120); return true; }
  }

  // ── Generic fallback ──────────────────────────────────────────────────────
  const allCells = Array.from(panel.querySelectorAll(
    "td, li, [role='button'], [class*='cell'], [class*='month-item'], [class*='monthItem']"
  ));
  const cell = allCells.find(c => {
    const t = c.textContent.trim();
    if (t === targetText) return true;
    if (/^\d+月$/.test(t) && parseInt(t) === month) return true;
    if (/^\d+$/.test(t) && parseInt(t) === month && allCells.length <= 16) return true;
    return false;
  });
  if (cell) { cell.click(); await sleep(120); return true; }
  return false;
}

// ── Wait for a new picker panel to appear after a click ───────────────────────
async function waitForNewPanel(existingPanels, timeoutMs = 600) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const current = getVisiblePanels();
    const newPanels = current.filter(p => !existingPanels.includes(p));
    if (newPanels.length > 0) return newPanels;
    await sleep(50);
  }
  // If no NEW panel, return whatever is visible now (picker may have been already open)
  return getVisiblePanels();
}

// ── Fill a single element ─────────────────────────────────────────────────────
async function fillField(el, value) {
  el.scrollIntoView({ block: "center", behavior: "smooth" });
  await sleep(80);

  // ── Standard date input (type="date") ──────────────────────────────────────
  if (el.getAttribute("type") === "date") {
    setNativeValue(el, value);
    el.blur();
    return;
  }

  // ── Custom date-picker widget ─────────────────────────────────────────────
  if (isDateInput(el)) {
    const { year, month } = parseDateValue(value);
    if (!year) { setNativeValue(el, value); return; }

    // Snapshot panels already visible before we click
    const before = getVisiblePanels();

    el.click();

    // Wait for the new panel(s) to appear
    const panels = await waitForNewPanel(before, 700);

    if (panels.length === 0) {
      // No panel found → fallback to typing
      setNativeValue(el, `${year}-${String(month || 1).padStart(2, "0")}`);
      el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
      return;
    }

    // For a range-picker two panels open at once; pick the one
    // whose currently-displayed year is closer to our target
    let panel = panels[0];
    if (panels.length > 1) {
      panel = panels.reduce((best, p) => {
        const bi = readPanelYear(best), pi = readPanelYear(p);
        if (!bi) return p;
        if (!pi) return best;
        return Math.abs(pi.year - year) < Math.abs(bi.year - year) ? p : best;
      }, panels[0]);
    }

    await navigatePanelYear(panel, year);
    const clicked = await clickMonthCell(panel, month);

    // If month click failed (picker showed a full calendar, not month grid),
    // fall back to direct value injection
    if (!clicked) {
      setNativeValue(el, `${year}-${String(month || 1).padStart(2, "0")}-01`);
    }

    await sleep(80);
    return;
  }

  // ── MTD / generic select trigger ─────────────────────────────────────────
  if (isSelectTrigger(el)) {
    await fillMtdSelect(el, value);
    return;
  }

  // ── Plain text / textarea / contenteditable ───────────────────────────────
  el.focus();
  setNativeValue(el, value);
  el.blur();
}

// ── Highlight detected fields with a subtle border ───────────────────────────
function highlightFields(detectedMap) {
  for (const key of Object.keys(detectedMap)) {
    const el = detectedMap[key];
    el.style.outline = "2px solid #2D6A4F";
    el.style.outlineOffset = "2px";
    el.setAttribute("data-autofill-key", key);
  }
}

function clearHighlights() {
  document.querySelectorAll("[data-autofill-key]").forEach((el) => {
    el.style.outline = "";
    el.style.outlineOffset = "";
  });
}

// ── Message listener (from popup) ────────────────────────────────────────────
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {

  // Popup asks: which fields did we detect?
  if (msg.type === "SCAN_FIELDS") {
    const detected = detectFields();
    highlightFields(detected);
    const summary = {};
    for (const [key, el] of Object.entries(detected)) {
      summary[key] = {
        currentValue: el.value || el.innerText || "",
        tagName: el.tagName,
        placeholder: el.getAttribute("placeholder") || "",
      };
    }
    sendResponse({ fields: summary });
    return true;
  }

  // Popup instructs: fill these key→value pairs
  if (msg.type === "FILL_FIELDS") {
    const detected = detectFields();
    const results = {};
    (async () => {
      for (const [key, value] of Object.entries(msg.data)) {
        if (detected[key]) {
          await fillField(detected[key], value);
          results[key] = "filled";
        } else {
          results[key] = "not_found";
        }
      }
      sendResponse({ results });
    })();
    return true; // keep channel open for async
  }

  // Popup instructs: clear highlights
  if (msg.type === "CLEAR_HIGHLIGHTS") {
    clearHighlights();
    sendResponse({ ok: true });
    return true;
  }

  return true;
});

} // end window.__autofillContentLoaded guard
