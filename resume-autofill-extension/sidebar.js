// sidebar.js — injected persistent floating panel
// Guarded so re-injection is safe

if (!window.__autofillSidebarLoaded) {
  window.__autofillSidebarLoaded = true;

  // ── CSS (inside Shadow DOM — fully isolated from page styles) ──────────────
  const CSS = `
    :host { all: initial; }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    #panel {
      position: fixed;
      top: 60px;
      right: 16px;
      width: 380px;
      max-height: calc(100vh - 80px);
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
      font-size: 13px;
      color: #1a1a1a;
      overflow: hidden;
      transition: opacity 0.15s, transform 0.15s;
    }
    #panel.hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateY(-6px);
    }

    /* drag handle / header */
    .hd {
      background: linear-gradient(135deg, #1e3a2f 0%, #2d5a42 100%);
      color: #fff;
      padding: 11px 14px 10px;
      cursor: move;
      user-select: none;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .hd-left { display: flex; flex-direction: column; gap: 1px; }
    .hd-name { font-size: 14px; font-weight: 700; letter-spacing: 0.01em; }
    .hd-sub  { font-size: 10.5px; opacity: 0.65; }
    .hd-right { display: flex; align-items: center; gap: 6px; }

    .btn-icon {
      background: rgba(255,255,255,0.15);
      border: none;
      color: #fff;
      width: 24px; height: 24px;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s;
    }
    .btn-icon:hover { background: rgba(255,255,255,0.3); }

    /* tabs */
    .tabs {
      display: flex;
      background: #f8f9fa;
      border-bottom: 1px solid #e5e7eb;
      flex-shrink: 0;
    }
    .tab {
      flex: 1;
      padding: 8px 4px;
      text-align: center;
      font-size: 11.5px;
      font-weight: 500;
      color: #6b7280;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.15s;
      user-select: none;
    }
    .tab:hover  { color: #1e3a2f; background: #f0faf4; }
    .tab.active { color: #1e3a2f; border-bottom-color: #1e3a2f; font-weight: 700; background: #fff; }

    /* scroll area */
    .body {
      flex: 1;
      overflow-y: auto;
      padding: 10px 12px 16px;
      overscroll-behavior: contain;
    }
    .body::-webkit-scrollbar { width: 4px; }
    .body::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }

    .panel-tab { display: none; }
    .panel-tab.active { display: block; }

    /* sections */
    .sec { margin-bottom: 14px; }
    .sec-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #9ca3af;
      margin-bottom: 5px;
      padding-bottom: 4px;
      border-bottom: 1px solid #f0f0f0;
    }

    /* rows */
    .row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 4px 6px;
      border-radius: 6px;
      margin-bottom: 1px;
      cursor: pointer;
      transition: background 0.1s;
    }
    .row:hover { background: #f0faf4; }
    .row-label {
      font-size: 10px;
      color: #9ca3af;
      min-width: 62px;
      padding-top: 2px;
      flex-shrink: 0;
    }
    .row-val {
      font-size: 12.5px;
      color: #111827;
      flex: 1;
      line-height: 1.5;
      word-break: break-word;
      border-radius: 4px;
      padding: 0 3px;
      transition: background 0.1s;
    }
    .row:hover .row-val { background: #d1fae5; }
    .row-val.copied { background: #bbf7d0 !important; color: #166534; }

    /* cards */
    .card {
      background: #f9fafb;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      padding: 10px 11px;
      margin-bottom: 8px;
    }
    .card-title { font-size: 12.5px; font-weight: 700; color: #1e3a2f; }
    .card-title-en { font-size: 10.5px; color: #6b7280; font-weight: 400; margin-top: 1px; }
    .card-meta { font-size: 10.5px; color: #6b7280; margin: 3px 0 6px; }

    /* bullets block */
    .bullets {
      margin-top: 5px;
      padding: 7px 9px;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 11.5px;
      line-height: 1.6;
      color: #374151;
      cursor: pointer;
      transition: background 0.1s, border-color 0.1s;
    }
    .bullets:hover { background: #f0faf4; border-color: #6ee7b7; }
    .bullets.copied { background: #bbf7d0; color: #166534; border-color: #34d399; }
    .bl::before { content: "• "; color: #6b7280; }

    /* hint */
    .hint { font-size: 10px; color: #9ca3af; margin-bottom: 2px; }

    /* tags */
    .tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 5px; }
    .tag {
      font-size: 10px;
      background: #ecfdf5; color: #065f46;
      border: 1px solid #a7f3d0;
      border-radius: 4px; padding: 1px 6px;
    }

    /* toast */
    .toast {
      position: fixed;
      bottom: 14px;
      left: 50%;
      transform: translateX(-50%);
      background: #1e3a2f;
      color: #fff;
      font-size: 12px;
      padding: 5px 16px;
      border-radius: 20px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 99;
      white-space: nowrap;
    }
    .toast.show { opacity: 1; }
  `;

  // ── Create shadow host ──────────────────────────────────────────────────────
  const host = document.createElement("div");
  host.id = "__autofill-sidebar-host__";
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = CSS;
  shadow.appendChild(style);

  // ── Panel HTML ──────────────────────────────────────────────────────────────
  const panel = document.createElement("div");
  panel.id = "panel";
  panel.innerHTML = `
    <div class="hd" id="dragHandle">
      <div class="hd-left">
        <div class="hd-name">袁齐惠 · Qihui Yuan</div>
        <div class="hd-sub">点击字段复制 · Click to copy</div>
      </div>
      <div class="hd-right">
        <button class="btn-icon" id="btnMin" title="最小化">—</button>
        <button class="btn-icon" id="btnClose" title="关闭">✕</button>
      </div>
    </div>

    <div class="tabs" id="tabBar">
      <div class="tab active" data-tab="personal">个人</div>
      <div class="tab" data-tab="education">教育</div>
      <div class="tab" data-tab="experience">经历</div>
      <div class="tab" data-tab="more">更多</div>
    </div>

    <div class="body" id="bodyArea">
      <div class="panel-tab active" id="tab-personal"></div>
      <div class="panel-tab" id="tab-education"></div>
      <div class="panel-tab" id="tab-experience"></div>
      <div class="panel-tab" id="tab-more"></div>
    </div>

    <div class="toast" id="toast">已复制 ✓</div>
  `;
  shadow.appendChild(panel);

  // ── State ──────────────────────────────────────────────────────────────────
  let minimised = false;
  let toastTimer = null;
  let profile = null;

  // ── Helpers ────────────────────────────────────────────────────────────────
  const $ = (sel) => shadow.querySelector(sel);

  function showToast(msg = "已复制 ✓") {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1500);
  }

  function copy(text, el) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("已复制 ✓");
      if (el) {
        el.classList.add("copied");
        setTimeout(() => el.classList.remove("copied"), 1200);
      }
    });
  }

  function esc(s) {
    return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function row(label, value, multiline) {
    if (!value) return "";
    return `<div class="row" data-copy="${esc(value)}">
      <span class="row-label">${label}</span>
      <span class="row-val${multiline ? " multiline" : ""}">${esc(value)}</span>
    </div>`;
  }

  function bullets(items, label) {
    if (!items || !items.length) return "";
    const text = items.join("\n");
    return `${label ? `<div class="hint">${label}（点击复制）</div>` : ""}
    <div class="bullets" data-copy="${esc(text)}">
      ${items.map(b => `<div class="bl">${esc(b)}</div>`).join("")}
    </div>`;
  }

  // ── Render tabs ─────────────────────────────────────────────────────────────
  function renderPersonal() {
    const p = profile.personal;
    const langs = p.languages.map(l => `${l.language}（${l.level}）`).join("  ·  ");
    $("#tab-personal").innerHTML = `
      <div class="sec">
        <div class="sec-title">基本信息</div>
        ${row("中文姓名", p.fullNameZh)}
        ${row("英文姓名", p.fullName)}
        ${row("邮箱",     p.email_primary)}
        ${p.email_work ? row("工作邮箱", p.email_work) : ""}
        ${row("手机",     p.phone || "（未填写）")}
        ${row("微信",     p.wechat || "")}
        ${row("现居城市", p.location)}
        ${row("国籍",     p.nationality)}
        ${row("语言",     langs)}
      </div>
      <div class="sec">
        <div class="sec-title">链接</div>
        ${row("LinkedIn", p.linkedin)}
        ${row("个人网站", p.website)}
      </div>
      <div class="sec">
        <div class="sec-title">个人简介（点击复制）</div>
        ${row("中文简介", profile.tagline?.zh || "", true)}
        ${row("英文简介", profile.tagline?.en || "", true)}
      </div>
    `;
  }

  function renderEducation() {
    $("#tab-education").innerHTML = profile.education.map(e => `
      <div class="card">
        <div class="card-title">${esc(e.school)}</div>
        ${e.schoolEn ? `<div class="card-title-en">${esc(e.schoolEn)}</div>` : ""}
        <div class="card-meta">${esc(e.startDate)} – ${esc(e.endDate || "至今")} · ${esc(e.location)}</div>
        ${row("学历",   e.degree)}
        ${row("专业",   e.major)}
        ${e.gpa ? row("GPA", e.gpa) : ""}
        ${bullets(e.highlights, "亮点")}
        ${e.tags?.length ? `<div class="tags">${e.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
      </div>
    `).join("");
  }

  function renderExperience() {
    $("#tab-experience").innerHTML = profile.experiences.map(e => `
      <div class="card">
        <div class="card-title">${esc(e.orgShort)} — ${esc(e.role)}</div>
        <div class="card-meta">${esc(e.startDate)} – ${esc(e.endDate || "至今")} · ${esc(e.type || "")} · ${esc(e.location)}</div>
        ${row("机构全称", e.orgZh)}
        ${row("职位",     e.role)}
        ${row("类型",     e.type || "")}
        ${bullets(e.bullets, "工作描述")}
        ${e.impact ? `<div class="hint" style="margin-top:5px">成果（点击复制）</div>
          <div class="bullets" data-copy="${esc(e.impact)}">${esc(e.impact)}</div>` : ""}
      </div>
    `).join("");
  }

  function renderMore() {
    let html = "";

    // Projects
    if (profile.projects?.length) {
      html += `<div class="sec"><div class="sec-title">项目经历</div>`;
      html += profile.projects.map(p => `
        <div class="card">
          <div class="card-title">${esc(p.name)}</div>
          <div class="card-meta">${esc(p.startDate || "")} – ${esc(p.endDate || "至今")} · ${esc(p.role || "")}</div>
          ${bullets(p.bullets, "项目描述")}
          ${p.tags?.length ? `<div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
        </div>`).join("");
      html += `</div>`;
    }

    // Additional / Campus
    if (profile.additional?.length) {
      html += `<div class="sec"><div class="sec-title">其他经历 & 校园活动</div>`;
      html += profile.additional.map(a => `
        <div class="card">
          <div class="card-title">${esc(a.orgZh)}</div>
          <div class="card-meta">${esc(a.role)} · ${esc(a.period || "")}</div>
          ${bullets(a.bullets, "经历描述")}
        </div>`).join("");
      html += `</div>`;
    }

    // Skills
    if (profile.skills?.length) {
      html += `<div class="sec"><div class="sec-title">技能</div>
        ${profile.skills.map(s =>
          row(s.category, Array.isArray(s.items) ? s.items.join("、") : "")
        ).join("")}
      </div>`;
    }

    // Cover letter snippets
    if (profile.coverLetterSnippets) {
      html += `<div class="sec"><div class="sec-title">求职信片段（点击复制）</div>`;
      for (const [key, val] of Object.entries(profile.coverLetterSnippets)) {
        html += `<div class="hint" style="margin-bottom:3px">${esc(key)}</div>
          <div class="bullets" data-copy="${esc(val)}" style="margin-bottom:8px">${esc(val)}</div>`;
      }
      html += `</div>`;
    }

    // Open-to
    if (profile.openTo) {
      html += `<div class="sec"><div class="sec-title">求职意向</div>
        ${row("意向岗位", (profile.openTo.roles || []).join("、"))}
        ${row("意向地点", (profile.openTo.locations || []).join("、"))}
        ${profile.openTo.visaNote ? row("签证说明", profile.openTo.visaNote) : ""}
      </div>`;
    }

    $("#tab-more").innerHTML = html || "<p style='color:#9ca3af;padding:10px;font-size:12px'>暂无更多信息</p>";
  }

  function renderAll() {
    renderPersonal();
    renderEducation();
    renderExperience();
    renderMore();
    attachCopy();
  }

  // ── Click-to-copy on all [data-copy] elements ────────────────────────────
  function attachCopy() {
    shadow.querySelectorAll("[data-copy]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        copy(el.dataset.copy, el);
      });
    });
  }

  // ── Tab switching ─────────────────────────────────────────────────────────
  $("#tabBar").addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    shadow.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    shadow.querySelectorAll(".panel-tab").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    $(`#tab-${tab.dataset.tab}`).classList.add("active");
  });

  // ── Close & minimise ──────────────────────────────────────────────────────
  $("#btnClose").addEventListener("click", () => {
    panel.classList.add("hidden");
  });

  $("#btnMin").addEventListener("click", () => {
    minimised = !minimised;
    const body   = $("#bodyArea");
    const tabBar = $("#tabBar");
    body.style.display   = minimised ? "none" : "";
    tabBar.style.display = minimised ? "none" : "";
    $("#btnMin").textContent = minimised ? "□" : "—";
  });

  // ── Drag to move ──────────────────────────────────────────────────────────
  let dragging = false, ox = 0, oy = 0;
  $("#dragHandle").addEventListener("mousedown", (e) => {
    if (e.target.closest(".btn-icon")) return;
    dragging = true;
    const rect = panel.getBoundingClientRect();
    ox = e.clientX - rect.left;
    oy = e.clientY - rect.top;
    e.preventDefault();
  });
  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    panel.style.left  = `${e.clientX - ox}px`;
    panel.style.top   = `${e.clientY - oy}px`;
    panel.style.right = "auto";
  });
  document.addEventListener("mouseup", () => { dragging = false; });

  // ── Load profile & render ─────────────────────────────────────────────────
  async function init() {
    try {
      const url = chrome.runtime.getURL("profile.json");
      const res = await fetch(url);
      profile = await res.json();
      renderAll();
    } catch (e) {
      $("#tab-personal").innerHTML =
        `<p style="color:#ef4444;padding:12px;font-size:12px">无法加载 profile.json：${e.message}</p>`;
    }
  }
  init();

  // ── Listen for toggle message from background.js ──────────────────────────
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "TOGGLE_SIDEBAR") {
      panel.classList.toggle("hidden");
    }
  });

} // end guard
