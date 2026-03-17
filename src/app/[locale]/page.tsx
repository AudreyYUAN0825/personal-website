import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getHomeContent } from "@/content/home";
import { NavbarPortal } from "@/components/header/NavbarPortal";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/sections/Hero";
import { ValueBridge } from "@/components/sections/ValueBridge";
import { Projects } from "@/components/sections/Projects";
import { Experiences } from "@/components/sections/Experiences";
import { Education } from "@/components/sections/Education";
import { Publications } from "@/components/sections/Publications";
import { Media } from "@/components/sections/Media";
import { AdditionalExperience } from "@/components/sections/AdditionalExperience";
import { Tools } from "@/components/sections/Tools";
import { WorkingStyle } from "@/components/sections/WorkingStyle";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getHomeContent(locale as Locale);

  return (
    <div className="page-shell">
      <main id="top">

        {/* 1 · Hero — full-bleed, no Section wrapper, handles own padding */}
        <Hero locale={locale as Locale} ui={content.ui} hero={content.hero} />

        {/* ── Projects — 蓝+紫 ── */}
        <Section id="projects" className="section-rhythm section-projects relative py-20 lg:py-28" style={{ zIndex: 10 }}>
          <Projects locale={locale as Locale} ui={content.ui} projects={content.projects} />
        </Section>

        {/* ── Key Experiences — 白+浅蓝 ── */}
        <Section id="experiences" className="section-rhythm section-experiences py-20 lg:py-28">
          <FadeIn delay={0}>
            <Experiences locale={locale as Locale} ui={content.ui} experiences={content.experiences} />
          </FadeIn>
        </Section>

        {/* ── Education — 淡紫+白 ── */}
        <Section id="education" className="section-rhythm section-education py-20 lg:py-28">
          <FadeIn delay={0}>
            <Education locale={locale as Locale} ui={content.ui} education={content.education} />
          </FadeIn>
        </Section>

        {/* ── Publications ── */}
        <Section id="publications" className="section-rhythm section-secondary py-16 lg:py-24">
          <FadeIn>
            <Publications locale={locale as Locale} ui={content.ui} publications={content.publications} />
          </FadeIn>
        </Section>

        {/* ── Media ── */}
        <Section id="media" className="section-rhythm section-secondary py-16 lg:py-24">
          <FadeIn>
            <Media locale={locale as Locale} ui={content.ui} media={content.media} />
          </FadeIn>
        </Section>

        {/* ── Additional / Campus ── */}
        <Section id="additional" className="section-rhythm section-secondary py-16 lg:py-24">
          <FadeIn>
            <AdditionalExperience locale={locale as Locale} ui={content.ui} additional={content.additional} />
          </FadeIn>
        </Section>

        {/* ── Tools & Methods — 浅蓝+淡紫 ── */}
        <Section id="tools" className="section-rhythm section-tools py-20 lg:py-28">
          <FadeIn>
            <Tools locale={locale as Locale} ui={content.ui} tools={content.tools} />
          </FadeIn>
        </Section>

        {/* ── Value Bridge ── */}
        <Section id="value-bridge" className="section-rhythm section-secondary py-16 lg:py-24">
          <FadeIn>
            <ValueBridge locale={locale as Locale} ui={content.ui} valueBridge={content.valueBridge} />
          </FadeIn>
        </Section>

        {/* ── Working Style ── */}
        <Section id="working-style" className="section-rhythm section-experiences py-16 lg:py-24">
          <FadeIn>
            <WorkingStyle locale={locale as Locale} ui={content.ui} workingStyle={content.workingStyle} />
          </FadeIn>
        </Section>

        {/* ── Contact — 粉+紫 ── */}
        <Section id="contact" className="section-rhythm section-contact py-20 lg:py-28">
          <FadeIn>
            <Contact locale={locale as Locale} ui={content.ui} cv={content.cv} contact={content.contact} />
          </FadeIn>
        </Section>

        {/* Footer */}
        <footer className="snap-start border-t border-line/60 py-10">
          <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <p className="text-[12px] text-ink/35">
                © {new Date().getFullYear()} Qihui Yuan · All rights reserved
              </p>
              <p className="text-[12px] text-ink/28">
                qihui-yuan.com
              </p>
            </div>
          </div>
        </footer>

      </main>

      <NavbarPortal locale={locale as Locale} ui={content.ui} cv={content.cv} />
    </div>
  );
}
