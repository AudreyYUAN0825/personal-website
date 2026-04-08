"use client";

import { useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, HomeContent, CvMap } from "@/content/types";

interface ContactProps {
  locale:  Locale;
  ui:      UiStrings;
  cv:      CvMap;
  contact: HomeContent["contact"];
}

const availabilityNote: Record<Locale, string> = {
  zh: "开放全球机会 · 可接受驻外与重定位",
  en: "Open to global opportunities · relocation welcome",
  fr: "Ouvert aux opportunités mondiales · mobilité bienvenue",
};
const closingLine: Record<Locale, string> = {
  zh: "期待共同探索在国际舞台上的合作机会。",
  en: "Let's explore where international vision meets execution.",
  fr: "Explorons ensemble de nouvelles opportunités à l'international.",
};
const emailInvite: Record<Locale, string> = {
  zh: "发送邮件 · 期待听到您的声音",
  en: "Drop me a line",
  fr: "Écrivez-moi",
};
const nameDisplay: Record<Locale, string> = {
  zh: "袁齐惠",
  en: "Qihui Yuan",
  fr: "Qihui Yuan",
};

/* ── QR Popup ───────────────────────────────────────────────────────────────── */
function QrPopup({ src, label, color, onClose }: {
  src: string; label: string; color: string; onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="ui-card relative w-full max-w-[260px] p-6" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink/40 transition hover:bg-line hover:text-ink"
          aria-label="Close">×</button>
        <p className="mb-4 text-center text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color }}>
          {label}
        </p>
        <div className="overflow-hidden rounded-2xl border border-line">
          <Image src={src} alt={label} width={200} height={200} className="w-full" unoptimized />
        </div>
        <p className="mt-3 text-center text-[11px] text-ink/38">扫码添加 / Scan to add</p>
      </div>
    </div>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────────────── */
const LinkedInIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const WeChatIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.89-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.318 2.707c.537 0 .972.444.972.99a.98.98 0 0 1-.972.99.98.98 0 0 1-.972-.99c0-.546.436-.99.972-.99zm6.63 0c.537 0 .972.444.972.99a.98.98 0 0 1-.972.99.98.98 0 0 1-.972-.99c0-.546.436-.99.972-.99z"/></svg>;
const WhatsAppIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>;
const EmailIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const XhsIcon     = () => <img src="/images/xhs-logo.png" alt="小红书" className="h-4 w-4 rounded-[3px] object-cover" />;

/* ── Main ───────────────────────────────────────────────────────────────────── */
export function Contact({ locale, ui, cv, contact }: ContactProps) {
  const cvEntry = cv[locale];
  const [qrOpen, setQrOpen] = useState<"wechat" | "whatsapp" | null>(null);
  const name = nameDisplay[locale];
  // Background art: first name only, split into chars for zh
  const bgChars: string[] = locale === "zh"
    ? name.slice(1).split("")   // "袁齐惠" → ["齐","惠"]
    : [name.split(" ")[0]];     // "Qihui Yuan" → ["Qihui"]

  return (
    <section id="contact" className="contact-ending snap-start">

      {/* ── Aurora blobs (same as hero) ── */}
      <div className="hero-aurora-wrap" aria-hidden>
        <div className="absolute -left-20 top-[5%] h-[600px] w-[600px] rounded-full" style={{
          background: "radial-gradient(circle,rgba(107,140,255,0.07) 0%,transparent 65%)",
          filter: "blur(56px)", animation: "aurora-drift 18s ease-in-out infinite 2s",
        }} />
        <div className="absolute -right-16 bottom-[10%] h-[500px] w-[500px] rounded-full" style={{
          background: "radial-gradient(circle,rgba(233,183,212,0.06) 0%,transparent 65%)",
          filter: "blur(60px)", animation: "aurora-drift 24s ease-in-out infinite 6s",
        }} />
      </div>

      {/* ── Background name watermark — first name only, flanks portrait ── */}
      <div className="hero-name-behind" aria-hidden>
        {bgChars.map((ch, i) => (
          <span key={i} className={bgChars.length > 1 ? "hero-name-behind__char" : "hero-name-behind__full"}>
            {ch}
          </span>
        ))}
      </div>

      {/* ── Grid: info left | photo right ── */}
      <div className="contact-ending__grid">

        {/* LEFT: Contact info */}
        <div className="contact-ending__info">

          {/* Availability pill — eyebrow */}
          <div className="contact-ending__availability">
            <span className="contact-ending__availability-dot" />
            <span>{availabilityNote[locale]}</span>
          </div>

          {/* ── HERO 1: Closing declaration — headline scale ── */}
          <p className="contact-ending__closing">{closingLine[locale]}</p>

          {/* ── HERO 2: Email CTA — most prominent clickable element ── */}
          {contact.emails && contact.emails.length > 0 && (
            <div className="contact-ending__email-hero">
              <p className="contact-ending__email-eyebrow">{emailInvite[locale]}</p>
              {contact.emails.map(email => (
                <a key={email} href={`mailto:${email}`} className="contact-ending__email-cta">
                  <span className="contact-ending__email-addr">{email}</span>
                  <span className="contact-ending__email-arrow" aria-hidden>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* ── Secondary: social + CV ── */}
          <div className="contact-ending__secondary">
            <div className="flex flex-wrap gap-2">
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-ending__social-btn" style={{"--btn-color":"#0077B5"} as React.CSSProperties}>
                  <LinkedInIcon /> LinkedIn
                </a>
              )}
              {contact.xiaohongshu && (
                <a href={contact.xiaohongshu} target="_blank" rel="noopener noreferrer" className="contact-ending__social-btn" style={{"--btn-color":"#FF2442"} as React.CSSProperties}>
                  <XhsIcon /> 小红书
                </a>
              )}
              {contact.wechat_qr && (
                <button onClick={() => setQrOpen("wechat")} className="contact-ending__social-btn" style={{"--btn-color":"#07C160"} as React.CSSProperties}>
                  <WeChatIcon /> 微信
                </button>
              )}
              {contact.whatsapp_qr && (
                <button onClick={() => setQrOpen("whatsapp")} className="contact-ending__social-btn" style={{"--btn-color":"#25D366"} as React.CSSProperties}>
                  <WhatsAppIcon /> WhatsApp
                </button>
              )}
              <a href={cvEntry.href} download={cvEntry.downloadName} className="contact-ending__social-btn">
                {cvEntry.label}
              </a>
            </div>
          </div>

          {/* Footer line */}
          <p className="contact-ending__footer">
            © {new Date().getFullYear()} Qihui Yuan · qihui-yuan.com
          </p>
        </div>

        {/* RIGHT: Outdoor photo — gallery portrait card */}
        <div className="contact-ending__portrait">
          <div className="contact-ending__photo-wrap">
            <img
              src="/images/contact-outdoor.png"
              alt={name}
              className="contact-ending__img"
              loading="lazy"
              decoding="async"
            />
            <div className="contact-ending__photo-fade" aria-hidden />
          </div>
        </div>

      </div>

      {/* QR Popups */}
      {qrOpen === "wechat"    && contact.wechat_qr    && <QrPopup src={contact.wechat_qr}    label="微信 WeChat" color="#07C160" onClose={() => setQrOpen(null)} />}
      {qrOpen === "whatsapp"  && contact.whatsapp_qr  && <QrPopup src={contact.whatsapp_qr}  label="WhatsApp"    color="#25D366" onClose={() => setQrOpen(null)} />}
    </section>
  );
}
