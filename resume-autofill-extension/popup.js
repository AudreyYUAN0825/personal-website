// ── popup.js — Resume Reference Panel ────────────────────────────────────────

let profile = null;
let toastTimer = null;

// ── Load profile.json ─────────────────────────────────────────────────────────
async function loadProfile() {
  try {
    const res = await fetch(chrome.runtime.getURL("profile.json"));
    profile = await res.json();
    render();
  } catch (e) {
    document.getElementById("personalContent").innerHTML =
      `<p style="color:#ef4444;padding:12px">Could not load profile.json</p>`;
  }
}

// ── Toast notification ────────────────────────────────────────────────────────
function showToast(text = "已复制 ✓") {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
}

// ── Copy text to clipboard ────────────────────────────────────────────────────
function copyText(text, el) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("已复制 ✓");
    if (el) {
      el.classList.add("copied");
      setTimeout(() => el.classList.remove("copied"), 1200);
    }
  });
}

// ── Build a copyable row ──────────────────────────────────────────────────────
function row(label, value, multiline = false) {
  if (!value) return "";
  const escaped = String(value).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `
    <div class="row">
      <span class="row-label">${label}</span>
      <span class="row-value ${multiline ? "multiline" : ""}"
            data-copy="${String(value).replace(/"/g, "&quot;")}">${escaped}</span>
    </div>`;
}

// ── Render all content ────────────────────────────────────────────────────────
function render() {
  if (!profile) return;
  renderPersonal();
  renderEducation();
  renderExperience();
  renderMore();
  attachCopyListeners();
}

// ── Personal tab ──────────────────────────────────────────────────────────────
function renderPersonal() {
  const p = profile.personal;
  const langs = p.languages.map(l => `${l.language} (${l.level})`).join(" · ");

  document.getElementById("personalContent").innerHTML = `
    <div class="section">
      <div class="section-title">基本信息 Basic Info</div>
      ${row("姓名 EN",   p.fullName)}
      ${row("姓名 ZH",   p.fullNameZh || "")}
      ${row("邮箱 Email", p.email_primary)}
      ${row("邮箱 Work",  p.email_work || "")}
      ${row("电话 Phone", p.phone || "（未填写）")}
      ${row("城市 City",  p.location)}
      ${row("国籍",       p.nationality || "")}
      ${row("语言",       langs)}
    </div>
    <div class="section">
      <div class="section-title">链接 Links</div>
      ${row("LinkedIn",  p.linkedin)}
      ${row("Website",   p.website)}
    </div>
    <div class="section">
      <div class="section-title">个人简介 Tagline</div>
      ${row("English",   profile.tagline?.en || "", true)}
      ${row("中文",       profile.tagline?.zh || "", true)}
    </div>
  `;
}

// ── Education tab ─────────────────────────────────────────────────────────────
function renderEducation() {
  const html = profile.education.map((e, i) => `
    <div class="card">
      <div class="card-title">${e.institution} ${e.institutionZh ? `· ${e.institutionZh}` : ""}</div>
      <div class="card-sub">${e.startDate} – ${e.endDate || "Present"} · ${e.location}</div>
      ${row("学历 Degree", e.degreeZh || e.degree)}
      ${row("专业 Major",  e.field)}
      ${e.gpa ? row("GPA", e.gpa) : ""}
      ${e.highlights && e.highlights.length ? `
        <div style="margin-top:6px;font-size:10.5px;color:#9ca3af;margin-bottom:3px">亮点（点击复制全部）</div>
        <div class="bullets" data-copy="${e.highlights.join("\n").replace(/"/g, "&quot;")}">
          ${e.highlights.map(h => `<div class="bullet-item">${h}</div>`).join("")}
        </div>` : ""}
    </div>
  `).join("");
  document.getElementById("educationContent").innerHTML = html;
}

