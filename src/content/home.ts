import type { HomeContent, UiStrings, CvMap, Locale } from "./types";

export function t(text: { zh: string; en: string; fr: string }, locale: Locale): string {
  return text[locale] ?? text.zh;
}

const cv: CvMap = {
  zh: { label: "下载简历", href: "/files/%E8%A2%81%E9%BD%90%E6%83%A0%20%E7%AE%80%E5%8E%86.pdf", downloadName: "袁齐惠 简历.pdf" },
  en: { label: "Download CV", href: "/files/Qihui%20Yuan%20CV.pdf", downloadName: "Qihui Yuan CV.pdf" },
  fr: { label: "Télécharger CV", href: "/files/cv-fr.pdf", downloadName: "Qihui Yuan CV FR.pdf" },
};

const uiZh: UiStrings = {
  nav: { capabilities: "核心能力", experiences: "工作经历", education: "教育背景", scholarships: "奖学金与荣誉", projects: "项目案例", profile: "关于我", contact: "联系方式" },
  hero: {
    kicker:            "候选人资料",
    name:              "袁齐惠 · Qihui Yuan",
    role:              "国际战略与伙伴关系 · International Strategy & Partnerships",
    tagline:           "我是专注于新能源与气候科技企业全球市场进入的国际业务从业者，依托 UNDP、OECD 及欧洲咨询公司的实践，具备跨文化沟通、结构化执行与 ESG 合规落地能力，致力于推动科技企业在国际市场的可持续增长。",
    ctaPrimary:        "查看项目案例",
    ctaSecondary:      "查看工作经历",
    snapshotLanguages: "中 · 英 · 法",
    snapshotMarkets:   "市场：欧盟 · 亚太",
    snapshotFocus:     "新能源 · 气候科技",
    snapshotExp:       "6 段国际经历",
  },
  sections: {
    metrics:      { title: "关键数据",           description: "核心成就与经历概况" },
    valueBridge:  { title: "我的背景 → 企业价值", description: "依托国际组织与欧洲咨询的复合背景，形成可直接赋能企业出海的核心能力" },
    capabilities: { title: "核心能力",           description: "我能为团队带来的核心价值" },
    experiences:  { title: "工作经历",           description: "合规筑基，跨域协同，出海增效。" },
    projects:     { title: "项目案例",           description: "以问题为导向的可交付成果" },
    publications: { title: "发表与出版",         description: "学术论文、数据报告与会议展示" },
    media:        { title: "媒体报道",           description: "外部认可与曝光" },
    additional:   { title: "其他经历 & 校园活动", description: "更多背景与领导力经历" },
    tools:        { title: "工具与方法",         description: "常用技能与工作方法" },
    profile:      { title: "关于我",             description: "驱动力、方向与价值观" },
    workingStyle: { title: "我的工作方式",       description: "习惯、原则与协作风格" },
    openTo:       { title: "目前开放的机会",     description: "我正在寻找的角色与工作地点" },
    contact:      { title: "联系方式",           description: "欢迎交流合作机会" },
    education:    { title: "教育历程",           description: "学术训练与思维发展" },
    scholarshipsAwards: { title: "奖学金与荣誉", description: "国家级与校级认可" },
  },
  labels: {
    role: "职位", location: "地点", impact: "成果", skills: "技能演示",
    problem: "问题", approach: "方法", result: "结果",
    context: "背景", deliverables: "交付成果", artifacts: "相关资料",
    viewDetails: "查看详情", close: "关闭",
    downloadCv: "下载简历", viewMore: "展开更多", viewLess: "收起",
    degree: "学位", period: "学习时间", credentials: "学历证明",
    background: "我的背景", businessValue: "企业价值",
    situation: "背景情境", task: "任务目标", action: "行动方法", demonstrates: "能力体现",
    roleOverview: "职位概述", responsibilities: "职责范围", contributions: "主要贡献", achievements: "成果与影响",
  },
  cv: cv.zh,
};

const uiEn: UiStrings = {
  nav: { capabilities: "Capabilities", experiences: "Experience", education: "Education", scholarships: "Scholarships & Awards", projects: "Projects", profile: "About", contact: "Contact" },
  hero: {
    kicker:            "Talent Profile",
    name:              "Qihui Yuan",
    role:              "International Strategy & Partnerships",
    tagline:           "Cross-functional execution and global market insight — bringing structured delivery to international BD, market entry, and strategic advisory roles.",
    ctaPrimary:        "View Projects",
    ctaSecondary:      "View Experience",
    snapshotLanguages: "ZH · EN · FR",
    snapshotMarkets:   "EU · APAC Markets",
    snapshotFocus:     "CleanTech · Strategy · BD",
    snapshotExp:       "6 Intl. Engagements",
  },
  sections: {
    metrics:      { title: "Key Metrics",                description: "Core achievements at a glance" },
    valueBridge:  { title: "Background → Business Value", description: "A compound background in international organisations and European consulting — directly enabling global expansion" },
    capabilities: { title: "Core Capabilities",          description: "What I bring to the team" },
    experiences:  { title: "Experience",                 description: "Six high-signal professional engagements" },
    projects:     { title: "Projects",                   description: "Problem-driven, deliverable-led outcomes" },
    publications: { title: "Publications",               description: "Peer-reviewed papers, data reports, and conference presentations" },
    media:        { title: "Media",                      description: "External recognition and coverage" },
    additional:   { title: "Additional Experience",      description: "Further background and leadership" },
    tools:        { title: "Tools & Methods",            description: "Skills and working methods" },
    profile:      { title: "About",                      description: "Motivation, direction, and values" },
    workingStyle: { title: "How I Work",                 description: "Principles and working habits" },
    openTo:       { title: "Open To",                    description: "Roles and locations I'm actively considering" },
    contact:      { title: "Contact",                    description: "Open to opportunities and conversations" },
    education:    { title: "Education Journey",           description: "Academic training and intellectual development" },
    scholarshipsAwards: { title: "Scholarships & Awards", description: "National and university-level recognition" },
  },
  labels: {
    role: "ROLE", location: "LOCATION", impact: "IMPACT", skills: "SKILLS DEMONSTRATED",
    problem: "PROBLEM", approach: "APPROACH", result: "RESULT",
    context: "CONTEXT", deliverables: "DELIVERABLES", artifacts: "ARTIFACTS",
    viewDetails: "View Details", close: "Close",
    downloadCv: "Download CV", viewMore: "Show More", viewLess: "Show Less",
    degree: "DEGREE", period: "PERIOD", credentials: "CREDENTIALS",
    background: "BACKGROUND", businessValue: "BUSINESS VALUE",
    situation: "SITUATION", task: "TASK", action: "ACTION", demonstrates: "WHAT THIS DEMONSTRATES",
    roleOverview: "ROLE OVERVIEW", responsibilities: "RESPONSIBILITIES", contributions: "KEY CONTRIBUTIONS", achievements: "ACHIEVEMENTS & IMPACT",
  },
  cv: cv.en,
};

const uiFr: UiStrings = {
  nav: { capabilities: "Compétences", experiences: "Expérience", education: "Formation", scholarships: "Bourses & Distinctions", projects: "Projets", profile: "À propos", contact: "Contact" },
  hero: {
    kicker:            "Profil Candidat",
    name:              "Qihui Yuan",
    role:              "Stratégie internationale & Partenariats",
    tagline:           "Exécution transversale et vision internationale — au service du développement commercial, de l'entrée sur les marchés et du conseil stratégique.",
    ctaPrimary:        "Voir les projets",
    ctaSecondary:      "Voir l'expérience",
    snapshotLanguages: "ZH · EN · FR",
    snapshotMarkets:   "Marchés UE · APAC",
    snapshotFocus:     "Énergie propre · Stratégie · BD",
    snapshotExp:       "6 Engagements Int.",
  },
  sections: {
    metrics:      { title: "Indicateurs Clés",                        description: "Réalisations principales en bref" },
    valueBridge:  { title: "Parcours → Valeur Commerciale",             description: "Un profil hybride — organisations internationales et conseil européen — au service de l'expansion mondiale" },
    capabilities: { title: "Compétences Clés",                        description: "Ce que j'apporte à l'équipe" },
    experiences:  { title: "Expérience",                              description: "Six postes professionnels à fort signal" },
    projects:     { title: "Projets",                                 description: "Résultats orientés livrables" },
    publications: { title: "Publications",                            description: "Articles, données de recherche et présentations en conférence" },
    media:        { title: "Médias",                                  description: "Reconnaissance externe et couverture" },
    additional:   { title: "Expériences Supplémentaires",             description: "Parcours et leadership" },
    tools:        { title: "Outils & Méthodes",                       description: "Compétences et méthodes de travail" },
    profile:      { title: "À propos",                                description: "Motivation, direction et valeurs" },
    workingStyle: { title: "Ma façon de travailler",                  description: "Principes et habitudes de travail" },
    openTo:       { title: "Ouvert à",                                description: "Rôles et lieux que j'envisage activement" },
    contact:      { title: "Contact",                                 description: "Ouvert aux opportunités et aux échanges" },
    education:    { title: "Parcours Académique",                     description: "Formation académique et développement intellectuel" },
    scholarshipsAwards: { title: "Bourses & Distinctions", description: "Reconnaissance nationale et universitaire" },
  },
  labels: {
    role: "POSTE", location: "LIEU", impact: "IMPACT", skills: "COMPÉTENCES",
    problem: "PROBLÈME", approach: "APPROCHE", result: "RÉSULTAT",
    context: "CONTEXTE", deliverables: "LIVRABLES", artifacts: "RESSOURCES",
    viewDetails: "Voir les détails", close: "Fermer",
    downloadCv: "Télécharger CV", viewMore: "Voir plus", viewLess: "Voir moins",
    degree: "DIPLÔME", period: "PÉRIODE", credentials: "JUSTIFICATIFS",
    background: "CONTEXTE", businessValue: "VALEUR COMMERCIALE",
    situation: "SITUATION", task: "MISSION", action: "ACTION", demonstrates: "COMPÉTENCES DÉMONTRÉES",
    roleOverview: "APERÇU DU POSTE", responsibilities: "RESPONSABILITÉS", contributions: "CONTRIBUTIONS CLÉS", achievements: "RÉALISATIONS & IMPACT",
  },
  cv: cv.fr,
};

const uiMap: Record<Locale, UiStrings> = { zh: uiZh, en: uiEn, fr: uiFr };

