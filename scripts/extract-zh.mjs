#!/usr/bin/env node
/**
 * 从 home.ts 提取全部中文内容，按 home.ts 结构分层输出到 content-zh.txt
 * 运行：npm run extract-zh
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const homePath = path.join(root, "src/content/home.ts");
const outputPath = path.join(root, "content-zh.txt");

const content = fs.readFileSync(homePath, "utf8");

function extractZh(text) {
  const results = [];
  const regex = /zh:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    results.push(m[1].replace(/\\"/g, '"'));
  }
  return results;
}

function extractZhWithField(block) {
  const fields = {};
  const fieldNames = ["label", "org", "role", "location", "title", "context", "problem", "approach", "impact", "result", "subtitle", "description", "name", "school", "degree", "program", "background", "value", "principle", "availability", "visaNote"];
  for (const fn of fieldNames) {
    const re = new RegExp(`${fn}:\\s*\\{[^}]*zh:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "g");
    let m;
    while ((m = re.exec(block)) !== null) {
      if (!fields[fn]) fields[fn] = [];
      const val = m[1].replace(/\\"/g, '"');
      if (val && /[\u4e00-\u9fa5]/.test(val)) fields[fn].push(val);
    }
  }
  const bulletsRe = /bullets:\s*\[([\s\S]*?)\],/g;
  let bm;
  while ((bm = bulletsRe.exec(block)) !== null) {
    const zhInBullets = extractZh(bm[1]);
    if (zhInBullets.length) fields.bullets = zhInBullets;
  }
  const tagsRe = /tags:\s*\[([\s\S]*?)\],/g;
  let tm;
  while ((tm = tagsRe.exec(block)) !== null) {
    const zhInTags = extractZh(tm[1]);
    if (zhInTags.length) fields.tags = zhInTags;
  }
  const deliverablesRe = /deliverables:\s*\[([\s\S]*?)\],/g;
  let dm;
  while ((dm = deliverablesRe.exec(block)) !== null) {
    const zhInDel = extractZh(dm[1]);
    if (zhInDel.length) fields.deliverables = zhInDel;
  }
  const skillsRe = /skills:\s*\[([\s\S]*?)\],/g;
  let sm;
  while ((sm = skillsRe.exec(block)) !== null) {
    const zhInSkills = extractZh(sm[1]);
    if (zhInSkills.length) fields.skills = zhInSkills;
  }
  const highlightsRe = /highlights:\s*\{\s*zh:\s*\[([\s\S]*?)\]/;
  const hm = block.match(highlightsRe);
  if (hm) {
    const zhInHighlights = extractZh(hm[1]);
    if (zhInHighlights.length) fields.highlights = zhInHighlights;
  }
  const focusTagsRe = /focusTags:\s*\{\s*zh:\s*\[([^\]]+)\]/;
  const ftm = block.match(focusTagsRe);
  if (ftm) {
    const arr = ftm[1].match(/"([^"]+)"/g) || [];
    fields.focusTags = arr.map(s => s.slice(1, -1)).filter(s => /[\u4e00-\u9fa5]/.test(s));
  }
  const metricsRe = /metrics:\s*\[([\s\S]*?)\],/g;
  let mm;
  const metricsList = [];
  while ((mm = metricsRe.exec(block)) !== null) {
    const labelRe = /label:\s*\{\s*zh:\s*"([^"]+)"/g;
    let lm;
    while ((lm = labelRe.exec(mm[1])) !== null) metricsList.push(lm[1]);
  }
  if (metricsList.length) fields.metrics = metricsList;
  const paragraphsRe = /paragraphs:\s*\[([\s\S]*?)\],/g;
  let pm;
  while ((pm = paragraphsRe.exec(block)) !== null) {
    const zhInPar = extractZh(pm[1]);
    if (zhInPar.length) fields.paragraphs = zhInPar;
  }
  return fields;
}

function getSectionContent(sectionName) {
  const re = new RegExp(`\\n    ${sectionName}:\\s*\\[([\\s\\S]*?)\\n    \\],`, "m");
  const m = content.match(re);
  return m ? m[1] : "";
}

function splitItems(sectionContent, itemPattern) {
  const items = [];
  const re = new RegExp(itemPattern, "g");
  const matches = [];
  let m;
  while ((m = re.exec(sectionContent)) !== null) {
    matches.push({ index: m.index, slugOrId: m[1] });
  }
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : sectionContent.length;
    items.push({ slugOrId: matches[i].slugOrId, block: sectionContent.slice(start, end) });
  }
  return items;
}

const out = [];

out.push("# 袁齐惠个人网站 — 中文内容汇总");
out.push("");
out.push("> 从 home.ts 自动提取，运行 `npm run extract-zh` 同步。分层结构便于 AI 识别各板块内容。");
out.push("");
out.push("---");
out.push("");

// 一、导航与界面
out.push("# 一、导航与界面文案");
out.push("");
const uiZhMatch = content.match(/const uiZh: UiStrings = \{([\s\S]*?)\n\};/);
if (uiZhMatch) {
  const zhStrs = uiZhMatch[1].match(/["']([^"']*[\u4e00-\u9fa5]+[^"']*)["']/g) || [];
  zhStrs.forEach(s => { const v = s.slice(1, -1); if (v.length > 1) out.push(`- ${v}`); });
}
out.push("");

// 二、首页 Hero
out.push("# 二、首页 Hero");
out.push("");
const heroMatch = content.match(/\n    hero:\s*\{([\s\S]*?)\n    \},/);
const heroZh = heroMatch ? extractZh(heroMatch[1]) : [];
heroZh.filter(v => /[\u4e00-\u9fa5]/.test(v)).forEach(v => out.push(`- ${v}`));
out.push("");

// 三、关键数据
out.push("# 三、关键数据");
out.push("");
const metricsContent = getSectionContent("metrics");
const metricsItems = metricsContent.split(/\},\s*\{/).map((b, i) => ({ slugOrId: `metric-${i + 1}`, block: "{" + b + "}" }));
metricsItems.forEach((item, i) => {
  const f = extractZhWithField(item.block);
  const label = f.label?.[0] || f.context?.[0] || Object.values(f).flat()[0];
  if (label) out.push(`### 数据 ${i + 1}: ${label}`);
  if (f.context?.[0] && f.label?.[0]) out.push(`  - 说明: ${f.context[0]}`);
  out.push("");
});
out.push("");

// 四、核心能力
out.push("# 四、核心能力");
out.push("");
const capContent = getSectionContent("capabilities");
const capBlocks = capContent.split(/\},\s*\{/);
capBlocks.forEach((block, i) => {
  const f = extractZhWithField("{" + block + "}");
  const label = f.label?.[0] || "";
  out.push(`## 能力 ${i + 1}: ${label}`);
  if (f.description?.[0]) out.push(`- 描述: ${f.description[0]}`);
  out.push("");
});
out.push("");

// 五、工作经历
out.push("# 五、工作经历");
out.push("");
const expContent = getSectionContent("experiences");
const expItems = splitItems(expContent, /slug:\s*"([^"]+)"/);
expItems.forEach((item, i) => {
  const f = extractZhWithField(item.block);
  const org = f.org?.[0] || "未知机构";
  out.push(`## 经历 ${i + 1}: ${org}`);
  out.push("");
  if (f.role?.[0]) out.push(`- **职位**: ${f.role[0]}`);
  if (f.location?.[0]) out.push(`- **地点**: ${f.location[0]}`);
  if (f.context?.[0]) out.push(`- **背景**: ${f.context[0]}`);
  if (f.problem?.[0]) out.push(`- **任务**: ${f.problem[0]}`);
  if (f.approach?.[0]) out.push(`- **方法**: ${f.approach[0]}`);
  if (f.impact?.[0]) out.push(`- **成果**: ${f.impact[0]}`);
  if (f.bullets?.length) { out.push(`- **要点**:`); f.bullets.forEach(b => out.push(`  - ${b}`)); }
  if (f.tags?.length) out.push(`- **标签**: ${f.tags.join("、")}`);
  if (f.deliverables?.length) { out.push(`- **交付成果**:`); f.deliverables.forEach(d => out.push(`  - ${d}`)); }
  if (f.skills?.length) out.push(`- **技能**: ${f.skills.join("、")}`);
  out.push("");
});
out.push("");

// 六、项目案例
out.push("# 六、项目案例");
out.push("");
const projContent = getSectionContent("projects");
const projItems = splitItems(projContent, /slug:\s*"([^"]+)"/);
projItems.forEach((item, i) => {
  const f = extractZhWithField(item.block);
  const title = f.title?.[0] || "未知项目";
  out.push(`## 项目 ${i + 1}: ${title}`);
  out.push("");
  if (f.context?.[0]) out.push(`- **背景**: ${f.context[0]}`);
  if (f.problem?.[0]) out.push(`- **任务**: ${f.problem[0]}`);
  if (f.approach?.[0]) out.push(`- **方法**: ${f.approach[0]}`);
  if (f.result?.[0]) out.push(`- **结果**: ${f.result[0]}`);
  if (f.tags?.length) out.push(`- **标签**: ${f.tags.join("、")}`);
  if (f.deliverables?.length) { out.push(`- **交付成果**:`); f.deliverables.forEach(d => out.push(`  - ${d}`)); }
  if (f.skills?.length) out.push(`- **技能**: ${f.skills.join("、")}`);
  if (f.metrics?.length) out.push(`- **数据**: ${f.metrics.join("、")}`);
  out.push("");
});
out.push("");

// 七、发表与出版
out.push("# 七、发表与出版");
out.push("");
const pubMatch = content.match(/publications:\s*\[([\s\S]*?)\n\s+\],/);
if (pubMatch) {
  const pubContent = pubMatch[1];
  const pubBlocks = pubContent.split(/(?=type:\s*"|type:\s*'|{\s*type:)/).filter(b => b.trim());
  pubBlocks.forEach((block, i) => {
    const f = extractZhWithField(block);
    const title = f.title?.[0] || "";
    if (title) {
      out.push(`## 发表 ${i + 1}: ${title}`);
      if (f.summary?.[0]) out.push(`- 摘要: ${f.summary[0]}`);
      out.push("");
    }
  });
}
out.push("");

// 八、媒体报道
out.push("# 八、媒体报道");
out.push("");
const mediaContent = getSectionContent("media");
const mediaBlocks = mediaContent.split(/\},\s*\{/);
mediaBlocks.forEach((block, i) => {
  const f = extractZhWithField("{" + block + "}");
  const title = f.title?.[0] || Object.values(f).flat()[0];
  if (title) {
    out.push(`## 报道 ${i + 1}: ${title}`);
    if (f.context?.[0]) out.push(`- 内容: ${f.context[0]}`);
    out.push("");
  }
});
out.push("");

// 九、其他经历
out.push("# 九、其他经历与校园活动");
out.push("");
const addContent = getSectionContent("additional");
const addItems = splitItems(addContent, /slug:\s*"([^"]+)"/);
addItems.forEach((item, i) => {
  const f = extractZhWithField(item.block);
  const org = f.org?.[0] || "未知";
  out.push(`## 其他经历 ${i + 1}: ${org}`);
  if (f.role?.[0]) out.push(`- 角色: ${f.role[0]}`);
  if (f.context?.[0]) out.push(`- 背景: ${f.context[0]}`);
  if (f.impact?.[0]) out.push(`- 成果: ${f.impact[0]}`);
  if (f.bullets?.length) f.bullets.forEach(b => out.push(`  - ${b}`));
  out.push("");
});
out.push("");

// 十、工具与方法
out.push("# 十、工具与方法");
out.push("");
const toolsMatch = content.match(/tools:\s*\[([\s\S]*?)\n\s+\],/);
if (toolsMatch) {
  const zhInTools = extractZh(toolsMatch[1]);
  zhInTools.filter(v => /[\u4e00-\u9fa5]/.test(v)).forEach(v => out.push(`- ${v}`));
}
out.push("");

// 十一、关于我
out.push("# 十一、关于我");
out.push("");
const profileMatch = content.match(/profile:\s*\{([\s\S]*?)\n\s+\},/);
if (profileMatch) {
  const f = extractZhWithField(profileMatch[1]);
  if (f.paragraphs) f.paragraphs.forEach(p => out.push(`- ${p}`));
  if (f.focus) f.focus.forEach(x => out.push(`- 关注: ${x}`));
}
out.push("");

// 十二、教育背景
out.push("# 十二、教育背景");
out.push("");
const eduContent = getSectionContent("education");
const eduItems = splitItems(eduContent, /id:\s*"([^"]+)"/);
eduItems.forEach((item, i) => {
  const f = extractZhWithField(item.block);
  const school = f.school?.[0] || "未知学校";
  out.push(`## 教育 ${i + 1}: ${school}`);
  if (f.degree?.[0]) out.push(`- 学位: ${f.degree[0]}`);
  if (f.program?.[0]) out.push(`- 专业: ${f.program[0]}`);
  if (f.location?.[0]) out.push(`- 地点: ${f.location[0]}`);
  if (f.highlights?.length) { out.push(`- 亮点:`); f.highlights.forEach(h => out.push(`  - ${h}`)); }
  if (f.focusTags?.length) out.push(`- 标签: ${f.focusTags.join("、")}`);
  out.push("");
});
out.push("");

// 十三、奖学金与荣誉
out.push("# 十三、奖学金与荣誉");
out.push("");
const schContent = getSectionContent("scholarshipsAwards");
const schItems = splitItems(schContent, /id:\s*"([^"]+)"/);
schItems.forEach((item, i) => {
  const f = extractZhWithField(item.block);
  const title = f.title?.[0] || "未知";
  out.push(`## 奖学金 ${i + 1}: ${title}`);
  if (f.level?.[0]) out.push(`- 级别: ${f.level[0]}`);
  if (f.paragraphs) f.paragraphs.forEach(p => out.push(`- ${p}`));
  out.push("");
});
out.push("");

// 十四、背景与价值
out.push("# 十四、背景与价值");
out.push("");
const vbContent = getSectionContent("valueBridge");
const vbBlocks = vbContent.split(/\},\s*\{/);
vbBlocks.forEach((block, i) => {
  const f = extractZhWithField("{" + block + "}");
  const bg = f.background?.[0] || "";
  out.push(`## 价值 ${i + 1}: ${bg}`);
  if (f.value?.[0]) out.push(`- 价值: ${f.value[0]}`);
  out.push("");
});
out.push("");

// 十五、工作方式
out.push("# 十五、工作方式");
out.push("");
const wsContent = getSectionContent("workingStyle");
const wsBlocks = wsContent.split(/\},\s*\{/);
wsBlocks.forEach((block, i) => {
  const f = extractZhWithField("{" + block + "}");
  const principle = f.principle?.[0] || "";
  out.push(`## 原则 ${i + 1}: ${principle}`);
  if (f.description?.[0]) out.push(`- 说明: ${f.description[0]}`);
  out.push("");
});
out.push("");

// 十六、开放机会
out.push("# 十六、开放机会");
out.push("");
const openMatch = content.match(/openTo:\s*\{([\s\S]*?)\n\s+\},/);
if (openMatch) {
  const f = extractZhWithField(openMatch[1]);
  if (f.roles) f.roles.forEach(r => out.push(`- 角色: ${r}`));
  if (f.availability?.[0]) out.push(`- 可入职: ${f.availability[0]}`);
  if (f.visaNote?.[0]) out.push(`- 签证: ${f.visaNote[0]}`);
}
out.push("");

fs.writeFileSync(outputPath, out.join("\n"), "utf8");
console.log(`✓ 已同步 ${outputPath}（分层结构）`);
