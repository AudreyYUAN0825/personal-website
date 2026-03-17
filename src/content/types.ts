export type Locale = "zh" | "en" | "fr";
export type LocalizedText = { zh: string; en: string; fr: string };

// ── Deep-dive shared types ─────────────────────────────────────────────────
export type Artifact    = { label: LocalizedText; href: string };
export type ModalMetric = { label: LocalizedText; value: string };

// ── Existing scalar types ──────────────────────────────────────────────────
export type Capability = { iconKey: string; label: LocalizedText; description: LocalizedText };
export type Metric     = { value: string; label: LocalizedText; context: LocalizedText; iconKey: string };

export type ExperienceCategory = "key" | "additional" | "campus";

export type Experience = {
  category:  ExperienceCategory;
  slug:      string;
  org:       LocalizedText;
  logo?:     string;  // /images/logos/xxx.png
  logoSize?: "default" | "small";  // small = 80%
  role:      LocalizedText;
  period:    { start: string; end: string | null };
  location:  LocalizedText;
  bullets:   LocalizedText[];
  tags:      LocalizedText[];
  // ── Modal deep-dive (optional) ───────────────────────────────────────────
  context?:     LocalizedText;
  problem?:     LocalizedText;
  approach?:    LocalizedText;
  impact?:      LocalizedText;
  deliverables?: LocalizedText[];
  skills?:       LocalizedText[];
  artifacts?:    Artifact[];
  gallery?:      string[];
  metrics?:      ModalMetric[];
};

export type Project = {
  slug:     string;
  tags:     LocalizedText[];
  title:    LocalizedText;
  problem:  LocalizedText;
  approach: LocalizedText;
  result:   LocalizedText;
  /** 卡片封面图片路径，2:1 比例推荐（如 1200×600） */
  coverImage?: string;
  // ── Modal deep-dive (optional) ───────────────────────────────────────────
  context?:      LocalizedText;
  skills?:       LocalizedText[];
  deliverables?: LocalizedText[];
  artifacts?:    Artifact[];
  gallery?:      string[];
  metrics?:      ModalMetric[];
};

export type PublicationType = "Article" | "Report" | "Poster" | "Policy Brief" | "Data Paper";
export type PublicationItem = {
  type:      PublicationType;
  featured?: boolean;
  title:     LocalizedText;
  outlet:    LocalizedText;
  year:      number;
  summary:   LocalizedText;
  href?:     string;
  /** Sub-papers collapsed under this entry (expandable group) */
  group?:    Omit<PublicationItem, "group">[];
};
export type MediaType = "Interview" | "Feature" | "News" | "Podcast";
export type MediaItem = { type: MediaType; title: LocalizedText; publisher: LocalizedText; year: number; context: LocalizedText; href?: string };
export type ToolItem  = { category: LocalizedText; items: LocalizedText[]; iconKey: string };

// ── Education ──────────────────────────────────────────────────────────────
export type CredentialLink = {
  kind:  "diploma" | "transcript";
  label: LocalizedText;
  href:  string;
};

export type EducationEntry = {
  id:          string;
  school:      LocalizedText;
  logo?:       string;  // /images/logos/xxx.png
  degree:      LocalizedText;
  program?:    LocalizedText;
  location:    LocalizedText;
  startDate:   string;         // YYYY-MM
  endDate:     string;         // YYYY-MM | "present"
  highlights?: { zh: string[]; en: string[]; fr: string[] };
  focusTags?:  { zh: string[]; en: string[]; fr: string[] };
  credentials: CredentialLink[];
};

// ── Value Bridge ───────────────────────────────────────────────────────────
export type ValueBridgeItem = {
  iconKey:    string;
  background: LocalizedText;   // "My background" short label
  value:      LocalizedText;   // "Business value" short label
  description: LocalizedText;  // 1-2 sentence explanation
};

