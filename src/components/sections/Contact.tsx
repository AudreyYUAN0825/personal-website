"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
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

const availabilitySub: Record<Locale, string> = {
  zh: "具体职能、地点及时间安排，欢迎直接联系交流。",
  en: "For role types, preferred locations, and availability — let's connect.",
  fr: "Pour les types de poste, les lieux souhaités et la disponibilité — contactez-moi.",
};

const xhsNote: Record<Locale, string> = {
  zh: "7.4 万赞藏 · 访问我的小红书主页",
  en: "7.4万 likes & collections · Visit my Xiaohongshu profile",
  fr: "7.4万 j'aimes & collections · Voir mon profil Xiaohongshu",
};

/* ── QR Popup ─────────────────────────────────────────────────────────── */
function QrPopup({
  src, label, color, onClose,
}: { src: string; label: string; color: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[260px] rounded-2xl border border-line bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-ink/40 transition hover:bg-line hover:text-ink"
          aria-label="Close"
        >
          ×
        </button>
        <p className="mb-4 text-center text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color }}>
          {label}
        </p>
        <div className="overflow-hidden rounded-xl border border-line">
          <Image
            src={src}
            alt={label}
            width={200}
            height={200}
            className="w-full"
            unoptimized
          />
        </div>
        <p className="mt-3 text-center text-[11px] text-ink/40">扫码添加 / Scan to add</p>
      </div>
    </div>
  );
}

/* ── Icons ────────────────────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function XiaohongshuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 4.5h2v1h-2v-1zm-4 0h2v1h-2v-1zm6.5 2.5H9v-1h6v1zm-1 5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.89-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.318 2.707c.537 0 .972.444.972.99a.98.98 0 0 1-.972.99.98.98 0 0 1-.972-.99c0-.546.436-.99.972-.99zm6.63 0c.537 0 .972.444.972.99a.98.98 0 0 1-.972.99.98.98 0 0 1-.972-.99c0-.546.436-.99.972-.99z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

/* ── Main Component ───────────────────────────────────────────────────── */
export function Contact({ locale, ui, cv, contact }: ContactProps) {
  const s = ui.sections.contact;
  const cvEntry = cv[locale];
  const [qrOpen, setQrOpen] = useState<"wechat" | "whatsapp" | null>(null);

  return (
    <>
      <SectionHeader title={s.title} description={s.description} />

      <Card className="p-6 md:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* ── Left: contact details ── */}
          <div className="flex flex-col gap-5">

            {/* Email(s) */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/35">Email</p>
              {contact.emails?.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-[13px] text-ink/65 transition hover:text-accent"
                >
                  <EmailIcon />
                  {email}
                </a>
              ))}
            </div>

            {/* Social icons row */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/35">Social</p>
              <div className="flex flex-wrap gap-2">

                {/* LinkedIn */}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="group flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-[12px] font-medium text-ink/60 shadow-sm transition hover:border-[#0077B5]/30 hover:bg-[#0077B5]/[0.05] hover:text-[#0077B5]"
                  >
                    <span className="text-[#0077B5]"><LinkedInIcon /></span>
                    LinkedIn
                  </a>
                )}

                {/* Xiaohongshu */}
                {contact.xiaohongshu && (
                  <a
                    href={contact.xiaohongshu}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={xhsNote[locale]}
                    className="group flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-[12px] font-medium text-ink/60 shadow-sm transition hover:border-[#FF2442]/30 hover:bg-[#FF2442]/[0.05] hover:text-[#FF2442]"
                  >
                    <span className="text-[#FF2442]"><XiaohongshuIcon /></span>
                    <span>小红书</span>
                    <span className="rounded-full bg-[#FF2442]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#FF2442]">7.4万</span>
                  </a>
                )}

                {/* WeChat */}
                {contact.wechat_qr && (
                  <button
                    onClick={() => setQrOpen("wechat")}
                    title="WeChat — 扫码添加"
                    className="group flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-[12px] font-medium text-ink/60 shadow-sm transition hover:border-[#07C160]/30 hover:bg-[#07C160]/[0.05] hover:text-[#07C160]"
                  >
                    <span className="text-[#07C160]"><WeChatIcon /></span>
                    微信
                  </button>
                )}

                {/* WhatsApp */}
                {contact.whatsapp_qr && (
                  <button
                    onClick={() => setQrOpen("whatsapp")}
                    title="WhatsApp — Scan QR"
                    className="group flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-[12px] font-medium text-ink/60 shadow-sm transition hover:border-[#25D366]/30 hover:bg-[#25D366]/[0.05] hover:text-[#25D366]"
                  >
                    <span className="text-[#25D366]"><WhatsAppIcon /></span>
                    WhatsApp
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── Right: availability + CV download ── */}
          <div className="flex shrink-0 flex-col items-end gap-4 md:max-w-[260px]">
            {/* Availability signal */}
            <div className="flex w-full items-start gap-2.5 rounded-xl border border-moss/15 bg-moss/[0.05] px-4 py-3.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-moss" />
              <div>
                <p className="text-[12px] font-semibold leading-snug text-moss/85">{availabilityNote[locale]}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-ink/50">{availabilitySub[locale]}</p>
              </div>
            </div>
            {/* CV download */}
            <a
              href={cvEntry.href}
              download={cvEntry.downloadName}
              className="inline-flex w-full items-center justify-center rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper shadow-soft transition-opacity hover:opacity-80"
            >
              {cvEntry.label}
            </a>
          </div>
        </div>
      </Card>

      {/* QR Popups */}
      {qrOpen === "wechat" && contact.wechat_qr && (
        <QrPopup
          src={contact.wechat_qr}
          label="微信 WeChat"
          color="#07C160"
          onClose={() => setQrOpen(null)}
        />
      )}
      {qrOpen === "whatsapp" && contact.whatsapp_qr && (
        <QrPopup
          src={contact.whatsapp_qr}
          label="WhatsApp"
          color="#25D366"
          onClose={() => setQrOpen(null)}
        />
      )}
    </>
  );
}
