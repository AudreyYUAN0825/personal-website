import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getHomeContent } from "@/content/home";
import { Header } from "@/components/header/Header";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { ValueBridge } from "@/components/sections/ValueBridge";
import { Capabilities } from "@/components/sections/Capabilities";
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
    <>
      <Header locale={locale as Locale} ui={content.ui} cv={content.cv} />
      <main id="top" className="pt-16">

        {/* 1 · Hero */}
        <Section id="hero" className="hero-bg py-12 md:py-18">
          <Hero locale={locale as Locale} ui={content.ui} hero={content.hero} />
        </Section>

        {/* 2 · Metrics */}
        <Section id="metrics" className="border-t border-line bg-white/60 py-8">
          <FadeIn>
            <Metrics locale={locale as Locale} ui={content.ui} metrics={content.metrics} />
          </FadeIn>
        </Section>

        {/* 3 · Capabilities */}
        <Section id="capabilities" className="py-16 bg-white/70">
          <FadeIn>
            <Capabilities locale={locale as Locale} ui={content.ui} capabilities={content.capabilities} />
          </FadeIn>
        </Section>

        {/* 5 · Projects */}
        <Section id="projects" className="py-16">
          <FadeIn>
            <Projects locale={locale as Locale} ui={content.ui} projects={content.projects} />
          </FadeIn>
        </Section>

        {/* 6 · Key Experiences */}
        <Section id="experiences" className="py-16 bg-white/70">
          <FadeIn>
            <Experiences locale={locale as Locale} ui={content.ui} experiences={content.experiences} />
          </FadeIn>
        </Section>

        {/* 7 · Education */}
        <Section id="education" className="py-16">
          <FadeIn>
            <Education locale={locale as Locale} ui={content.ui} education={content.education} />
          </FadeIn>
        </Section>

        {/* 8 · Publications */}
        <Section id="publications" className="py-16 bg-white/70">
          <FadeIn>
            <Publications locale={locale as Locale} ui={content.ui} publications={content.publications} />
          </FadeIn>
        </Section>

        {/* 9 · Media */}
        <Section id="media" className="py-16">
          <FadeIn>
            <Media locale={locale as Locale} ui={content.ui} media={content.media} />
          </FadeIn>
        </Section>

        {/* 10 · Additional / Campus (collapsed) */}
        <Section id="additional" className="py-16 bg-white/70">
          <FadeIn>
            <AdditionalExperience locale={locale as Locale} ui={content.ui} additional={content.additional} />
          </FadeIn>
        </Section>

        {/* 11 · Tools & Methods */}
        <Section id="tools" className="py-16">
          <FadeIn>
            <Tools locale={locale as Locale} ui={content.ui} tools={content.tools} />
          </FadeIn>
        </Section>


        {/* 13 · Value Bridge — why background translates (closing narrative) */}
        <Section id="value-bridge" className="py-14 bg-gradient-to-br from-accent/[0.02] to-moss/[0.02]">
          <FadeIn>
            <ValueBridge locale={locale as Locale} ui={content.ui} valueBridge={content.valueBridge} />
          </FadeIn>
        </Section>

        {/* 14 · Working Style (placeholder — fill in content) */}
        <Section id="working-style" className="py-14 bg-white/70">
          <FadeIn>
            <WorkingStyle locale={locale as Locale} ui={content.ui} workingStyle={content.workingStyle} />
          </FadeIn>
        </Section>

        {/* 15 · Contact (includes availability note — replaces standalone Open To) */}
        <Section id="contact" className="py-16">
          <FadeIn>
            <Contact locale={locale as Locale} ui={content.ui} cv={content.cv} contact={content.contact} />
          </FadeIn>
        </Section>

      </main>
    </>
  );
}