// ── Working Style ──────────────────────────────────────────────────────────
export type WorkingStyleItem = {
  iconKey:     string;
  principle:   LocalizedText;  // Short heading
  description: LocalizedText;  // 1-2 sentences
};

// ── Open To ────────────────────────────────────────────────────────────────
export type OpenToEntry = {
  roles:        LocalizedText[];  // Role types
  locations:    string[];         // Location names (locale-agnostic)
  availability: LocalizedText;    // When available
  visaNote:     LocalizedText;    // Work authorisation info
};

export type UiStrings = {
  nav: { capabilities: string; experiences: string; education: string; projects: string; profile: string; contact: string };
  hero: {
    kicker:            string;
    name:              string;
    role:              string;
    tagline:           string;
    ctaPrimary:        string;
    ctaSecondary:      string;
    snapshotLanguages: string;
    snapshotMarkets:   string;
    snapshotFocus:     string;
    snapshotExp:       string;
  };
  sections: {
    metrics:      { title: string; description: string };
    valueBridge:  { title: string; description: string };
    capabilities: { title: string; description: string };
    experiences:  { title: string; description: string };
    projects:     { title: string; description: string };
    publications: { title: string; description: string };
    media:        { title: string; description: string };
    additional:   { title: string; description: string };
    tools:        { title: string; description: string };
    profile:      { title: string; description: string };
    workingStyle: { title: string; description: string };
    openTo:       { title: string; description: string };
    contact:      { title: string; description: string };
    education:    { title: string; description: string };
  };
  labels: {
    role: string; location: string; impact: string; skills: string;
    problem: string; approach: string; result: string;
    context: string; deliverables: string; artifacts: string;
    viewDetails: string; close: string;
    downloadCv: string; viewMore: string; viewLess: string;
    degree: string; period: string; credentials: string;
    background: string; businessValue: string;
    // ── STAR (Projects) ─────────────────────────────────────────────────────
    situation: string;       // S — background context
    task: string;            // T — specific challenge / objective
    action: string;          // A — what I did (methods, steps)
    demonstrates: string;    // "What this demonstrates" capability block
    // ── Experience job-record format ─────────────────────────────────────────
    roleOverview: string;    // Brief description of what this position was
    responsibilities: string; // What I was accountable for (bullets)
    contributions: string;   // Key activities & specific work done
    achievements: string;    // Quantified outcomes (replaces impact label)
  };
  cv: { label: string; href: string };
};

export type CvEntry = { label: string; href: string; downloadName: string };
export type CvMap = { zh: CvEntry; en: CvEntry; fr: CvEntry };

export type HomeContent = {
  ui:           UiStrings;
  hero: {
    name:           LocalizedText;
    role:           LocalizedText;
    subtitle:       LocalizedText;  // 副标题 22–26px
    description:   LocalizedText;   // 说明行 16–18px
    tagline:        LocalizedText;
    portrait:       { src: string; alt: LocalizedText };
    snapshot:       { languages: LocalizedText; markets: LocalizedText; focus: LocalizedText; exp: LocalizedText };
    specialtyChips: LocalizedText[];
  };
  metrics:      Metric[];
  valueBridge:  ValueBridgeItem[];
  capabilities: Capability[];
  experiences:  Experience[];
  projects:     Project[];
  publications: PublicationItem[];
  media:        MediaItem[];
  additional:   Experience[];
  tools:        ToolItem[];
  education:    EducationEntry[];
  profile:      { paragraphs: LocalizedText[]; focus: LocalizedText[] };
  workingStyle: WorkingStyleItem[];
  openTo:       OpenToEntry;
  contact:      {
    emails:       string[];
    linkedin?:    string;
    xiaohongshu?: string;
    wechat_qr?:   string;   // path to QR image, e.g. /images/qr-wechat.png
    whatsapp_qr?: string;   // path to QR image, e.g. /images/qr-whatsapp.png
  };
  cv:           CvMap;
};