// ── Experience tab ────────────────────────────────────────────────────────────
function renderExperience() {
  const html = profile.experiences.map(e => `
    <div class="card">
      <div class="card-title">${e.organisationShort} — ${e.role}</div>
      <div class="card-sub">${e.startDate} – ${e.endDate || "至今"} · ${e.type || ""} · ${e.location}</div>
      ${row("全称 Full",  e.organisation)}
      ${row("职位 Role",  e.role)}
      ${row("类型 Type",  e.type || "")}
      ${e.bullets && e.bullets.length ? `
        <div style="margin-top:6px;font-size:10.5px;color:#9ca3af;margin-bottom:3px">工作描述（点击复制全部）</div>
        <div class="bullets" data-copy="${e.bullets.join("\n").replace(/"/g, "&quot;")}">
          ${e.bullets.map(b => `<div class="bullet-item">${b}</div>`).join("")}
        </div>` : ""}
      ${e.impact ? `
        <div style="margin-top:5px;font-size:10.5px;color:#9ca3af;margin-bottom:3px">Impact（点击复制）</div>
        <div class="bullets" data-copy="${e.impact.replace(/"/g, "&quot;")}">
          <div>${e.impact}</div>
        </div>` : ""}
    </div>
  `).join("");
  document.getElementById("experienceContent").innerHTML = html;
}

// ── More tab (Projects / Languages / Skills / Cover Letter) ───────────────────
function renderMore() {
  let html = "";

  // Languages
  if (profile.personal?.languages?.length) {
    html += `<div class="section">
      <div class="section-title">语言 Languages</div>
      ${profile.personal.languages.map(l =>
        row(l.language, l.level)
      ).join("")}
    </div>`;
  }

  // Projects
  if (profile.projects?.length) {
    html += `<div class="section"><div class="section-title">项目 Projects</div>`;
    html += profile.projects.map(p => `
      <div class="card">
        <div class="card-title">${p.name}</div>
        <div class="card-sub">${p.startDate || ""} – ${p.endDate || ""}</div>
        ${row("角色 Role", p.role || "")}
        ${p.description ? `<div class="bullets" data-copy="${p.description.replace(/"/g, "&quot;")}"><div>${p.description}</div></div>` : ""}
        ${p.bullets?.length ? `<div class="bullets" data-copy="${p.bullets.join("\n").replace(/"/g, "&quot;")}">${p.bullets.map(b => `<div class="bullet-item">${b}</div>`).join("")}</div>` : ""}
      </div>`).join("");
    html += `</div>`;
  }

  // Skills
  if (profile.skills?.length) {
    html += `<div class="section">
      <div class="section-title">技能 Skills</div>
      ${profile.skills.map(s =>
        row(s.category || s.name || "Skill", Array.isArray(s.items) ? s.items.join(", ") : (s.level || s.description || ""))
      ).join("")}
    </div>`;
  }

  // Cover letter snippets
  if (profile.coverLetterSnippets) {
    html += `<div class="section"><div class="section-title">Cover Letter 片段</div>`;
    for (const [key, val] of Object.entries(profile.coverLetterSnippets)) {
      html += `<div style="margin-bottom:6px">
        <div style="font-size:10px;color:#9ca3af;margin-bottom:2px">${key}</div>
        <div class="bullets" data-copy="${String(val).replace(/"/g, "&quot;")}">${val}</div>
      </div>`;
    }
    html += `</div>`;
  }

  // Open-to roles
  if (profile.openTo) {
    html += `<div class="section">
      <div class="section-title">意向 Open To</div>
      ${row("角色 Roles",    (profile.openTo.roles || []).join(", "))}
      ${row("地点 Locations",(profile.openTo.locations || []).join(", "))}
      ${row("类型 Types",    (profile.openTo.types || []).join(", "))}
    </div>`;
  }

  document.getElementById("moreContent").innerHTML = html || "<p style='color:#9ca3af;padding:10px'>No additional data</p>";
}

// ── Attach click-to-copy on all copyable elements ────────────────────────────
function attachCopyListeners() {
  document.querySelectorAll("[data-copy]").forEach(el => {
    el.addEventListener("click", () => {
      copyText(el.dataset.copy, el);
    });
  });
}

// ── Tab switching ─────────────────────────────────────────────────────────────
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
  });
});

// ── Init ──────────────────────────────────────────────────────────────────────
loadProfile();