export function getHomeContent(locale: Locale): HomeContent {
  return {
    ui: uiMap[locale],

    hero: {
      name:    { zh: "袁齐惠", en: "Qihui Yuan", fr: "Qihui Yuan" },
      role:    { zh: "国际战略与伙伴关系 · International Strategy & Partnerships", en: "International Strategy & Partnerships", fr: "Stratégie internationale & Partenariats" },
      subtitle: {
        zh: "能源与气候战略分析",
        en: "Energy & Climate Strategy Analysis",
        fr: "Analyse stratégique énergie et climat",
      },
      description: {
        zh: "专注能源转型与气候政策研究，结合政策分析、市场研究与数据洞察，为企业与金融机构提供全球能源与可持续发展战略支持。",
        en: "Specializing in energy transition and climate policy research, combining policy analysis, market research and data insights to provide global energy and sustainability strategy support for enterprises and financial institutions.",
        fr: "Spécialisée dans la recherche sur la transition énergétique et les politiques climatiques, combinant analyse politique, études de marché et données pour accompagner entreprises et institutions financières dans leurs stratégies énergie et durabilité.",
      },
      tagline: { zh: "", en: "", fr: "" },
      portrait: { src: "/images/portrait-transparent.png", alt: { zh: "袁齐惠个人照片", en: "Qihui Yuan portrait", fr: "Photo de Qihui Yuan" } },
      snapshot: {
        languages: { zh: "中 · 英 · 法",      en: "ZH · EN · FR",      fr: "ZH · EN · FR" },
        markets:   { zh: "市场：欧盟 · 亚太",  en: "EU · APAC Markets", fr: "Marchés UE · APAC" },
        focus:     { zh: "新能源 · 气候科技",  en: "CleanTech · Strategy · BD", fr: "Énergie propre · Stratégie" },
        exp:       { zh: "6 段国际经历",       en: "6 Intl. Engagements", fr: "6 Engagements Int." },
      },
      specialtyChips: [
        { zh: "能源转型",     en: "Energy Transition",    fr: "Transition énergétique" },
        { zh: "气候政策",     en: "Climate Policy",       fr: "Politique climatique" },
        { zh: "市场战略",     en: "Market Strategy",      fr: "Stratégie marché" },
      ],
    },

    metrics: [
      { value: "6",    label: { zh: "国际机构与企业项目经验", en: "Intl Orgs & Projects", fr: "Org. Int. & Projets" }, context: { zh: "UN · OECD · UNDP 等", en: "UN · OECD · UNDP", fr: "ONU · OCDE · PNUD" }, iconKey: "globe" },
      { value: "3",    label: { zh: "工作语言", en: "Working Languages", fr: "Langues de Travail" }, context: { zh: "中文 · 英文 · 法语", en: "ZH · EN · FR", fr: "ZH · EN · FR" }, iconKey: "spark" },
      { value: "160+", label: { zh: "气候与能源政策分析", en: "Policy Analyses", fr: "Analyses Politiques" }, context: { zh: "NDC · ETS · CBAM", en: "NDC · ETS · CBAM", fr: "CDN · ETS · MCAF" }, iconKey: "leaf" },
      { value: "4",    label: { zh: "代表项目", en: "Featured Projects", fr: "Projets Clés" }, context: { zh: "ESG · 市场进入 · 能源政策", en: "ESG · GTM · Energy Policy", fr: "ESG · GTM · Énergie" }, iconKey: "briefcase" },
    ],
    capabilities: [
      { iconKey: "learning",      label: { zh: "快速学习与适应",         en: "Rapid Learning & Adaptability",               fr: "Apprentissage Rapide & Adaptabilité" },          description: { zh: "在陌生领域快速上手，将新知识转化为可衡量成果。", en: "Quick to master new domains and translate learning into tangible outputs.", fr: "Maîtrise rapide de nouveaux domaines." } },
      { iconKey: "execution",     label: { zh: "强执行力与结果导向",       en: "Strong Execution & Results Orientation",       fr: "Forte Exécution & Orientation Résultats" },     description: { zh: "注重落地，在有限资源下高效推进，交付可衡量成果。", en: "Focused on delivery with limited resources, producing measurable outcomes.", fr: "Orienté livraison avec ressources limitées." } },
      { iconKey: "logic",         label: { zh: "逻辑思维与结构化问题解决", en: "Logical Thinking & Structured Problem Solving",  fr: "Pensée Logique & Résolution Structurée" },      description: { zh: "将复杂问题分解为清晰可执行框架，支持决策制定。", en: "Breaks complex problems into clear, actionable frameworks.", fr: "Décompose les problèmes complexes en cadres actionnables." } },
      { iconKey: "collaboration", label: { zh: "跨团队协作与沟通",         en: "Cross-Team Collaboration & Communication",     fr: "Collaboration & Communication Transversales" }, description: { zh: "在多文化环境中协调多方利益相关者，推动项目落地。", en: "Coordinates diverse stakeholders across multicultural settings.", fr: "Coordination de parties prenantes diverses." } },
      { iconKey: "leadership",    label: { zh: "领导潜力与成长型思维",     en: "Leadership Potential & Growth Mindset",         fr: "Potentiel de Leadership & Esprit de Croissance" }, description: { zh: "主动承担责任，持续寻求反馈，驱动团队与个人成长。", en: "Proactively takes ownership and drives collective growth.", fr: "Prend des responsabilités et favorise la croissance collective." } },
    ],

    experiences: [
      {
        category: "key", slug: "undp-bangkok",
        org:      { zh: "联合国开发计划署 曼谷区域中心", en: "United Nations Development Programme — Bangkok Regional Hub", fr: "PNUD — Hub Régional Bangkok" },
        logo:     "/images/logos/undp.png",
        role:     { zh: "环境与能源团队 项目协调专员",  en: "Fellow, Environment & Energy Team", fr: "Fellow, Équipe Environnement & Énergie" },
        period:   { start: "2025-09", end: null },
        location: { zh: "泰国 曼谷", en: "Bangkok, Thailand", fr: "Bangkok, Thaïlande" },
        bullets: [
          { zh: "负责亚太区气候与能源项目组合数据整合与进度跟踪，覆盖 12 个国家、15+ 项跨国项目", en: "Managing Asia-Pacific climate & energy portfolio data integration and progress tracking across 12 countries and 15+ projects", fr: "Gestion de l'intégration des données et du suivi de 15+ projets climatiques dans 12 pays" },
          { zh: "协调国家办公室、政府机构与国际组织，推动跨国项目沟通与执行", en: "Coordinating country offices, government agencies, and international organisations to advance cross-country project execution", fr: "Coordination des bureaux pays, agences gouvernementales et organisations internationales" },
          { zh: "支持 GEF、GCF 等气候基金资源动员分析与亚太区季度汇报", en: "Supporting GEF/GCF resource mobilisation analysis and quarterly Asia-Pacific donor reporting", fr: "Soutien à l'analyse de mobilisation des ressources GEF/GCF et aux rapports trimestriels" },
        ],
        tags: [
          { zh: "气候融资",     en: "Climate Finance",        fr: "Finance Climatique" },
          { zh: "项目组合管理", en: "Portfolio Management",   fr: "Gestion Portefeuille" },
          { zh: "跨国项目协调", en: "Cross-Country Coordination", fr: "Coordination Multi-pays" },
        ],
        metrics: [
          { label: { zh: "覆盖国家",   en: "Countries",  fr: "Pays" },     value: "12" },
          { label: { zh: "项目数量",   en: "Projects",   fr: "Projets" },  value: "15+" },
          { label: { zh: "项目管道规模", en: "Pipeline", fr: "Pipeline" }, value: "$50M+" },
        ],
        context: {
          zh: "派驻 UNDP 亚太区域中心环境与能源团队，参与跨国气候与能源项目组合管理与资源动员分析。通过数据整合、国际机构协调与多国项目推进，支持 GEF、GCF 等国际气候基金项目在亚太地区的落地与管线管理。",
          en: "Embedded in UNDP Bangkok Regional Hub's Environment & Energy team, contributing to cross-country climate and energy portfolio management and resource mobilisation analysis. Supporting GEF/GCF climate fund project implementation and pipeline management across Asia-Pacific through data integration and international coordination.",
          fr: "Intégré à l'équipe Environnement & Énergie du Hub PNUD Bangkok, contribuant à la gestion du portefeuille climatique régional et à l'analyse de mobilisation des ressources GEF/GCF.",
        },
        problem: {
          zh: "负责亚太区气候与能源项目组合的数据整合与进度跟踪，覆盖 12 个国家、15+ 项跨国项目；支持区域团队进行气候基金项目资源动员分析，跟踪 GEF、GCF 等国际资金渠道与项目进展；协调国家办公室、政府机构与国际组织合作伙伴，推动跨国项目沟通与执行；参与区域政策协作与国际合作议题研究，包括能源转型、自然保护与循环经济。",
          en: "Responsible for Asia-Pacific climate and energy portfolio data integration and progress tracking across 12 countries and 15+ cross-country projects; supporting resource mobilisation analysis for GEF/GCF climate funds; coordinating country offices, government agencies, and international organisation partners; contributing to regional policy research covering energy transition, conservation, and circular economy.",
          fr: "Responsable de l'intégration des données et du suivi de 15+ projets dans 12 pays ; soutien à l'analyse de mobilisation des ressources GEF/GCF ; coordination des bureaux pays et agences gouvernementales ; recherche sur la transition énergétique et l'économie circulaire.",
        },
        approach: {
          zh: "建立区域项目管线跟踪框架，整合多国项目数据并优化内部决策报告结构；协调 UNEP、FAO 等国际机构参与区域项目讨论，组织并支持 15+ 场跨国项目会议；参与 Pacific GX 与循环经济重点项目推进，跟踪关键节点并推动跨机构协作。",
          en: "Built a regional project pipeline tracking framework, integrating multi-country data and optimising internal reporting structures; coordinated UNEP, FAO, and other international agencies in regional project discussions, organising and supporting 15+ cross-country project meetings; contributed to Pacific GX and circular economy flagship projects, tracking milestones and driving inter-agency collaboration.",
          fr: "Construction d'un cadre de suivi du pipeline régional ; coordination du PNUE, de la FAO et d'autres agences dans 15+ réunions inter-pays ; contribution aux projets Pacific GX et économie circulaire.",
        },
        impact: {
          zh: "提升团队对区域项目管线与资金进展的可视化管理能力；支持亚太区 $50M+ 项目组合的资源动员分析与季度汇报；优化项目数据管理流程，提高跨国项目进度信息更新效率。",
          en: "Improved team visibility into regional pipeline and funding progress; supported resource mobilisation analysis and quarterly reporting for a $50M+ Asia-Pacific portfolio; streamlined project data management workflows to improve cross-country progress update efficiency.",
          fr: "Amélioration de la visibilité sur le pipeline régional ; soutien à un portefeuille $50M+ ; optimisation des flux de gestion des données de projets transnationaux.",
        },
        deliverables: [
          { zh: "区域气候融资项目管线数据库",     en: "Regional Climate Finance Project Pipeline Database",         fr: "Base de données pipeline financements climatiques régionaux" },
          { zh: "资源动员分析报告与决策简报",     en: "Resource Mobilisation Analysis Reports & Decision Briefs",   fr: "Rapports d'analyse de mobilisation des ressources" },
          { zh: "亚太区环境与能源项目组合管理报告", en: "Asia-Pacific Environment & Energy Portfolio Management Report", fr: "Rapport de gestion du portefeuille régional" },
        ],
        skills: [
          { zh: "跨国项目管理",   en: "Cross-Country Project Management", fr: "Gestion de projets transnationaux" },
          { zh: "国际机构合作",   en: "International Institutional Collaboration", fr: "Collaboration institutionnelle internationale" },
          { zh: "项目管线管理",   en: "Project Pipeline Management",      fr: "Gestion du pipeline de projets" },
          { zh: "数据分析与可视化", en: "Data Analysis & Visualisation",   fr: "Analyse de données & visualisation" },
          { zh: "跨文化沟通",     en: "Cross-Cultural Communication",     fr: "Communication interculturelle" },
        ],
        artifacts: [
          { label: { zh: "UNDP 官网", en: "UNDP Website", fr: "Site PNUD" }, href: "https://www.undp.org" },
        ],
        gallery: ["/images/exp-undp-3.png", "/images/exp-undp-1.png", "/images/exp-undp-2.png"],
      },
      {
        category: "key", slug: "oecd-ifcma",
        logo: "/images/logos/oecd.png",
        org:  {
          zh: "经济合作与发展组织（OECD）— 碳减缓路径包容性论坛（IFCMA）",
          en: "Organisation for Economic Co-operation and Development — Inclusive Forum on Carbon Mitigation Approaches (IFCMA)",
          fr: "Organisation de Coopération et de Développement Économiques — Forum Inclusif sur les Approches d'Atténuation du Carbone (IFCMA)",
        },
        role: { zh: "初级顾问", en: "Junior Consultant", fr: "Consultant Junior" },
        period: { start: "2025-03", end: "2025-09" },
        location: { zh: "法国 巴黎", en: "Paris, France", fr: "Paris, France" },
        bullets: [
          { zh: "研究并整理 50+ 国家气候政策与碳定价机制，构建标准化 IFCMA 政策数据库", en: "Researched and structured 50+ countries' climate policies and carbon pricing mechanisms for the IFCMA database", fr: "Recherche et structuration des politiques climatiques de 50+ pays pour la base de données IFCMA" },
          { zh: "设计政策数据采集与编码模板，提升跨国政策比较分析效率", en: "Designed policy data collection and coding templates to improve cross-country comparative analysis", fr: "Conception de modèles de collecte et de codage pour l'analyse comparative inter-pays" },
          { zh: "向 OECD 专家团队多轮汇报，解析中国双碳政策与欧洲碳市场体系", en: "Delivered multiple policy briefings to OECD experts on China's dual-carbon policies and European carbon market frameworks", fr: "Présentations aux experts OCDE sur les politiques de double carbone chinoises et le marché carbone européen" },
        ],
        tags: [
          { zh: "气候政策", en: "Climate Policy",   fr: "Politique Climatique" },
          { zh: "碳市场",   en: "Carbon Markets",   fr: "Marchés Carbone" },
          { zh: "政策数据库", en: "Policy Database", fr: "Base de données politique" },
        ],
        metrics: [
          { label: { zh: "覆盖国家",  en: "Countries",     fr: "Pays" },    value: "50+" },
          { label: { zh: "政策条目",  en: "Policy Entries", fr: "Entrées" }, value: "200+" },
          { label: { zh: "数据库字段", en: "DB Fields",     fr: "Champs BD" }, value: "30+" },
        ],
        context: {
          zh: "参与 OECD IFCMA 国际气候政策数据库建设，支持跨国气候政策与碳定价机制的比较研究，为 OECD 成员国气候政策评估与国际合作提供数据基础。",
          en: "Contributed to the OECD IFCMA international climate policy database, supporting cross-country comparative research on climate policies and carbon pricing mechanisms to underpin OECD member country policy assessments and international cooperation.",
          fr: "Contribution à la base de données internationale OCDE IFCMA, soutenant la recherche comparative inter-pays sur les politiques climatiques et les mécanismes de tarification du carbone.",
        },
        problem: {
          zh: "研究并整理 50+ 国家气候政策与碳定价机制，构建标准化政策数据库；设计政策数据采集与编码模板，提升跨国政策比较分析效率；分析欧盟与中国气候政策体系，为跨境投资与政策合作提供研究支持。",
          en: "Researched and structured 50+ countries' climate policies and carbon pricing mechanisms for a standardised database; designed data collection and coding templates to improve cross-country analysis; analysed EU and China climate policy frameworks to support cross-border investment and policy cooperation research.",
          fr: "Recherche et structuration des politiques de 50+ pays ; conception de modèles de collecte et de codage ; analyse des cadres politiques UE et Chine pour soutenir la coopération transfrontalière.",
        },
        approach: {
          zh: "系统研究全球气候政策文件并构建统一分类体系，录入并校验 200+ 政策条目；参与构建 IFCMA 气候政策数据库核心结构，提升数据标准化与政策可比性；向 OECD 专家团队进行多轮政策汇报，解析中国双碳政策与欧洲碳政策体系。",
          en: "Systematically researched global climate policy documents and built a unified classification framework, entering and validating 200+ policy entries; contributed to the core architecture of the IFCMA database to improve standardisation and comparability; delivered multiple rounds of policy briefings to OECD expert teams on China's dual-carbon and European carbon policy systems.",
          fr: "Recherche systématique et construction d'un cadre de classification, saisie et validation de 200+ entrées ; contribution à l'architecture de la base IFCMA ; multiples présentations aux experts OCDE.",
        },
        impact: {
          zh: "交付覆盖 50+ 国家气候政策的结构化数据库；提升 OECD 气候政策比较研究的数据一致性与分析效率；为国际气候政策研究与跨国合作提供数据支持。",
          en: "Delivered a structured climate policy database covering 50+ countries; improved data consistency and analytical efficiency for OECD comparative climate research; provided data infrastructure for international climate policy research and cross-country cooperation.",
          fr: "Livraison d'une base structurée couvrant 50+ pays ; amélioration de la cohérence et de l'efficacité analytique ; infrastructure de données pour la recherche climatique internationale.",
        },
        deliverables: [
          { zh: "IFCMA 气候政策数据库（50+ 国家）",  en: "IFCMA Climate Policy Database (50+ countries)",       fr: "Base de données IFCMA (50+ pays)" },
          { zh: "政策数据采集模板与编码手册",          en: "Policy Data Collection Templates & Coding Manual",    fr: "Modèles de collecte et manuel de codage" },
          { zh: "国家气候政策比较分析报告",            en: "Country Climate Policy Comparative Analysis Report",  fr: "Rapport d'analyse comparative des politiques climatiques" },
        ],
        skills: [
          { zh: "气候政策研究",  en: "Climate Policy Research",    fr: "Recherche en politique climatique" },
          { zh: "国际政策比较",  en: "International Policy Comparison", fr: "Comparaison politique internationale" },
          { zh: "数据库设计",    en: "Database Design",            fr: "Conception de base de données" },
          { zh: "碳市场分析",    en: "Carbon Market Analysis",     fr: "Analyse des marchés carbone" },
          { zh: "数据结构化",    en: "Data Structuring",           fr: "Structuration des données" },
        ],
        artifacts: [
          { label: { zh: "OECD IFCMA 官网", en: "OECD IFCMA Official Page", fr: "Page officielle OCDE IFCMA" }, href: "https://www.oecd.org/en/about/programmes/inclusive-forum-on-carbon-mitigation-approaches.html" },
          { label: { zh: "参考资料（联系 IFCMA 项目负责人）", en: "Reference available from OECD IFCMA Project Lead", fr: "Référence disponible auprès du responsable de projet IFCMA" }, href: "#" },
        ],
        gallery: ["/images/exp-oecd-1.png", "/images/exp-oecd-3.png", "/images/exp-oecd-2.png"],
      },
      {
        category: "key", slug: "erm-paris",
        logo: "/images/logos/erm.png",
        org:  { zh: "ERM 环境资源管理咨询（ERM）", en: "Environmental Resources Management (ERM)", fr: "Environmental Resources Management (ERM)" },
        role: { zh: "可持续发展与市场进入咨询实习生", en: "Sustainability & Market Entry Consulting Intern", fr: "Stagiaire Conseil Développement Durable & Entrée sur les Marchés" },
        period: { start: "2024-03", end: "2024-10" },
        location: { zh: "法国 巴黎", en: "Paris, France", fr: "Paris, France" },
        bullets: [
          { zh: "参与 5 个中国新能源企业欧洲出海咨询项目（光伏、储能、电池领域），开展 CBAM、CSRD、EU Battery Regulation 等监管框架研究", en: "Contributed to 5 consulting projects for Chinese clean energy companies (solar PV, storage, batteries) entering Europe, covering CBAM, CSRD, and EU Battery Regulation", fr: "Contribution à 5 projets de conseil pour des entreprises chinoises d'énergie propre entrant en Europe (CBAM, CSRD, Règlement Batteries)" },
          { zh: "支持构建 ESG 合规差距分析矩阵与 RAG 风险评估框架，识别供应链、碳排放与信息披露风险", en: "Supported building ESG compliance gap analysis matrices and RAG risk frameworks, identifying supply chain, carbon, and disclosure risks", fr: "Construction de matrices d'analyse des écarts ESG et cadres RAG ; identification des risques supply chain et carbone" },
          { zh: "为 2 家中国客户交付欧盟合规准备报告，协助制定欧洲市场进入路线图", en: "Delivered EU compliance readiness reports for 2 Chinese clients and supported European market entry roadmap development", fr: "Livraison de rapports de préparation conformité UE pour 2 clients et développement de feuilles de route d'entrée sur le marché" },
        ],
        tags: [
          { zh: "欧盟监管", en: "EU Regulation",  fr: "Réglementation UE" },
          { zh: "ESG合规",  en: "ESG Compliance", fr: "Conformité ESG" },
          { zh: "市场进入", en: "Market Entry",   fr: "Entrée Marché" },
        ],
        metrics: [
          { label: { zh: "服务客户",  en: "Clients",          fr: "Clients" },        value: "5" },
          { label: { zh: "监管框架",  en: "Reg. Frameworks",  fr: "Cadres Régl." },   value: "6+" },
          { label: { zh: "交付报告",  en: "Reports Delivered", fr: "Rapports" },       value: "4" },
        ],
        context: {
          zh: "加入 ERM 巴黎可持续发展咨询团队，参与中国新能源企业欧洲出海合规咨询项目（光伏、储能、电池领域），支持欧盟监管解读、供应链风险评估与欧洲市场进入准备，为企业欧洲扩张提供合规与战略支持。",
          en: "Joined ERM Paris's sustainability advisory team, contributing to EU market entry compliance consulting projects for Chinese clean energy companies (solar PV, storage, and battery sectors), supporting EU regulatory interpretation, supply chain risk assessment, and European market entry preparation.",
          fr: "Intégré à l'équipe ERM Paris, contribuant à des projets de conseil en conformité pour des entreprises chinoises d'énergie propre souhaitant entrer sur le marché européen.",
        },
        problem: {
          zh: "参与中国新能源企业欧盟市场进入咨询，开展 CBAM、CSRD、EU Battery Regulation 等监管框架研究；支持构建企业 ESG 合规差距分析矩阵，识别供应链、碳排放与信息披露风险；参与欧洲新能源市场研究，分析德 / 法 / 西政策环境与产业竞争格局。",
          en: "Contributed to EU market entry consulting for Chinese clean energy companies, researching CBAM, CSRD, and EU Battery Regulation; supported ESG compliance gap analysis matrix construction, identifying supply chain, carbon, and disclosure risks; conducted European clean energy market research analysing the policy environment and competitive landscape in Germany, France, and Spain.",
          fr: "Conseil en entrée sur le marché UE pour des entreprises chinoises ; étude CBAM, CSRD, Règlement Batteries ; matrices d'analyse des écarts ESG ; étude de marché énergétique européen (Allemagne, France, Espagne).",
        },
        approach: {
          zh: "参与 5 个中国新能源企业欧洲出海咨询项目，构建 EU 监管适用矩阵与 RAG 风险评估框架；支持电池与储能企业建立碳足迹与供应链追溯数据框架；完成欧洲新能源市场准入研究，为客户制定欧盟合规准备路线图与扩张参考策略。",
          en: "Contributed to 5 consulting projects for Chinese clean energy companies entering Europe, building EU regulatory applicability matrices and RAG risk assessment frameworks; supported battery and storage companies in establishing carbon footprint and supply chain traceability data frameworks; completed European clean energy market entry research to develop EU compliance roadmaps and expansion strategies.",
          fr: "Contribution à 5 projets avec matrices réglementaires UE et cadres RAG ; soutien aux entreprises batteries pour les cadres carbone et traçabilité ; étude d'entrée sur le marché européen des énergies propres.",
        },
        impact: {
          zh: "为 2 家中国企业交付欧盟合规准备报告与市场进入分析，识别关键监管与供应链风险，支持客户提升欧洲市场合规准备度并优化海外扩张规划。",
          en: "Delivered EU compliance readiness reports and market entry analyses for 2 Chinese companies, identifying key regulatory and supply chain risks, supporting clients in improving their European compliance readiness and refining overseas expansion plans.",
          fr: "Livraison de rapports de préparation conformité UE et analyses d'entrée sur le marché pour 2 entreprises chinoises ; identification des risques réglementaires et supply chain clés.",
        },
        deliverables: [
          { zh: "EU 合规路线图报告（2份）",              en: "EU Compliance Roadmap Reports (x2)",            fr: "Feuilles de route conformité UE (x2)" },
          { zh: "CBAM / CSRD 合规差距分析",              en: "CBAM / CSRD Compliance Gap Analysis",           fr: "Analyse des écarts CBAM / CSRD" },
          { zh: "EU Battery Regulation 监管适用矩阵",    en: "EU Battery Regulation Applicability Matrix",    fr: "Matrice d'applicabilité Règlement Batteries UE" },
          { zh: "欧洲新能源市场研究简报",                en: "European Clean Energy Market Entry Research Brief", fr: "Note de recherche sur le marché européen des énergies propres" },
        ],
        skills: [
          { zh: "EU监管分析",      en: "EU Regulatory Analysis",         fr: "Analyse réglementaire UE" },
          { zh: "ESG合规评估",     en: "ESG Compliance Assessment",      fr: "Évaluation conformité ESG" },
          { zh: "国际市场进入研究", en: "International Market Entry Research", fr: "Recherche entrée sur les marchés" },
          { zh: "供应链风险分析",   en: "Supply Chain Risk Analysis",     fr: "Analyse risques supply chain" },
          { zh: "跨境商业咨询",     en: "Cross-Border Business Advisory", fr: "Conseil commercial transfrontalier" },
        ],
        artifacts: [
          { label: { zh: "ERM 官网", en: "ERM Website", fr: "Site ERM" }, href: "https://www.erm.com" },
        ],
        gallery: ["/images/exp-erm-1.png"],
      },
      {
        category: "key", slug: "cas-carbon",
        logo: "/images/logos/cas.png",
        org:  {
          zh: "中国科学院科技战略咨询研究院（CASISD）碳中和战略中心",
          en: "Chinese Academy of Sciences Institute of Science and Development (CASISD) — Carbon Neutrality Strategy Centre",
          fr: "Institut des Sciences et du Développement, Académie des Sciences de Chine (CASISD) — Centre Stratégie Neutralité Carbone",
        },
        role: { zh: "研究助理", en: "Research Assistant", fr: "Assistant de Recherche" },
        period: { start: "2024-02", end: "2024-08" },
        location: { zh: "线上（远程）", en: "Remote", fr: "À distance" },
        bullets: [
          { zh: "分析 168 国 NDC 文件，梳理各国光伏装机目标，对比当前实际装机水平，对标 2030 全球可再生能源三倍增长目标", en: "Analysed 168 countries' NDCs to map solar PV installation targets against current capacity, benchmarking against the global 2030 tripling renewable energy goal", fr: "Analyse des CDN de 168 pays pour cartographier les objectifs solaires PV par rapport aux capacités actuelles, en référence à l'objectif mondial de triplement 2030" },
          { zh: "搭建 10 大类 23 个子类的可再生能源政策评估框架，标准化各国政策分类，支撑跨国政策对比", en: "Built a renewable energy policy assessment framework with 10 categories and 23 sub-categories to standardise cross-country policy classification and comparison", fr: "Construction d'un cadre d'évaluation à 10 catégories et 23 sous-catégories pour standardiser la classification et la comparaison inter-pays" },
          { zh: "对比非洲、东南亚、拉美区域光伏政策，识别出海市场机会与政策落地痛点", en: "Compared solar PV policies across Africa, Southeast Asia, and Latin America, identifying overseas market opportunities and policy implementation pain points", fr: "Comparaison des politiques solaires en Afrique, Asie du Sud-Est et Amérique latine pour identifier les opportunités et les points de friction" },
        ],
        tags: [
          { zh: "可再生能源",   en: "Renewable Energy",         fr: "Énergies Renouvelables" },
          { zh: "NDC 分析",    en: "NDC Analysis",              fr: "Analyse CDN" },
          { zh: "跨国政策评估", en: "Cross-Country Policy Assessment", fr: "Évaluation politique inter-pays" },
        ],
        metrics: [
          { label: { zh: "覆盖国家",    en: "Countries",         fr: "Pays" },          value: "168" },
          { label: { zh: "政策框架类别", en: "Policy Categories", fr: "Catégories" },    value: "10" },
          { label: { zh: "政策子类别",  en: "Sub-categories",    fr: "Sous-catégories" }, value: "23" },
        ],
        context: {
          zh: "聚焦全球可再生能源（光伏）领域，开展 168 国 NDC 目标分析与政策评估，为新能源出海提供数据支撑与策略参考。",
          en: "Focused on the global renewable energy (solar PV) sector, conducting NDC target analysis and policy assessment across 168 countries to provide data support and strategic reference for Chinese clean energy companies' overseas expansion.",
          fr: "Axé sur le secteur mondial des énergies renouvelables (solaire PV), réalisant des analyses des CDN et des évaluations de politiques dans 168 pays pour soutenir l'expansion internationale des entreprises chinoises d'énergie propre.",
        },
        problem: {
          zh: "分析 168 国 NDC 文件，重点梳理各国光伏装机目标，对比当前实际装机水平，对标 2030 全球可再生能源三倍增长目标；搭建 10 大类 23 个子类的可再生能源政策评估框架，标准化各国政策分类，支撑跨国政策对比；整合 IRENA、世界银行等国际数据库光伏数据，通过 R、Excel 完成数据可视化与趋势分析；对比非洲、东南亚、拉美区域光伏政策，识别出海市场机会与政策落地痛点。",
          en: "Analysed NDC documents from 168 countries focusing on solar PV targets vs. current capacity, benchmarked against the 2030 global tripling goal; built a 10-category / 23-sub-category policy assessment framework; integrated IRENA and World Bank PV data using R and Excel for visualisation and trend analysis; compared solar PV policies across Africa, Southeast Asia, and Latin America to identify market opportunities.",
          fr: "Analyse des CDN de 168 pays sur les objectifs solaires PV vs capacité actuelle ; cadre d'évaluation à 10/23 catégories ; intégration IRENA/Banque Mondiale via R et Excel ; comparaison régionale Afrique, Asie du Sud-Est, Amérique latine.",
        },
        approach: {
          zh: "完成 168 国 NDC 光伏目标量化分析，梳理跨国政策差异，为新能源出海区域布局提供数据依据；搭建标准化政策评估框架，解决各国政策格式不一的问题，提升跨国政策对比效率；提炼区域光伏政策痛点与优化方向，为出海新能源企业提供政策适配参考。",
          en: "Completed quantitative analysis of solar PV NDC targets across 168 countries, mapping cross-country policy divergences to guide overseas market prioritisation; built a standardised policy assessment framework to resolve inconsistent policy formats and improve comparative efficiency; extracted regional solar PV policy pain points to provide policy adaptation guidance for overseas clean energy companies.",
          fr: "Analyse quantitative des objectifs NDC solaires PV de 168 pays ; cadre standardisé pour résoudre les incohérences de format ; extraction des points de friction régionaux pour guider l'adaptation des politiques.",
        },
        impact: {
          zh: "形成跨国光伏政策与装机目标分析报告，支撑新能源出海市场研判与策略制定；提供标准化数据与政策框架，助力企业快速适配不同区域可再生能源政策，降低出海风险；识别高潜力出海区域，为跨境光伏项目布局提供决策支撑。",
          en: "Produced a cross-country solar PV policy and installation target analysis report supporting overseas market assessment and strategy; provided standardised data and policy frameworks enabling companies to rapidly adapt to regional renewable energy policies and reduce overseas risk; identified high-potential overseas markets to support cross-border solar project planning.",
          fr: "Rapport d'analyse des politiques solaires PV inter-pays soutenant l'évaluation des marchés et la stratégie ; cadres standardisés réduisant les risques d'expansion internationale ; identification des marchés à fort potentiel.",
        },
        deliverables: [
          { zh: "168 国 NDC 光伏目标分析报告",             en: "168-Country NDC Solar PV Target Analysis Report",                    fr: "Rapport d'analyse des objectifs PV de 168 pays" },
          { zh: "可再生能源政策评估框架（10 类 23 子类）", en: "Renewable Energy Policy Assessment Framework (10 categories, 23 sub-categories)", fr: "Cadre d'évaluation (10 catégories, 23 sous-catégories)" },
          { zh: "跨国光伏数据可视化报告",                  en: "Cross-Country Solar PV Data Visualisation Report",                    fr: "Rapport de visualisation données solaires PV inter-pays" },
          { zh: "区域光伏政策对比与出海建议手册",           en: "Regional Solar PV Policy Comparison & Overseas Expansion Reference",  fr: "Comparaison régionale & guide d'expansion internationale" },
        ],
        skills: [
          { zh: "NDC 分析",       en: "NDC Analysis",                        fr: "Analyse CDN" },
          { zh: "可再生能源政策评估", en: "Renewable Energy Policy Assessment", fr: "Évaluation politique énergies renouvelables" },
          { zh: "跨国数据整合",   en: "Cross-Country Data Integration",      fr: "Intégration de données inter-pays" },
          { zh: "数据可视化",     en: "Data Visualisation (R / Excel)",       fr: "Visualisation de données (R / Excel)" },
          { zh: "出海市场研判",   en: "Overseas Market Intelligence",        fr: "Veille marché international" },
        ],
        artifacts: [
          { label: { zh: "CASISD 官网", en: "CASISD Official Website", fr: "Site officiel CASISD" }, href: "http://www.casisd.cn" },
        ],
        gallery: ["/images/exp-cas-1.png", "/images/exp-cas-2.png", "/images/exp-cas-3.png"],
      },
      {
        category: "key", slug: "startup-founder",
        logo: "/images/logos/longing.png",
        org:  {
          zh: "天津朗意斯峻留学服务咨询有限公司",
          en: "Longing Study Abroad Consulting Co., Ltd. (Tianjin)",
          fr: "Longing Study Abroad Consulting Co., Ltd. (Tianjin)",
        },
        role: {
          zh: "联合创始人 & 法定代表人",
          en: "Co-Founder & Legal Representative",
          fr: "Co-Fondatrice & Représentante légale",
        },
        period: { start: "2021-09", end: "2023-06" },
        location: { zh: "中国", en: "China", fr: "Chine" },
        bullets: [
          { zh: "负责公司注册、法律合规与基础运营体系建设，主导公司从 0 到 1 的设立", en: "Led company registration, legal compliance, and operational system setup, taking the company from 0 to 1", fr: "Direction de l'enregistrement, conformité juridique et mise en place des systèmes opérationnels de 0 à 1" },
          { zh: "开拓高校与国际机构合作资源，建立 5+ 合作伙伴网络", en: "Developed university and international institutional partnerships, building a network of 5+ collaborators", fr: "Développement de partenariats avec universités et institutions internationales, réseau de 5+ collaborateurs" },
          { zh: "设计并测试 B2B 与 B2C 国际教育服务模式，完成 2 项核心产品早期市场验证", en: "Designed and tested B2B and B2C international education service models, completing early market validation for 2 core products", fr: "Conception et test de modèles B2B et B2C, validation de marché précoce pour 2 produits clés" },
        ],
        tags: [
          { zh: "创业",   en: "Entrepreneurship",      fr: "Entrepreneuriat" },
          { zh: "国际业务", en: "International Business", fr: "Business International" },
          { zh: "运营管理", en: "Operations Management",  fr: "Gestion des opérations" },
        ],
        metrics: [
          { label: { zh: "运营周期", en: "Operating Period", fr: "Durée d'exploitation" }, value: "2 yr" },
          { label: { zh: "合作机构", en: "Partner Institutions", fr: "Partenaires" },       value: "5+" },
          { label: { zh: "核心产品", en: "Core Products",        fr: "Produits clés" },      value: "2" },
        ],
        context: {
          zh: "在学习期间联合创立国际教育与科技创业公司，担任法定代表人，负责公司从注册合规到业务拓展的早期运营，并探索国际教育服务商业模式。",
          en: "Co-founded an international education consulting company during studies, serving as legal representative, overseeing everything from company registration and compliance to business development and early-stage operations, exploring international education service business models.",
          fr: "Co-fondation d'une société de conseil en éducation internationale pendant les études, en tant que représentante légale, supervisant de l'enregistrement à la conformité et au développement commercial.",
        },
        problem: {
          zh: "负责公司注册、法律合规与基础运营体系建设；开拓高校与国际机构合作资源，建立 5+ 合作伙伴网络；设计并测试 B2B 与 B2C 国际教育服务模式。",
          en: "Responsible for company registration, legal compliance, and foundational operational system setup; developing university and international institutional partnerships to build a 5+ collaborator network; designing and testing B2B and B2C international education service models.",
          fr: "Enregistrement, conformité et systèmes opérationnels ; développement d'un réseau de 5+ partenaires universitaires et institutionnels ; conception de modèles B2B et B2C.",
        },
        approach: {
          zh: "主导公司从 0 到 1 的设立与运营，建立基础管理制度与业务流程；拓展多所高校与教育机构合作，形成稳定合作网络；推动两项核心产品上线测试并完成早期市场验证。",
          en: "Led the company's 0-to-1 setup and operations, establishing foundational management systems and business processes; expanded partnerships with multiple universities and education institutions to form a stable collaboration network; drove two core products to launch and completed early market validation.",
          fr: "Mise en place 0-à-1, systèmes de gestion et processus ; expansion des partenariats avec universités et institutions ; lancement de 2 produits clés et validation de marché.",
        },
        impact: {
          zh: "公司稳定运营约 2 年，建立跨机构合作网络；完成 2 项国际教育服务产品原型验证；积累创业运营与国际商务拓展经验。",
          en: "Company operated stably for approximately 2 years, establishing a cross-institutional collaboration network; completed prototype validation for 2 international education service products; built hands-on experience in startup operations and international business development.",
          fr: "Exploitation stable pendant ~2 ans, réseau inter-institutionnel établi ; validation de 2 prototypes de produits d'éducation internationale ; expérience concrète en opérations startup et développement commercial international.",
        },
        deliverables: [
          { zh: "公司注册与合规体系",       en: "Company Registration & Compliance System",   fr: "Système d'enregistrement et conformité" },
          { zh: "运营流程与服务 SOP",       en: "Operational Processes & Service SOPs",        fr: "Processus opérationnels et SOP services" },
          { zh: "合作机构资源网络（5+）",   en: "Institutional Partner Network (5+)",          fr: "Réseau de partenaires institutionnels (5+)" },
        ],
        skills: [
          { zh: "创业运营", en: "Startup Operations",      fr: "Opérations startup" },
          { zh: "商务拓展", en: "Business Development",    fr: "Développement commercial" },
          { zh: "国际合作", en: "International Partnerships", fr: "Partenariats internationaux" },
          { zh: "运营管理", en: "Operations Management",   fr: "Gestion des opérations" },
        ],
        artifacts: [
          { label: { zh: "企业信息（企查查）", en: "Company Profile (Qichacha)", fr: "Profil entreprise (Qichacha)" }, href: "https://m.qcc.com/mlogin?back=%2Ffirm%2F2ae8ae3e7b2560b84a5f0859c028d8f7.html" },
        ],
        gallery: ["/images/exp-longing-1.png", "/images/exp-longing-2.png"],
      },
      {
        category: "key", slug: "unido-beijing",
        logo: "/images/logos/unido.svg",
        logoSize: "small",
        org:  {
          zh: "联合国工业发展组织（UNIDO）北京办事处",
          en: "United Nations Industrial Development Organization (UNIDO) — Beijing Office",
          fr: "Organisation des Nations Unies pour le Développement Industriel (ONUDI) — Bureau de Pékin",
        },
        role: { zh: "研究实习生", en: "Research Intern", fr: "Stagiaire de Recherche" },
        period: { start: "2022-09", end: "2023-03" },
        location: { zh: "中国 北京", en: "Beijing, China", fr: "Pékin, Chine" },
        bullets: [
          { zh: "开展工业绿色转型政策研究，整理东亚地区 5+ 国家产业发展案例，建立比较分析框架", en: "Conducted industrial green transition policy research, compiling 5+ East Asian country case studies and building a comparative analysis framework", fr: "Recherche sur la transition verte industrielle, compilation de 5+ études de cas en Asie de l'Est et construction d'un cadre d'analyse comparatif" },
          { zh: "参与政策简报与行业研究报告撰写，支持 UNIDO 可持续工业发展项目", en: "Contributed to policy briefs and industry research reports supporting UNIDO's sustainable industrial development projects", fr: "Contribution aux notes de politique et rapports de recherche soutenant les projets de développement industriel durable de l'ONUDI" },
          { zh: "协助组织政府与国际机构沟通会议，推动产业合作交流", en: "Assisted in organising government-international institution coordination meetings to advance industrial cooperation and exchanges", fr: "Aide à l'organisation de réunions de coordination entre gouvernements et institutions internationales pour promouvoir la coopération industrielle" },
        ],
        tags: [
          { zh: "工业政策", en: "Industrial Policy", fr: "Politique Industrielle" },
          { zh: "绿色转型", en: "Green Transition",  fr: "Transition Verte" },
          { zh: "国际合作", en: "International Cooperation", fr: "Coopération Internationale" },
        ],
        metrics: [
          { label: { zh: "研究报告", en: "Research Reports", fr: "Rapports" },  value: "2" },
          { label: { zh: "国家案例", en: "Country Cases",    fr: "Cas pays" },  value: "5+" },
          { label: { zh: "实习周期", en: "Duration",         fr: "Durée" },     value: "6 mo" },
        ],
        context: {
          zh: "在 UNIDO 北京办事处参与工业绿色转型与可持续产业政策研究，支持东亚地区工业发展案例分析，并协助推进政府与国际机构之间的产业合作交流。",
          en: "Contributed to industrial green transition and sustainable industrial policy research at UNIDO Beijing Office, supporting East Asian industrial development case analysis and assisting in advancing government-international institution industrial cooperation exchanges.",
          fr: "Contribution à la recherche sur la transition verte industrielle et la politique industrielle durable au bureau ONUDI de Pékin, soutenant l'analyse des cas industriels en Asie de l'Est.",
        },
        problem: {
          zh: "开展工业绿色转型政策研究，整理东亚地区 5+ 国家产业发展案例；参与政策简报与行业研究报告撰写，支持 UNIDO 可持续工业发展项目；协助组织政府与国际机构沟通会议，推动产业合作交流。",
          en: "Conducting industrial green transition policy research and compiling 5+ East Asian country development cases; contributing to policy briefs and industry research reports for UNIDO sustainable industrial development projects; assisting in organising government-international institution coordination meetings.",
          fr: "Recherche sur la transition verte et compilation de 5+ cas pays ; contribution aux notes de politique et rapports de recherche ONUDI ; aide à l'organisation de réunions de coordination.",
        },
        approach: {
          zh: "系统整理东亚地区工业绿色转型政策案例并建立比较分析框架；参与撰写政策研究材料，支持团队完成区域产业研究报告；协助推进政府机构与国际组织之间的合作沟通。",
          en: "Systematically compiled East Asian industrial green transition policy cases and built a comparative analysis framework; contributed to policy research materials to support the team's regional industry reports; assisted in advancing cooperation and communication between government agencies and international organisations.",
          fr: "Compilation systématique des cas de transition verte et cadre d'analyse comparatif ; contribution aux matériaux de recherche politique ; soutien à la communication entre agences gouvernementales et organisations internationales.",
        },
        impact: {
          zh: "支持完成 2 份工业政策研究报告；为团队建立东亚产业政策案例数据库；提升团队对区域绿色工业转型实践的研究基础。",
          en: "Supported completion of 2 industrial policy research reports; built an East Asian industrial policy case database for the team; strengthened the team's research foundation on regional green industrial transition practices.",
          fr: "Soutien à 2 rapports de recherche ; base de données des cas de politique industrielle en Asie de l'Est ; renforcement de la base de recherche de l'équipe sur la transition verte.",
        },
        deliverables: [
          { zh: "东亚工业绿色转型政策简报",    en: "East Asia Industrial Green Transition Policy Brief",   fr: "Note de politique transition verte industrielle Asie de l'Est" },
          { zh: "5+ 国家产业政策案例数据库",   en: "5+ Country Industrial Policy Case Database",            fr: "Base de données de cas de politique industrielle (5+ pays)" },
          { zh: "区域产业政策研究报告",         en: "Regional Industrial Policy Research Report",            fr: "Rapport de recherche sur la politique industrielle régionale" },
        ],
        skills: [
          { zh: "政策研究",  en: "Policy Research",         fr: "Recherche politique" },
          { zh: "产业分析",  en: "Industrial Analysis",     fr: "Analyse industrielle" },
          { zh: "国际合作",  en: "International Cooperation", fr: "Coopération internationale" },
          { zh: "报告写作",  en: "Report Writing",          fr: "Rédaction de rapports" },
        ],
        artifacts: [
          { label: { zh: "UNIDO 官网", en: "UNIDO Official Website", fr: "Site officiel ONUDI" }, href: "https://www.unido.org" },
        ],
        gallery: ["/images/exp-unido-1.png", "/images/exp-unido-2.png"],
      },
      {
        category: "key", slug: "wfeo",
        logo: "/images/logos/wfeo.png",
        org: {
          zh: "世界工程组织联合会（WFEO）主席办公室",
          en: "World Federation of Engineering Organisations (WFEO) — President's Office",
          fr: "Fédération Mondiale des Organisations d'Ingénieurs (FMOI) — Bureau de la Présidente",
        },
        role: { zh: "研究实习生", en: "Research Intern", fr: "Stagiaire de Recherche" },
        period: { start: "2021-09", end: "2022-08" },
        location: { zh: "中国 天津", en: "Tianjin, China", fr: "Tianjin, Chine" },
        bullets: [
          { zh: "完成 10+ 国际工程政策议题研究与跨国伙伴影响分析，支撑 SDG 9/16/17 相关目标落地", en: "Completed 10+ international engineering policy research pieces and cross-country partner impact analyses, supporting SDG 9/16/17 implementation", fr: "Réalisation de 10+ recherches sur les politiques d'ingénierie internationales et analyses d'impact, soutenant la mise en œuvre des ODD 9/16/17" },
          { zh: "支撑 5+ 场跨国虚拟研讨会与简报会议的筹备执行，整理规范会议纪要与材料体系", en: "Supported the preparation and execution of 5+ cross-country virtual workshops and briefings, organising and standardising meeting minutes and documentation", fr: "Soutien à 5+ ateliers virtuels transnationaux, organisation et standardisation des comptes rendus et documents" },
          { zh: "跟踪全球工程发展趋势与政策动态，参与 WFEO 国际工程政策研究与合作推进", en: "Tracked global engineering development trends and policy dynamics, contributing to WFEO international engineering policy research and partnership advancement", fr: "Suivi des tendances mondiales et dynamiques politiques de l'ingénierie, contribution à la recherche et aux partenariats FMOI" },
        ],
        tags: [
          { zh: "SDG 落地",  en: "SDG Implementation", fr: "Mise en œuvre ODD" },
          { zh: "跨国会务",  en: "Cross-border Events", fr: "Événements transnationaux" },
          { zh: "工程政策",  en: "Engineering Policy",  fr: "Politique d'ingénierie" },
        ],
        metrics: [
          { label: { zh: "国际议题研究",   en: "Policy Research Pieces", fr: "Travaux de recherche" }, value: "10+" },
          { label: { zh: "虚拟会议组织",   en: "Virtual Meetings",       fr: "Réunions virtuelles" }, value: "5+" },
          { label: { zh: "重点 SDG 目标", en: "SDG Focus Areas",         fr: "Axes ODD" },            value: "9/16/17" },
        ],
        context: {
          zh: "参与 WFEO 国际工程政策研究与 SDG 目标落地支撑，负责跨国议题梳理、虚拟会务支持与文件撰写，强化国际协作与会务执行能力。",
          en: "Contributed to WFEO international engineering policy research and SDG implementation support, responsible for cross-country issue analysis, virtual event support, and documentation — strengthening international collaboration and event execution capabilities.",
          fr: "Contribution à la recherche sur les politiques d'ingénierie de la FMOI et au soutien à la mise en œuvre des ODD, responsable de l'analyse inter-pays, du soutien aux événements virtuels et de la documentation.",
        },
        problem: {
          zh: "跟踪全球工程发展趋势与政策动态；支撑 SDG 9/16/17 相关议题落地与跨国伙伴研究；负责虚拟研讨会、简报会议的筹备与纪要整理。",
          en: "Tracking global engineering development trends and policy dynamics; supporting SDG 9/16/17 issue implementation and cross-country partner research; responsible for virtual workshop and briefing preparation and meeting minutes compilation.",
          fr: "Suivi des tendances et dynamiques politiques mondiales ; soutien à la mise en œuvre des ODD 9/16/17 ; préparation des ateliers virtuels et compilation des comptes rendus.",
        },
        approach: {
          zh: "完成 10+ 国际工程议题研究与伙伴影响分析报告；支撑多场跨国虚拟会议执行，规范会议纪要与材料体系；参与 WFEO 政策立场文件起草与国际合作推进。",
          en: "Completed 10+ international engineering policy research pieces and partner impact analysis reports; supported multiple cross-country virtual meetings, standardising minutes and documentation systems; contributed to WFEO policy position paper drafting and international partnership advancement.",
          fr: "10+ travaux de recherche et analyses d'impact ; soutien aux réunions virtuelles multi-pays, standardisation des comptes rendus ; contribution aux documents de position et aux partenariats internationaux.",
        },
        impact: {
          zh: "搭建国际工程政策基础研究能力，积累 SDG 落地与跨国会务协作经验，为后续出海与国际项目执行奠定基础。",
          en: "Built foundational international engineering policy research capabilities, accumulated SDG implementation and cross-country event coordination experience, establishing a strong base for subsequent overseas and international project execution.",
          fr: "Construction des capacités de recherche en politique d'ingénierie internationale, accumulation d'expérience en mise en œuvre ODD et coordination inter-pays, base solide pour l'exécution de projets internationaux.",
        },
        deliverables: [
          { zh: "国际工程政策研究摘要（10+ 篇）", en: "International Engineering Policy Research Summaries (10+)", fr: "Résumés de recherche en politique d'ingénierie internationale (10+)" },
          { zh: "跨国会议纪要与简报材料",          en: "Cross-Country Meeting Minutes & Briefing Materials",        fr: "Comptes rendus de réunions transnationales et supports de briefing" },
          { zh: "SDG 9/16/17 议题支撑文档",        en: "SDG 9/16/17 Issue Support Documentation",                  fr: "Documentation de soutien aux ODD 9/16/17" },
        ],
        skills: [
          { zh: "国际政策研究", en: "International Policy Research", fr: "Recherche en politique internationale" },
          { zh: "SDG 落地",    en: "SDG Implementation",            fr: "Mise en œuvre des ODD" },
          { zh: "跨国会务",    en: "Cross-border Event Management",  fr: "Gestion d'événements transnationaux" },
          { zh: "文件撰写",    en: "Policy Documentation",           fr: "Rédaction de documents" },
        ],
        artifacts: [
          { label: { zh: "WFEO 官网", en: "WFEO Official Website", fr: "Site officiel FMOI" }, href: "https://www.wfeo.org" },
        ],
        gallery: ["/images/exp-wfeo-1.png", "/images/exp-wfeo-2.png"],
      },
    ],

    projects: [
      {
        slug: "longing-startup",
        tags: [
          { zh: "国际教育创业",   en: "International Education Entrepreneurship", fr: "Entrepreneuriat éducation internationale" },
          { zh: "ITC-ILO 项目合作", en: "ITC-ILO Project Collaboration",          fr: "Collaboration projet ITC-ILO" },
          { zh: "跨境合规与运营", en: "Cross-Border Compliance & Management",     fr: "Conformité & gestion transfrontalière" },
        ],
        title: {
          zh: "天津朗意斯峻留学服务咨询有限公司 — 联合创始人 & 法人",
          en: "Longing Study Abroad Consulting Co., Ltd. (Tianjin) — Co-Founder & Legal Person",
          fr: "Longing Study Abroad Consulting Co., Ltd. (Tianjin) — Co-Fondatrice & Représentante légale",
        },
        context: {
          zh: "创立并运营一家专注海外留学申请服务的小型教育咨询公司，业务覆盖多个英语国家；同期承接 ITC-ILO 青年领袖训练营推广项目，面临跨境业务管理、国际合作与法律合规的综合挑战。",
          en: "Founded and operated a small education consulting company focused on overseas study application services, covering multiple English-speaking countries; concurrently managed the ITC-ILO Young Leaders Boot Camp promotion project, navigating cross-border business management, international cooperation, and legal compliance.",
          fr: "Fondé et exploité une société de conseil en études à l'étranger couvrant plusieurs pays anglophones ; géré en parallèle le projet de promotion du Boot Camp ITC-ILO, en naviguant entre la gestion transfrontalière et la conformité légale.",
        },
        problem: {
          zh: "作为联合创始人兼法人，全面负责公司日常运营、国际合作（ITC-ILO 项目）、跨境合规、海外院校对接、团队管理与客户服务交付，确保公司稳定运营与服务质量。",
          en: "As Co-Founder and Legal Person, took charge of overall business operations, international cooperation (ITC-ILO project), cross-border compliance, overseas university liaison, team management, and client service delivery to ensure stable operations and high-quality service.",
          fr: "En tant que Co-Fondatrice et Représentante légale, responsable des opérations globales, de la coopération internationale (projet ITC-ILO), de la conformité transfrontalière, des relations avec les universités étrangères et de la livraison des services clients.",
        },
        approach: {
          zh: "运营公司 3 年（2022.03–2025.04），独立管理 40+ 个完整留学申请项目，主导审阅 200+ 份申请文书，客户满意度 90%+；推广 ITC-ILO 青年训练营项目，对接 4 所高校，组织 4 场线上宣讲，每周汇报营销数据；建立 4 套合规体系，处理 100+ 份客户合同与 10+ 起纠纷（纠纷解决率 100%）；开立 3 种货币银行账户，处理 20+ 笔跨境汇款，对接 20+ 所海外院校招生办。",
          en: "Operated the company for 3 years (2022.03–2025.04); independently managed 40+ complete study application projects, reviewed 200+ application documents, achieving 90%+ client satisfaction; promoted ITC-ILO Boot Camp in China, docked 4 universities, organised 4 online events, and reported marketing data weekly; established 4 compliance systems, handled 100+ contracts and 10+ disputes with 100% settlement rate; opened 3-currency bank accounts, handled 20+ cross-border remittances, and liaised with 20+ overseas university admissions offices.",
          fr: "Exploité la société pendant 3 ans (2022.03–2025.04) ; géré 40+ dossiers de candidature complets, révisé 200+ documents, satisfaction client 90%+ ; promotion ITC-ILO dans 4 universités chinoises, 4 événements en ligne organisés ; 4 systèmes de conformité établis, 100+ contrats et 10+ litiges gérés (taux de résolution 100%) ; comptes en 3 devises, 20+ virements internationaux, liaison avec 20+ bureaux d'admission.",
        },
        result: {
          zh: "建立稳定的口碑客户网络（50% 转介绍率），累计营收突破百万元；成功在中国高校推广 ITC-ILO 项目并建立高校合作渠道；确保零运营异常，完成全部客户项目交付，积累丰富的国际沟通、跨境合规与项目管理实战经验。",
          en: "Built a referral-driven client network (50% referral rate) with cumulative revenue exceeding ¥1M RMB; successfully promoted the ITC-ILO programme in Chinese universities and established university partnership channels; maintained zero operational incidents, delivered all client projects, and accumulated substantial hands-on experience in international communication, cross-border compliance, and project management.",
          fr: "Réseau client fondé sur le bouche-à-oreille (50% de recommandations), chiffre d'affaires cumulé dépassant 1M¥ ; programme ITC-ILO promu avec succès dans les universités chinoises ; zéro incident opérationnel, tous les projets clients livrés.",
        },
        deliverables: [
          { zh: "留学申请材料包 & 200+ 份审阅文书",           en: "Overseas Study Application Packages & 200+ Reviewed Documents",      fr: "Dossiers de candidature & 200+ documents révisés" },
          { zh: "ITC-ILO 推广材料（双语海报、公众号内容）",  en: "ITC-ILO Promotion Materials (Bilingual Posters, WeChat Content)",    fr: "Supports de promotion ITC-ILO (affiches bilingues, WeChat)" },
          { zh: "合规体系文件（隐私、合同、退款条款）",       en: "Compliance System Documents (Privacy, Contract Standards, Refund Terms)", fr: "Documents de conformité (confidentialité, contrats, remboursements)" },
          { zh: "跨境汇款管理记录 & 海外院校对接纪要",        en: "Cross-Border Remittance Records & Overseas University Meeting Notes", fr: "Registres de virements & notes de liaison universitaire" },
          { zh: "团队培训材料（文书写作、客户沟通、申请流程）", en: "Team Training Materials (Document Writing, Client Communication, Application Process)", fr: "Supports de formation d'équipe" },
        ],
        skills: [
          { zh: "创业运营与团队管理",   en: "Entrepreneurship & Team Management",        fr: "Entrepreneuriat & management d'équipe" },
          { zh: "国际项目合作",         en: "International Project Collaboration",        fr: "Collaboration de projet internationale" },
          { zh: "跨境合规",             en: "Cross-Border Compliance",                   fr: "Conformité transfrontalière" },
          { zh: "客户关系管理",         en: "Client Relationship Management",            fr: "Gestion de la relation client" },
          { zh: "端到端项目交付",       en: "End-to-End Project Delivery",               fr: "Livraison de projet de bout en bout" },
        ],
        metrics: [
          { label: { zh: "累计服务学生", en: "Students Served",      fr: "Étudiants accompagnés" }, value: "80+" },
          { label: { zh: "独立管理申请", en: "Applications Managed", fr: "Candidatures gérées" },   value: "40+" },
          { label: { zh: "对接海外院校", en: "Overseas Universities", fr: "Universités étrangères" }, value: "20+" },
        ],
        artifacts: [
          { label: { zh: "ITC-ILO 官网", en: "ITC-ILO Website", fr: "Site ITC-ILO" }, href: "https://www.itcilo.org" },
        ],
        coverImage: "/images/project-longing-1.png",
        gallery: ["/images/project-longing-1.png", "/images/project-longing-2.png"],
      },
      {
        slug: "erm-compliance",
        tags: [
          { zh: "欧盟电池法规", en: "EU Battery Regulation", fr: "Réglementation Batteries UE" },
          { zh: "合规咨询",     en: "Compliance Advisory",   fr: "Conseil Conformité" },
          { zh: "新能源出海",   en: "EV Battery Gigafactory", fr: "Gigafactory Batteries VE" },
        ],
        title: {
          zh: "ERM：亚洲新能源电池企业欧洲市场合规准备评估",
          en: "ERM: European Market Readiness Assessment for an Asian EV Battery Manufacturer",
          fr: "ERM : Évaluation de préparation au marché européen pour un fabricant asiatique de batteries VE",
        },
        context: {
          zh: "欧盟《电池法规》（EU 2023/1542）正式生效，一家中国背景动力电池制造商正推进在法国建设欧洲超级工厂（并筹划西班牙扩张框架），亟需系统性合规支持。",
          en: "EU Battery Regulation (EU 2023/1542) took effect; a Chinese EV battery manufacturer needed compliance support for its European gigafactory development in France, with a Spain expansion framework under consideration.",
          fr: "Le Règlement Batteries UE (2023/1542) est entré en vigueur ; un fabricant chinois de batteries VE cherchait un appui en conformité pour son projet de gigafactory en France (avec expansion en Espagne).",
        },
        problem: {
          zh: "作为 ERM 可持续发展咨询实习生，支持法规适用性筛查、LCA 数据框架搭建、供应链尽调准备及合规路线图梳理，协助客户应对法规适用性与数据缺口问题。",
          en: "As an ERM consulting intern, supported regulatory screening, LCA data framework preparation, supply chain due diligence readiness, and compliance roadmap sorting to address the client's regulatory applicability and data gap issues.",
          fr: "En tant que stagiaire consultant ERM, soutenu le screening réglementaire, la préparation du cadre de données ACV, la préparation à la due diligence fournisseurs et le tri de la feuille de route conformité.",
        },
        approach: {
          zh: "系统梳理欧盟《电池法规》20+ 项核心义务；整理数据请求包与供应商数据成熟度矩阵；构建 RAG 风险矩阵；协助差距评估与分阶段合规路线图编制。",
          en: "Structured 20+ key obligations of EU Battery Regulation; compiled data request packs and supplier data maturity matrix; built RAG risk matrix; supported gap assessment and phased compliance roadmap.",
          fr: "Structuration de 20+ obligations clés du Règlement Batteries ; compilation des packs de demande de données et de la matrice de maturité fournisseurs ; construction de la matrice RAG ; soutien à l'évaluation des écarts et à la feuille de route.",
        },
        result: {
          zh: "为客户欧盟合规准备奠定基础，明确优先行动清单（10+ 项），降低合规不确定性与后续返工风险，获得 ERM 团队与客户方正向反馈。",
          en: "Laid the foundation for the client's EU compliance preparation; clarified 10+ priority actions; reduced compliance uncertainty and rework risk; received positive feedback from the ERM team and client.",
          fr: "Fondations établies pour la préparation conformité UE du client ; 10+ actions prioritaires clarifiées ; incertitude et risques de retravail réduits ; retours positifs de l'équipe ERM et du client.",
        },
        deliverables: [
          { zh: "法规适用性矩阵（草稿）",                   en: "Regulatory Applicability Matrix (draft)",                       fr: "Matrice d'applicabilité réglementaire (brouillon)" },
          { zh: "LCA 数据请求包（草稿）",                   en: "LCA Data Request Pack (draft)",                                fr: "Pack de demande de données ACV (brouillon)" },
          { zh: "供应商数据成熟度矩阵 & RAG 风险矩阵",       en: "Supplier Data Maturity Matrix & RAG Risk Matrix",              fr: "Matrice de maturité fournisseurs & Matrice RAG" },
          { zh: "合规差距评估 & 优先级路线图（协助起草）",   en: "Compliance Gap Assessment & Prioritised Roadmap (supporting draft)", fr: "Évaluation des écarts & feuille de route prioritaire (brouillon de soutien)" },
        ],
        skills: [
          { zh: "欧盟监管分析", en: "EU Regulatory Analysis",    fr: "Analyse réglementaire UE" },
          { zh: "合规差距评估", en: "Compliance Gap Assessment", fr: "Évaluation des écarts" },
          { zh: "供应链尽调",   en: "Supply Chain Due Diligence", fr: "Due diligence fournisseurs" },
          { zh: "结构化交付",   en: "Structured Delivery",        fr: "Livraison structurée" },
          { zh: "客户沟通",     en: "Client Communication",       fr: "Communication client" },
        ],
        metrics: [
          { label: { zh: "核心客户",   en: "Client",            fr: "Client" },           value: "1" },
          { label: { zh: "法规义务梳理", en: "Reg. Obligations", fr: "Obligations régl." }, value: "20+" },
          { label: { zh: "优先行动",   en: "Priority Actions",  fr: "Actions prioritaires" }, value: "10+" },
        ],
        artifacts: [
          { label: { zh: "ERM 官网", en: "ERM Website", fr: "Site ERM" }, href: "https://www.erm.com" },
        ],
        coverImage: "/images/project-erm-cover.png",
        gallery: ["/images/project-erm-1.png", "/images/project-erm-2.png"],
      },
      {
        slug: "oecd-ifcma",
        tags: [
          { zh: "气候政策数据库",   en: "Climate Policy Database",       fr: "Base de données politique climatique" },
          { zh: "碳市场建模",       en: "ETS Modeling & Data Governance", fr: "Modélisation SEQE & gouvernance données" },
          { zh: "国际政策协作",     en: "International Policy Collaboration", fr: "Collaboration politique internationale" },
        ],
        title: {
          zh: "OECD IFCMA 气候政策数据库——中国气候政策结构化与数据治理",
          en: "OECD IFCMA Climate Policy Database — China Climate Policy Structuring & Data Governance",
          fr: "Base de données OCDE IFCMA — Structuration des politiques climatiques chinoises",
        },
        context: {
          zh: "OECD 启动 IFCMA 气候政策数据库，系统收集和标准化全球气候减缓政策；需紧急梳理并结构化中国国家与地方气候政策，以支持跨国比较和温室气体排放基准工作。",
          en: "OECD launched the IFCMA Climate Policy Database to collect and standardise global climate mitigation policies; an urgent need arose to systematically structure China's national and provincial climate policies to support cross-country comparison and GHG emission baseline work.",
          fr: "L'OCDE a lancé la base de données IFCMA pour collecter et standardiser les politiques mondiales d'atténuation climatique ; il était urgent de structurer les politiques climatiques chinoises pour soutenir les comparaisons inter-pays.",
        },
        problem: {
          zh: "作为 OECD 初级顾问，负责中国气候政策的采集、结构建模、方法论建立、数据治理及国际技术沟通，确保中国政策数据在数据库中的可溯源性、一致性与可比性。",
          en: "As a Junior Consultant at OECD, responsible for China's climate policy collection, structural modelling, methodology establishment, data governance, and international technical communication to ensure the traceability, consistency, and comparability of China's policy data in the database.",
          fr: "En tant que Consultant Junior à l'OCDE, responsable de la collecte, la modélisation structurelle, l'établissement de méthodologie et la communication technique internationale pour les politiques climatiques chinoises.",
        },
        approach: {
          zh: "按 IFCMA 分类体系整理 50+ 项中国气候减缓政策；填写 100+ 政策字段并为所有工具建立法律法规溯源映射；构建 ETS 数据模型，量化 2023 年成交总额（18,114 百万元）；主导「禁令/淘汰」类工具规范填写；每周与 OECD 专家开展技术交流，推动团队对中国政策的跨组理解。",
          en: "Structured 50+ China climate mitigation policies by IFCMA classification; filled 100+ policy fields and established legal statute mapping for all instruments; built ETS data model, quantified 2023 transaction volume (¥18,114M); led standardised filling of ban/phase-out instruments; conducted weekly technical communication with OECD experts and promoted cross-team understanding of China's climate policies.",
          fr: "Structuration de 50+ politiques chinoises par classification IFCMA ; remplissage de 100+ champs et mappage des sources légales ; modélisation du SEQE, quantification du volume 2023 (¥18 114M) ; communication hebdomadaire avec les experts OCDE.",
        },
        result: {
          zh: "确保中国政策数据在 OECD 数据库中的完整性与可溯源性，支持跨国政策比较及 OECD 温室气体排放基准工作，专业方法论与高效沟通获项目团队认可。",
          en: "Ensured completeness and traceability of China's policy data in the OECD database; supported cross-country policy comparison and OECD's GHG emission baseline work; recognised by the project team for professional methodology and efficient communication.",
          fr: "Complétude et traçabilité des données chinoises assurées dans la base OCDE ; comparaisons inter-pays et travaux GES soutenus ; méthodologie et communication reconnues par l'équipe.",
        },
        deliverables: [
          { zh: "中国气候政策结构化模板（50+ 项工具）",      en: "Structured China Climate Policy Templates (50+ instruments)",      fr: "Modèles structurés politiques climatiques chinoises (50+ instruments)" },
          { zh: "ETS 数据建模报告 & 新能源汽车补贴框架",     en: "ETS Data Modelling Report & EV Subsidy Structure Framework",       fr: "Rapport modélisation SEQE & cadre subventions VE" },
          { zh: "政策来源溯源映射 & ISIC/IPCC 行业映射说明", en: "Policy Source Mapping & ISIC/IPCC Sector Mapping Notes",            fr: "Mappage des sources & notes de classification ISIC/IPCC" },
          { zh: "中国气候政策法律体系背景说明草稿",           en: "Background Note Draft on China's Climate Policy Legal System",     fr: "Note de contexte sur le système juridique climatique chinois" },
          { zh: "每周技术交流 & 方法论会议纪要",              en: "Weekly Communication & Methodology Meeting Minutes",               fr: "Comptes rendus des réunions hebdomadaires" },
        ],
        skills: [
          { zh: "政策结构化分析",   en: "Policy Structuring & Analysis",    fr: "Structuration et analyse des politiques" },
          { zh: "数据治理",         en: "Data Governance",                  fr: "Gouvernance des données" },
          { zh: "碳市场建模",       en: "Carbon Market Modelling (ETS)",    fr: "Modélisation marché carbone" },
          { zh: "国际技术沟通",     en: "International Technical Communication", fr: "Communication technique internationale" },
          { zh: "跨团队方法论推广", en: "Cross-team Methodology Alignment",  fr: "Alignement méthodologique inter-équipes" },
        ],
        metrics: [
          { label: { zh: "气候减缓政策梳理", en: "Policies Structured",   fr: "Politiques structurées" }, value: "50+" },
          { label: { zh: "政策字段填写",     en: "Policy Fields Filled",  fr: "Champs remplis" },          value: "100+" },
          { label: { zh: "ETS 成交额（2023）", en: "ETS Volume (2023)",   fr: "Volume SEQE (2023)" },       value: "¥18,114M" },
        ],
        artifacts: [
          { label: { zh: "OECD IFCMA 数据库", en: "OECD IFCMA Database", fr: "Base OCDE IFCMA" }, href: "https://www.oecd.org/en/topics/climate-change.html" },
        ],
        coverImage: "/images/project-oecd-cover.png",
        gallery: ["/images/project-oecd-2.png", "/images/project-oecd-1.png", "/images/project-oecd-3.png"],
      },
      {
        slug: "undp-portfolio",
        tags: [
          { zh: "区域项目监测",     en: "Regional Project Monitoring", fr: "Suivi de projet régional" },
          { zh: "跨国协调",         en: "Cross-Country Coordination",  fr: "Coordination multi-pays" },
          { zh: "塑料循环经济",     en: "Plastics Circularity",         fr: "Économie circulaire plastiques" },
        ],
        title: {
          zh: "UNDP：TCCF 亚太十国塑料循环项目区域执行监测系统",
          en: "UNDP: Regional Implementation Monitoring System for TCCF Plastics Circularity Multi-Country Programme",
          fr: "PNUD : Système de suivi de mise en œuvre régionale du programme multi-pays TCCF Plastics Circularity",
        },
        context: {
          zh: "TCCF 资助的塑料循环经济项目覆盖亚太 10 国，各国跟踪工具分散、产出与指标框架不统一，区域进度可见度滞后。",
          en: "A TCCF-funded plastics circularity programme spanning 10 Asia-Pacific countries had unstructured tracking tools, inconsistent output/indicator frameworks, and delayed regional progress visibility.",
          fr: "Un programme TCCF sur la circularité des plastiques couvrant 10 pays d'Asie-Pacifique manquait d'outils de suivi structurés, de cadres cohérents et de visibilité régionale en temps réel.",
        },
        problem: {
          zh: "作为 UNDP 环境与能源团队 Fellow，独立设计并搭建统一区域执行跟踪系统，规范进度监测，对齐跨国数据，支持捐助方汇报。",
          en: "As UNDP Environment & Energy Fellow, independently designed and built a unified regional implementation tracking system to standardise progress monitoring, align cross-country data, and support donor reporting.",
          fr: "En tant que Fellow UNDP, j'ai conçu et construit de manière indépendante un système de suivi régional unifié pour standardiser le suivi des progrès, aligner les données inter-pays et soutenir le reporting donateurs.",
        },
        approach: {
          zh: "搭建双层跟踪框架（1 张区域总览 + 11 张国家/区域分表）；以项目文件为核心结构，统一各国不一致的产出与指标；组织各国办公室演练测试，迭代 3–4 个主要版本。",
          en: "Built a 2-layer tracking framework (1 regional overview + 11 country/regional sheets); harmonised inconsistent outputs and indicators across countries using the project document as core structure; organised country office walkthrough tests and iterated 3–4 major versions.",
          fr: "Construit un cadre de suivi à 2 niveaux (1 vue régionale + 11 fiches pays) ; harmonisé les résultats et indicateurs incohérents ; organisé des tests avec les bureaux pays et itéré 3–4 versions majeures.",
        },
        result: {
          zh: "建立统一区域监测系统，提升跨国进度可比性，减少区域团队手动数据汇总耗时，实现延误预警识别与面向捐助方的实时汇报支持。",
          en: "Established a unified regional monitoring system, improved cross-country progress comparability, reduced manual data consolidation time for the regional team, and enabled real-time delay identification and donor-oriented reporting.",
          fr: "Système de suivi régional unifié établi, comparabilité inter-pays améliorée, consolidation manuelle réduite, identification des retards en temps réel et reporting donateurs facilité.",
        },
        deliverables: [
          { zh: "区域执行状态总览表",              en: "Regional Implementation Status Overview Sheet",    fr: "Fiche de synthèse régionale d'état d'avancement" },
          { zh: "10 个国家级详细跟踪表",           en: "10 Country-Level Detailed Tracking Sheets",         fr: "10 fiches de suivi détaillées par pays" },
          { zh: "产出-指标交叉映射说明文档",        en: "Output-Indicator Crosswalk Mapping Notes",          fr: "Notes de mappage croisé résultats-indicateurs" },
          { zh: "修订版跟踪模板（3–4 个主要版本）", en: "Revised Tracking Templates (3–4 major versions)",   fr: "Modèles de suivi révisés (3–4 versions majeures)" },
          { zh: "各国办公室测试反馈汇总",           en: "Country Office Testing Feedback Summary",           fr: "Synthèse des retours de tests des bureaux pays" },
        ],
        skills: [
          { zh: "系统设计与独立交付", en: "System Design & Independent Delivery", fr: "Conception système & livraison autonome" },
          { zh: "跨国协调",           en: "Cross-country Coordination",           fr: "Coordination multi-pays" },
          { zh: "利益相关方管理",     en: "Stakeholder Management",               fr: "Gestion des parties prenantes" },
          { zh: "迭代项目管理",       en: "Iterative Project Management",         fr: "Gestion de projet itérative" },
        ],
        metrics: [
          { label: { zh: "覆盖国家",    en: "Countries",          fr: "Pays" },           value: "10" },
          { label: { zh: "跟踪模板",    en: "Tracking Templates", fr: "Modèles" },         value: "12" },
          { label: { zh: "活动与指标记录", en: "Activity & Indicator Records", fr: "Enregistrements" }, value: "100+" },
        ],
        artifacts: [
          { label: { zh: "UNDP 官网", en: "UNDP Website", fr: "Site PNUD" }, href: "https://www.undp.org" },
        ],
        coverImage: "/images/project-undp-1.png",
        gallery: ["/images/project-undp-1.png", "/images/project-undp-2.png", "/images/project-undp-3.png"],
      },
    ],

    publications: [
      {
        type: "Poster", featured: true,
        title: {
          zh: "气候适应在小岛屿发展中国家：GCF 项目评估（CARE 2025）",
          en: "Climate Adaptation in SIDS: Assessing GCF Projects (CARE 2025)",
          fr: "Adaptation Climatique dans les PEID : Évaluation des projets FVC (CARE 2025)",
        },
        outlet: {
          zh: "CARE 年会 2025 · 多伦多大学 & 圭尔夫大学",
          en: "CARE Annual Conference 2025 · University of Toronto & University of Guelph",
          fr: "Conférence CARE 2025 · Université de Toronto & Université de Guelph",
        },
        year: 2025,
        summary: {
          zh: "评估 GCF 资助项目与 SIDS 气候脆弱性的匹配度（基于 ND-GAIN 指数），发现 53% 适应项目高度对应主要脆弱性，提出 TDS/NBS/CBA 混合适应框架。",
          en: "Evaluates alignment between GCF-funded projects and sectoral vulnerabilities in SIDS using the ND-GAIN index — 53% of adaptation projects align with primary vulnerabilities; proposes a hybrid TDS/NBS/CBA resilience framework.",
          fr: "Évalue l'alignement entre projets FVC et vulnérabilités des PEID (indice ND-GAIN) — 53% des projets d'adaptation alignés ; propose un cadre de résilience hybride TDS/NBS/CBA.",
        },
        href: "#",
      },
      {
        type: "Data Paper",
        title: {
          zh: "「飞翔之翼」计划 · 乡村振兴数据系列（3 篇）",
          en: "\"Flying Wings\" Program · Rural Revitalization Data Series (3 papers)",
          fr: "Programme \"Flying Wings\" · Série de données pour la revitalisation rurale (3 articles)",
        },
        outlet: { zh: "GCdataPR", en: "GCdataPR", fr: "GCdataPR" },
        year: 2023,
        summary: {
          zh: "参与南开大学「飞翔之翼」乡村振兴科研项目，发表 3 篇地理数据论文，涵盖吉林磐石农业评估与黄河灌区双季种植案例数据。",
          en: "Co-authored 3 geographic data papers as part of the Nankai University \"Flying Wings\" rural revitalization programme, covering agricultural assessments in Jilin Province and Yellow River irrigation case studies.",
          fr: "Co-auteure de 3 articles de données géographiques dans le cadre du programme de revitalisation rurale « Flying Wings » de l'Université Nankai.",
        },
        group: [
          {
            type: "Data Paper",
            title: {
              zh: "乡村振兴创新 — 吉林磐石沈阳农业评估（II）",
              en: "Innovation for Rural Revitalization — Shenyang Agricultural Assessment in Panshi, Jilin (II)",
              fr: "Innovation pour la Revitalisation Rurale — Panshi, Jilin (II)",
            },
            outlet: { zh: "GCdataPR", en: "GCdataPR", fr: "GCdataPR" },
            year: 2023,
            summary: {
              zh: "Guanyi WANG, Qihui YUAN et al.",
              en: "Guanyi WANG, Qihui YUAN et al.",
              fr: "Guanyi WANG, Qihui YUAN et al.",
            },
            href: "https://doi.org/10.3974/geodb.2023.02.10.v1",
          },
          {
            type: "Data Paper",
            title: {
              zh: "GIES 案例 9：黄河灌区方寺乡小麦-玉米双季种植",
              en: "GIES Case 9: Yucheng Wheat-Maize Double Cropping, Fangsi Township, Yellow River",
              fr: "GIES Cas 9 : Double Culture Blé-Maïs, Canton Fangsi, Fleuve Jaune",
            },
            outlet: { zh: "GCdataPR", en: "GCdataPR", fr: "GCdataPR" },
            year: 2023,
            summary: {
              zh: "Jinyao CUI, Yuedi MA, Qihui YUAN.",
              en: "Jinyao CUI, Yuedi MA, Qihui YUAN.",
              fr: "Jinyao CUI, Yuedi MA, Qihui YUAN.",
            },
            href: "https://doi.org/10.3974/geodb.2022.09.10.v1",
          },
          {
            type: "Data Paper",
            title: {
              zh: "乡村振兴创新 — 吉林磐石沈阳农业评估（I）",
              en: "Innovation for Rural Revitalization — Shenyang Agricultural Assessment in Panshi, Jilin (I)",
              fr: "Innovation pour la Revitalisation Rurale — Panshi, Jilin (I)",
            },
            outlet: { zh: "GCdataPR", en: "GCdataPR", fr: "GCdataPR" },
            year: 2023,
            summary: {
              zh: "Guanyi WANG, Qihui YUAN et al.",
              en: "Guanyi WANG, Qihui YUAN et al.",
              fr: "Guanyi WANG, Qihui YUAN et al.",
            },
            href: "https://doi.org/10.3974/geodb.2023.01.04.v1",
          },
        ],
      },
    ],

    media: [
      {
        type: "Feature",
        title: {
          zh: "人物 | 以不变初心走上万变的世界舞台",
          en: "Profile: Stepping onto the World Stage with an Unwavering Mission",
          fr: "Portrait : Monter sur la scène mondiale avec une mission inébranlable",
        },
        publisher: { zh: "前线（北京市委党刊）", en: "Qianxian — Beijing Municipal Party Journal", fr: "Qianxian — Revue du Comité municipal de Pékin" },
        year: 2024,
        context: {
          zh: "报道聚焦从南开大学到 UNIDO、OECD、UNDP 等国际机构的成长路径，展示中国青年参与全球环境与能源治理的职业实践。",
          en: "Feature on the career path from Nankai University to UNIDO, OECD, and UNDP — showcasing a Chinese youth professional's journey into global environmental and energy governance.",
          fr: "Portrait du parcours de Nankai à l'ONUDI, l'OCDE et le PNUD — illustrant le chemin d'une jeune professionnelle chinoise dans la gouvernance mondiale de l'environnement.",
        },
        href: "http://app.bjqx.org.cn/portal/sites/distH5/pages/index.html#/news/organInformation?id=748351&docLibId=79118&doc_type=%E6%96%87%E7%AB%A0%E6%96%B0%E9%97%BB&pubId=634847&siteId=83&shareFlag=1",
      },
      {
        type: "Interview",
        title: {
          zh: "【青年π】袁齐惠：用不可替代性描绘不确定时代中的成长之路",
          en: "【Youth π】Qihui Yuan: Building Irreplaceability in an Age of Uncertainty",
          fr: "【Youth π】Qihui Yuan : Construire son irremplaçabilité dans un monde incertain",
        },
        publisher: { zh: "Global Citizen Year（世界公民年）微信公众号", en: "Global Citizen Year — WeChat", fr: "Global Citizen Year — WeChat" },
        year: 2023,
        context: {
          zh: "围绕跨学科背景、联合国体系实习与语言能力，讨论青年如何在气候与可持续发展领域建立个人「不可替代性」，探索全球职业路径。",
          en: "Interview exploring how young professionals build personal 'irreplaceability' through interdisciplinary backgrounds, UN internships, and language skills — navigating global careers in climate and sustainable development.",
          fr: "Entretien sur la construction de l'irremplaçabilité personnelle à travers un parcours interdisciplinaire, des stages aux Nations Unies et des compétences linguistiques, pour une carrière mondiale en développement durable.",
        },
        href: "https://mp.weixin.qq.com/s/c5kjk3MhVmSWCSjaWm97uw",
      },
    ],

    additional: [
      {
        category: "additional", slug: "care-conference",
        org:  { zh: "CARE 学术会议", en: "CARE Climate Conference", fr: "Conférence CARE sur le Climat" },
        role: { zh: "研究展示者", en: "Research Presenter", fr: "Présentateur de Recherche" },
        period: { start: "2024-01", end: "2024-06" },
        location: { zh: "国际（线上/线下）", en: "International", fr: "International" },
        bullets: [
          { zh: "在 CARE 学术会议展示气候适应融资与 SIDS 脆弱性匹配度研究，评估 GCF 项目对气候风险的响应有效性", en: "Presented research on climate adaptation finance and SIDS vulnerability alignment at the CARE conference — assessing GCF project effectiveness in addressing climate risks", fr: "Présentation d'une recherche sur le financement de l'adaptation climatique et l'alignement avec la vulnérabilité des PEID lors de la conférence CARE" },
          { zh: "构建 30 个 GCF 项目 × 18 个 SIDS 国家数据库，与 ND-GAIN 脆弱性指数匹配分析，识别 54% 适应项目高度匹配气候风险", en: "Built a 30 GCF projects × 18 SIDS countries database; matched against ND-GAIN vulnerability index — identifying 54% alignment rate for adaptation projects vs 20% for mitigation", fr: "Base de données de 30 projets GCF × 18 PEID analysée avec l'indice ND-GAIN — taux d'alignement de 54% pour les projets d'adaptation" },
          { zh: "建立 TDS / NBS / CBA 三类适应策略分类框架，文本分析识别 24 个项目适应路径，提出混合适应模型", en: "Developed a TDS/NBS/CBA tri-category adaptation strategy framework; identified 24 project adaptation pathways through text analysis and proposed a hybrid adaptation model", fr: "Cadre analytique TDS/NBS/CBA — identification de 24 voies d'adaptation et modèle d'adaptation hybride" },
        ],
        tags: [
          { zh: "气候融资研究", en: "Climate Finance Research", fr: "Recherche Finance Climatique" },
          { zh: "GCF 项目评估",  en: "GCF Project Assessment",   fr: "Évaluation Projets FVC" },
          { zh: "数据分析",       en: "Data Analysis",            fr: "Analyse de Données" },
        ],
        context: {
          zh: "在 CARE 学术会议中独立完成并展示关于绿色气候基金（GCF）项目与小岛屿发展中国家（SIDS）气候脆弱性匹配度的研究，评估气候融资配置的有效性与结构性问题。",
          en: "Independently completed and presented research at the CARE Climate Conference on the alignment between Green Climate Fund (GCF) projects and climate vulnerability in Small Island Developing States (SIDS) — assessing the effectiveness and structural gaps in climate finance allocation.",
          fr: "Recherche indépendante présentée à la conférence CARE sur l'alignement entre les projets du Fonds Vert pour le Climat (FVC) et la vulnérabilité climatique des Petits États Insulaires en Développement (PEID).",
        },
        impact: {
          zh: "研究发现 54% 适应项目与核心气候风险高度匹配，而减缓项目仅 20%，揭示气候资金配置的结构性失衡。基于文本分析识别 24 个项目适应路径，提出综合 Technology-Driven Solutions、Nature-Based Solutions 与 Community-Based Adaptation 的混合适应模型，指出其在长期气候韧性建设中最具有效性。",
          en: "Findings revealed a structural imbalance in climate finance: 54% of adaptation projects aligned with core climate risks vs only 20% of mitigation projects. Text analysis of 24 projects identified three adaptation pathways; proposed a hybrid model integrating Technology-Driven Solutions, Nature-Based Solutions, and Community-Based Adaptation as the most effective long-term resilience strategy.",
          fr: "Résultats révélant un déséquilibre structurel : 54% des projets d'adaptation alignés avec les risques climatiques clés contre 20% des projets d'atténuation. Modèle hybride intégrant TDS, NBS et CBA proposé comme stratégie de résilience à long terme la plus efficace.",
        },
        deliverables: [
          { zh: "GCF 项目 × SIDS 国家气候适应数据库（30 × 18）", en: "GCF Projects × SIDS Countries Climate Adaptation Database (30 × 18)", fr: "Base de données Projets FVC × PEID (30 × 18)" },
          { zh: "ND-GAIN 脆弱性指数匹配分析报告", en: "ND-GAIN Vulnerability Index Alignment Analysis Report", fr: "Rapport d'analyse d'alignement avec l'indice ND-GAIN" },
          { zh: "TDS / NBS / CBA 适应策略分类框架文档", en: "TDS/NBS/CBA Adaptation Strategy Classification Framework", fr: "Cadre de classification des stratégies d'adaptation TDS/NBS/CBA" },
          { zh: "CARE 学术会议研究展示材料", en: "CARE Conference Research Presentation Materials", fr: "Supports de présentation à la conférence CARE" },
        ],
        skills: [
          { zh: "气候融资分析与评估", en: "Climate Finance Analysis & Assessment",       fr: "Analyse & Évaluation Finance Climatique" },
          { zh: "政策文本分析与数据建模", en: "Policy Text Analysis & Data Modelling",   fr: "Analyse de textes politiques & modélisation" },
          { zh: "学术研究与会议展示",    en: "Academic Research & Conference Presentation", fr: "Recherche académique & présentation en conférence" },
        ],
        gallery: ["/images/care-climate-poster.png"],
      },
      {
        category: "campus", slug: "nankai-media",
        org:  { zh: "南开大学学生宣传中心", en: "Nankai University Student Publicity Centre", fr: "Centre de Communication Étudiante — Université Nankai" },
        role: { zh: "媒体与传播负责人", en: "Head of Media & Communications", fr: "Responsable Médias & Communication" },
        period: { start: "2019-09", end: "2022-06" },
        location: { zh: "中国 天津", en: "Tianjin, China", fr: "Tianjin, Chine" },
        bullets: [
          { zh: "负责校园媒体平台内容编辑与发布，策划新闻、学术论坛与人物专访，累计产出 80+ 篇报道与专题文章", en: "Managed campus media content editing and publishing; planned news, academic forums, and profile interviews — producing 80+ articles and features", fr: "Gestion des contenus médias, planification d'actualités et d'entretiens — production de 80+ articles et reportages" },
          { zh: "为校园论坛、文化节与国际交流活动设计多平台传播方案，单场活动触达 3000+ 名学生与校友", en: "Designed multi-platform communication strategies for campus forums, cultural festivals, and international exchange events — reaching 3,000+ students and alumni per event", fr: "Stratégies de communication multi-plateforme pour forums et événements — portée de 3 000+ étudiants par événement" },
          { zh: "统筹 10+ 名编辑、摄影与新媒体成员协作，建立报道流程与内容审核机制，内容发布效率提升约 30%", en: "Coordinated 10+ editors, photographers, and social media members; established reporting workflows and content review processes — improving publishing efficiency by ~30%", fr: "Coordination de 10+ membres, mise en place de flux de travail et mécanismes de révision — efficacité de publication améliorée de ~30%" },
        ],
        tags: [
          { zh: "内容运营", en: "Content Operations", fr: "Gestion de contenus" },
          { zh: "团队管理", en: "Team Management",    fr: "Management d'équipe" },
          { zh: "品牌传播", en: "Brand Communications", fr: "Communication de marque" },
        ],
        context: {
          zh: "在本科期间负责校园媒体传播体系建设与活动品牌传播，带领团队完成校园新闻内容生产与大型活动宣传项目，积累内容运营与团队管理经验。",
          en: "During undergraduate studies, led the campus media communication system and activity brand promotion — managing content production, large-scale event promotion, and building content operations and team management experience.",
          fr: "Pendant la licence, direction du système de communication médias du campus et de la promotion d'événements — gestion de la production de contenus et de la promotion de grands événements.",
        },
        impact: {
          zh: "多篇活动报道被学校官方渠道转载，累计阅读量 2 万+，显著提升校园活动传播影响力。",
          en: "Multiple event reports were reprinted by official university channels, reaching a cumulative readership of 20,000+, significantly boosting campus event visibility.",
          fr: "Plusieurs reportages republiés par les canaux officiels de l'université, avec une audience cumulée de 20 000+, renforçant considérablement la visibilité des événements du campus.",
        },
        deliverables: [
          { zh: "80+ 篇校园新闻与专题报道", en: "80+ campus news articles and feature pieces",        fr: "80+ articles d'actualité et reportages" },
          { zh: "多场大型活动传播方案与宣传素材", en: "Multi-platform promotion plans and materials for large-scale events", fr: "Plans de communication et supports pour grands événements" },
          { zh: "内容发布流程与审核机制文档", en: "Content publishing workflow and review process documentation", fr: "Documentation des flux de publication et processus de révision" },
        ],
        skills: [
          { zh: "内容运营与媒体策划", en: "Content Operations & Media Planning", fr: "Gestion de contenus & planification médias" },
          { zh: "团队管理与流程优化",  en: "Team Management & Process Optimisation", fr: "Management d'équipe & optimisation" },
          { zh: "活动传播与品牌推广",  en: "Event Communications & Brand Promotion", fr: "Communication événementielle & promotion" },
        ],
        gallery: ["/images/campus-nankai-1.png", "/images/campus-nankai-2.png"],
      },
      {
        category: "campus", slug: "nankai-intl",
        org:  { zh: "南开大学国际交流与学术活动志愿者团队", en: "Nankai University — International Exchange & Academic Events Volunteer Team", fr: "Équipe de Volontaires — Échanges Internationaux & Événements Académiques, Université Nankai" },
        role: { zh: "项目协调成员", en: "Project Coordination Member", fr: "Membre Coordinateur de Projet" },
        period: { start: "2021-09", end: "2022-06" },
        location: { zh: "中国 天津", en: "Tianjin, China", fr: "Tianjin, Chine" },
        bullets: [
          { zh: "参与组织 10+ 场国际学术论坛与跨国交流活动，负责会议流程协调、嘉宾接待与现场支持", en: "Co-organised 10+ international academic forums and cross-cultural exchange events — coordinating event logistics, guest reception, and on-site support", fr: "Co-organisation de 10+ forums académiques internationaux — coordination logistique, accueil des intervenants et support sur site" },
          { zh: "协助准备中英文活动材料，与海外高校代表及国际学者沟通协调，累计服务 50+ 位国际嘉宾", en: "Prepared bilingual (Chinese/English) event materials and liaised with overseas university representatives and international scholars — serving 50+ international guests", fr: "Préparation de supports bilingues et coordination avec représentants d'universités étrangères et chercheurs internationaux — service de 50+ invités internationaux" },
          { zh: "参与英文演讲与国际主题辩论赛事组织，推动活动宣传与学生参与动员，吸引 100+ 名学生参与", en: "Supported organisation of English-language speech and international debate events — driving promotion and student mobilisation, attracting 100+ student participants", fr: "Support à l'organisation de concours d'éloquence et de débats internationaux — mobilisation de 100+ étudiants participants" },
        ],
        tags: [
          { zh: "国际会议组织", en: "International Event Coordination", fr: "Organisation d'Événements Internationaux" },
          { zh: "跨文化沟通",   en: "Cross-cultural Communication",    fr: "Communication Interculturelle" },
          { zh: "多语言支持",   en: "Multilingual Support",            fr: "Support Multilingue" },
        ],
        context: {
          zh: "在本科期间作为国际交流志愿者，参与南开大学国际学术活动的全流程组织与协调工作，积累了国际会务运营与跨文化沟通的实践经验。",
          en: "During undergraduate studies, served as an international exchange volunteer at Nankai University — gaining hands-on experience in international event operations and cross-cultural coordination across academic forums and bilateral exchange programmes.",
          fr: "Pendant la licence, bénévole dans les échanges internationaux de l'Université Nankai — expérience pratique en organisation d'événements académiques et coordination interculturelle.",
        },
        impact: {
          zh: "有效提升校园国际交流活动的组织效率与参与度，推动学生与国际学者之间的深度交流互动，建立跨文化沟通与国际会务执行的核心能力。",
          en: "Improved the organisational efficiency and participation of international exchange events on campus; fostered meaningful interactions between students and international scholars; built core competencies in cross-cultural communication and international event execution.",
          fr: "Amélioration de l'efficacité organisationnelle des événements d'échange internationaux ; renforcement des interactions entre étudiants et chercheurs internationaux ; développement de compétences en communication interculturelle.",
        },
        deliverables: [
          { zh: "10+ 场国际学术论坛活动协调记录", en: "Coordination records for 10+ international academic forum events", fr: "Dossiers de coordination pour 10+ forums académiques internationaux" },
          { zh: "中英双语活动材料与嘉宾沟通文档", en: "Bilingual (CN/EN) event materials and guest communication documents", fr: "Supports bilingues et documents de communication avec les intervenants" },
          { zh: "演讲赛与辩论赛组织支持材料", en: "Organisational support materials for speech and debate competitions", fr: "Supports pour concours d'éloquence et de débat" },
        ],
        skills: [
          { zh: "国际活动统筹与会务执行", en: "International Event Planning & Execution", fr: "Planification & Exécution d'Événements Internationaux" },
          { zh: "跨文化沟通与多语言支持",  en: "Cross-cultural Communication & Multilingual Support", fr: "Communication Interculturelle & Support Multilingue" },
          { zh: "学生动员与参与推广",       en: "Student Mobilisation & Engagement", fr: "Mobilisation & Engagement Étudiant" },
        ],
        gallery: ["/images/campus-intl-1.png", "/images/campus-intl-2.png", "/images/campus-intl-3.png"],
      },
    ],

    tools: [
      { category: { zh: "数据与分析", en: "Data & Analysis", fr: "Données & Analyse" }, iconKey: "sheet", items: [{ zh: "Excel / Sheets", en: "Excel / Sheets", fr: "Excel / Sheets" }, { zh: "Python", en: "Python", fr: "Python" }, { zh: "STATA", en: "STATA", fr: "STATA" }, { zh: "Power BI", en: "Power BI", fr: "Power BI" }] },
      { category: { zh: "研究与写作", en: "Research & Writing", fr: "Recherche & Rédaction" }, iconKey: "doc", items: [{ zh: "政策分析", en: "Policy Analysis", fr: "Analyse de Politique" }, { zh: "文献综述", en: "Literature Review", fr: "Revue de Littérature" }, { zh: "报告写作", en: "Report Writing", fr: "Rédaction de Rapports" }] },
      { category: { zh: "语言", en: "Languages", fr: "Langues" }, iconKey: "globe", items: [{ zh: "中文（母语）", en: "Chinese (Native)", fr: "Chinois (Natif)" }, { zh: "英语（流利）", en: "English (Fluent)", fr: "Anglais (Courant)" }, { zh: "法语（专业）", en: "French (Professional)", fr: "Français (Professionnel)" }] },
    ],

    profile: {
      paragraphs: [
        { zh: "我是一位专注于新能源与气候科技企业全球市场进入战略的国际业务专业人士。在联合国机构、OECD及欧洲咨询公司的实践经历使我建立了跨文化沟通与结构化执行能力。", en: "International business professional focused on global market entry strategy for CleanTech and climate technology companies. Experience at UN agencies, OECD, and European consulting has built cross-cultural communication and structured execution skills.", fr: "Professionnelle spécialisée dans la stratégie d'entrée sur les marchés mondiaux pour les entreprises de technologies propres." },
        { zh: "我正寻找能够结合全球视野与商业执行力的战略与业务拓展机会，推动科技企业在国际市场的可持续增长。", en: "Seeking strategic and business development roles where global perspective meets execution — driving sustainable international growth for technology companies.", fr: "À la recherche de rôles en développement commercial et stratégie internationale pour favoriser la croissance internationale." },
      ],
      focus: [
        { zh: "新能源出海战略与全球市场进入", en: "CleanTech Global Market Entry Strategy",     fr: "Stratégie d'Entrée Mondiale — Technologies Propres" },
        { zh: "国际商务拓展与战略合作伙伴开发", en: "International BD & Strategic Partnerships", fr: "Développement Commercial International" },
        { zh: "ESG 合规与欧盟监管分析",         en: "ESG Compliance & EU Regulatory Analysis",  fr: "Conformité ESG & Analyse Réglementaire UE" },
      ],
    },

    education: [
      {
        id: "sciences-po",
        logo: "/images/logos/sciences-po.svg",
        school:   { zh: "巴黎政治学院（Sciences Po）", en: "Sciences Po Paris", fr: "Sciences Po Paris" },
        degree:   { zh: "环境政策硕士",                 en: "Master of Environmental Policy", fr: "Master de Politique Environnementale" },
        program:  { zh: "欧盟气候政策与环境治理",        en: "EU Climate Policy & Environmental Governance", fr: "Politique Climatique UE & Gouvernance Environnementale" },
        location: { zh: "法国 巴黎", en: "Paris, France", fr: "Paris, France" },
        startDate: "2023-09", endDate: "2025-12",
        highlights: {
          zh: [
            "国家公派全额奖学金（CSC），全球遴选录取，用于海外研究生学习。",
            "核心课程：环境经济学、气候科学与气候干预、环境治理、计量经济学。",
            "聚焦欧盟气候政策与全球环境治理，结合在 UNEP、OECD 及 UNDP 等国际机构的实践经历。",
          ],
          en: [
            "Chinese Government Full Scholarship (CSC), awarded for overseas graduate study.",
            "Core coursework: Environmental Economics, Climate Science & Intervention, Environmental Governance, and Econometrics.",
            "Focused on EU climate policy and global environmental governance, combined with practical experience at international organisations including UNEP, OECD, and UNDP.",
          ],
          fr: [
            "Bourse du gouvernement chinois (CSC), attribuée pour études supérieures à l'étranger.",
            "Cours principaux : Économie de l'environnement, Sciences du climat & Intervention, Gouvernance environnementale, Économétrie.",
            "Spécialisation en politique climatique UE et gouvernance environnementale mondiale, combinée à des expériences à l'UNEP, l'OCDE et le PNUD.",
          ],
        },
        focusTags: {
          zh: ["欧盟气候政策", "环境治理", "计量经济学", "CSC 奖学金"],
          en: ["EU Climate Policy", "Environmental Governance", "Econometrics", "CSC Scholarship"],
          fr: ["Politique Climatique UE", "Gouvernance Environnementale", "Économétrie", "Bourse CSC"],
        },
        credentials: [],
      },
      {
        id: "uc-berkeley",
        logo: "/images/logos/uc-berkeley.svg",
        school:   { zh: "加州大学伯克利分校 + 哈佛大学", en: "UC Berkeley + Harvard University", fr: "UC Berkeley + Université Harvard" },
        degree:   { zh: "交换项目",                       en: "Exchange Programme",               fr: "Programme d'Échange" },
        program:  { zh: "全球环境治理与国际政策",           en: "Global Environmental Governance & International Policy", fr: "Gouvernance Environnementale Mondiale & Politique Internationale" },
        location: { zh: "美国", en: "United States", fr: "États-Unis" },
        startDate: "2022-01", endDate: "2022-12",
        highlights: {
          zh: [
            "GPA：3.9/4.0",
            "交换项目聚焦全球环境治理与国际政策框架，构建跨学科政策视野。",
            "强化全球环境治理、国际组织运作与跨文化决策能力。",
          ],
          en: [
            "GPA: 3.9/4.0",
            "Exchange programme focusing on global environmental governance and international policy frameworks.",
            "Built interdisciplinary understanding of environmental policy, international institutions, and cross-cultural decision-making.",
          ],
          fr: [
            "GPA : 3,9/4,0",
            "Programme d'échange axé sur la gouvernance environnementale mondiale et les politiques internationales.",
            "Développement d'une compréhension interdisciplinaire de la politique environnementale, des institutions internationales et de la prise de décision interculturelle.",
          ],
        },
        focusTags: {
          zh: ["全球环境治理", "国际组织", "跨文化决策", "政策研究"],
          en: ["Global Environmental Governance", "International Organisations", "Cross-cultural Decision-making", "Policy Research"],
          fr: ["Gouvernance Environnementale Mondiale", "Organisations Internationales", "Décision Interculturelle", "Recherche Politique"],
        },
        credentials: [],
      },
      {
        id: "nankai",
        logo: "/images/logos/nankai.svg",
        school:   { zh: "南开大学",              en: "Nankai University",                        fr: "Université Nankai" },
        degree:   { zh: "政治学与公共管理本科",   en: "Bachelor of Political Science & Public Administration", fr: "Licence Science Politique & Administration Publique" },
        program:  { zh: "985 / 双一流 · 辅修逻辑学", en: "985 / Double First-Class · Minor in Logic", fr: "985 / Double Première Classe · Mineure Logique" },
        location: { zh: "中国 天津", en: "Tianjin, China", fr: "Tianjin, Chine" },
        startDate: "2019-09", endDate: "2023-06",
        highlights: {
          zh: [
            "专业 GPA：3.7/4.0 · 辅修逻辑学",
            "荣誉毕业（Summa Cum Laude）。",
            "研究方向：公共行动、气候治理、生物多样性政策与可持续发展目标（SDGs）。",
          ],
          en: [
            "Major GPA: 3.7/4.0 · Minor in Logic",
            "Graduated with Highest Distinction (Summa Cum Laude).",
            "Research focus on public action, climate governance, biodiversity policy, and Sustainable Development Goals (SDGs).",
          ],
          fr: [
            "GPA majeure : 3,7/4,0 · Mineure Logique",
            "Diplômée avec les félicitations du jury (Summa Cum Laude).",
            "Recherche sur l'action publique, la gouvernance climatique, la biodiversité et les Objectifs de Développement Durable (ODD).",
          ],
        },
        focusTags: {
          zh: ["政治学", "公共政策", "气候治理", "可持续发展"],
          en: ["Political Science", "Public Policy", "Climate Governance", "Sustainable Development"],
          fr: ["Science Politique", "Politiques Publiques", "Gouvernance Climatique", "Développement Durable"],
        },
        credentials: [],
      },
    ],
    scholarshipsAwards: [
      {
        id: "csc-international-reserve",
        title: {
          zh: "国际组织后备人才奖学金（CSC）",
          en: "International Organisations Reserve Talent Scholarship (CSC)",
          fr: "Bourse « Réserve de talents pour les organisations internationales » (CSC)",
        },
        level: { zh: "国家级", en: "National", fr: "National" },
        period: { zh: "2023年6月", en: "June 2023", fr: "juin 2023" },
        paragraphs: [
          {
            zh: "由中国国家留学基金管理委员会（CSC）设立，面向全国范围内选拔具备国际视野与发展潜力的优秀人才，重点支持其赴海外深造并参与国际组织相关领域的发展。",
            en: "Established by the China Scholarship Council (CSC), this programme selects outstanding candidates nationwide with international vision and development potential, with a focus on supporting overseas study and careers linked to international organisations.",
            fr: "Créée par le China Scholarship Council (CSC), cette bourse sélectionne des candidat·es d'exception à l'échelle nationale, doté·es d'une vision internationale et d'un fort potentiel, priorisant les études à l'étranger et les parcours liés aux organisations internationales.",
          },
          {
            zh: "该项目竞争激烈，代表国家层面对候选人学术能力、综合素质及国际发展潜力的认可。",
            en: "Highly competitive, it reflects national-level recognition of candidates' academic ability, overall profile, and potential for international careers.",
            fr: "Programme très sélectif, il traduit une reconnaissance au niveau national de l'excellence académique, du profil général et du potentiel de carrière internationale.",
          },
        ],
        href: "https://origin-www.csc.edu.cn/article/2497",
        linkLabel: { zh: "官方信息", en: "Official information", fr: "Informations officielles" },
      },
      {
        id: "nankai-student-service",
        title: {
          zh: "南开大学周恩来政府管理学院学生服务奖学金",
          en: "Zhou Enlai School of Government Student Service Scholarship (Nankai University)",
          fr: "Bourse « Service étudiant » — École Zhou Enlai de gouvernement (Université Nankai)",
        },
        level: { zh: "学院级", en: "School (college) level", fr: "Niveau faculté / école" },
        period: { zh: "2020年", en: "2020", fr: "2020" },
        paragraphs: [
          {
            zh: "由南开大学周恩来政府管理学院设立，授予在学术表现、公共参与及学生服务等方面表现突出的优秀学生。",
            en: "Awarded by the Zhou Enlai School of Government at Nankai University to outstanding students for academic performance, public engagement, and student service.",
            fr: "Attribuée par l'École Zhou Enlai de gouvernement de l'université Nankai aux étudiant·es excellents en résultats académiques, engagement citoyen et vie associative.",
          },
          {
            zh: "体现了在校期间综合能力与责任意识的认可。",
            en: "It recognises well-rounded capability and a strong sense of responsibility during undergraduate studies.",
            fr: "Elle valorise les compétences transversales et le sens des responsabilités durant les études.",
          },
        ],
      },
    ],


    // ── Value Bridge ──────────────────────────────────────────────────────────
    valueBridge: [
      {
        iconKey: "briefcase",
        background: {
          zh: "跨国项目协同能力",
          en: "Cross-border Project Coordination",
          fr: "Coordination de Projets Transfrontaliers",
        },
        value: {
          zh: "擅长多利益相关方协作与复杂项目交付，可快速适配企业级项目管理、跨部门协同与客户落地需求。",
          en: "Skilled in multi-stakeholder coordination and complex deliverable management — readily transferable to corporate project management, cross-functional collaboration, and client delivery.",
          fr: "Maîtrise de la coordination multi-parties prenantes et de la gestion de livrables complexes — directement applicable au pilotage de projets, à la collaboration transversale et à la livraison client.",
        },
        description: {
          zh: "",
          en: "",
          fr: "",
        },
      },
      {
        iconKey: "globe",
        background: {
          zh: "全球市场与跨文化执行力",
          en: "Global Market & Cross-cultural Execution",
          fr: "Marchés Mondiaux & Exécution Interculturelle",
        },
        value: {
          zh: "深耕欧洲与亚太双区域，具备多语言工作能力，能将宏观市场判断转化为可落地的业务拓展路径。",
          en: "Grounded in both EU and Asia-Pacific contexts with trilingual capability — translating macro market insight into concrete business development and market entry pathways.",
          fr: "Ancrage en Europe et en Asie-Pacifique avec compétences trilingues — transformation des analyses macro-marché en voies concrètes de développement commercial.",
        },
        description: {
          zh: "",
          en: "",
          fr: "",
        },
      },
      {
        iconKey: "leaf",
        background: {
          zh: "气候合规与战略转化能力",
          en: "Climate Compliance & Strategy Translation",
          fr: "Conformité Climatique & Traduction Stratégique",
        },
        value: {
          zh: "熟悉 NDC、CBAM、EU ETS 等全球监管体系，可将政策逻辑转化为企业可执行的 ESG 与出海战略。",
          en: "Fluent in NDC, CBAM, and EU ETS regulatory frameworks — converting policy logic into actionable ESG and international expansion strategies for corporate clients.",
          fr: "Maîtrise des cadres NDC, MCAF et EU ETS — conversion de la logique réglementaire en stratégies ESG et d'expansion internationale opérationnelles.",
        },
        description: {
          zh: "",
          en: "",
          fr: "",
        },
      },
    ],

    // ── Working Style ─────────────────────────────────────────────────────────
    workingStyle: [
      {
        iconKey: "spark",
        principle:   { zh: "框架先行", en: "Structure First", fr: "Cadre avant tout" },
        description: {
          zh: "以结构化思维搭建体系，再推进落地，保证效率与一致性。",
          en: "Build the framework first, then execute — ensuring efficiency and consistency from the start.",
          fr: "Construire d'abord le cadre, puis exécuter — garantissant efficacité et cohérence dès le départ.",
        },
      },
      {
        iconKey: "globe",
        principle:   { zh: "本地适配", en: "Local Adaptation", fr: "Adaptation locale" },
        description: {
          zh: "结合区域监管与文化差异做定制化落地，不简单照搬。",
          en: "Tailor execution to regional regulations and cultural context — never a copy-paste approach.",
          fr: "Adapter l'exécution aux réglementations locales et au contexte culturel — jamais d'approche copier-coller.",
        },
      },
      {
        iconKey: "briefcase",
        principle:   { zh: "数据驱动", en: "Data-Driven", fr: "Fondé sur les données" },
        description: {
          zh: "用量化分析支撑判断，让战略与合规决策更扎实。",
          en: "Back every decision with quantitative analysis — making strategy and compliance choices more robust.",
          fr: "Appuyer chaque décision sur une analyse quantitative — pour des choix stratégiques et de conformité plus solides.",
        },
      },
      {
        iconKey: "leaf",
        principle:   { zh: "跨界协同", en: "Cross-boundary Collaboration", fr: "Collaboration transversale" },
        description: {
          zh: "联动跨国、跨部门、跨机构资源，高效推进复杂项目。",
          en: "Connect cross-national, cross-functional, and cross-institutional resources to drive complex projects forward.",
          fr: "Mobiliser des ressources transnationales, transfonctionnelles et interinstitutionnelles pour faire avancer des projets complexes.",
        },
      },
    ],

    // ── Open To ───────────────────────────────────────────────────────────────
    openTo: {
      roles: [
        { zh: "国际商务拓展 BD",        en: "International Business Development",    fr: "Développement commercial international" },
        { zh: "战略咨询（Entry / Asso.）", en: "Strategy Consulting (Entry/Associate)", fr: "Conseil en stratégie (junior/associate)" },
        { zh: "ESG 与可持续发展顾问",   en: "ESG & Sustainability Advisory",         fr: "Conseil ESG & développement durable" },
        { zh: "国际项目管理",           en: "International Project Management",      fr: "Gestion de projets internationaux" },
        { zh: "市场进入 & GTM 策略",    en: "Market Entry & GTM Strategy",           fr: "Stratégie d'entrée sur les marchés" },
        { zh: "合作伙伴关系开发",       en: "Partnerships & Alliance Development",   fr: "Développement de partenariats" },
      ],
      locations: ["Paris", "London", "Singapore", "Hong Kong", "Shanghai", "Remote / Global"],
      availability: {
        zh: "可入职时间：待填写",
        en: "Available from: TBC",
        fr: "Disponibilité : à préciser",
      },
      visaNote: {
        zh: "中国境内无需签证。其他地区需要工作许可支持（Visa Sponsorship）。",
        en: "No work authorization required for China. Requires visa sponsorship for all other locations.",
        fr: "Aucune autorisation requise pour la Chine. Visa de travail requis pour tous les autres pays.",
      },
    },

    contact: {
      emails:       ["qihui.yuan@undp.org", "yuanqihui0825@gmail.com"],
      linkedin:     "https://www.linkedin.com/in/qihuiyuan/",
      xiaohongshu:  "https://xhslink.com/m/835pA4eW4qX",
      wechat_qr:    "/images/qr-wechat.png",
      whatsapp_qr:  "/images/qr-whatsapp.png",
    },
    cv,
  };
}
