import { Briefcase, Globe, GraduationCap, Heart, Languages } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { educations, interests, languages, personal } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="À propos" title="Mon histoire" description={personal.tagline} />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal x={-40} y={0} className="space-y-6">
            <div className="glass rounded-3xl p-8 transition-all hover:border-primary/40">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">Qui suis-je ?</h3>
              </div>
              <p className="text-justify leading-relaxed text-muted">{personal.longBio}</p>
              <p className="mt-4 text-justify leading-relaxed text-muted">
                Au-delà du développement web, je possède des compétences en{" "}
                <span className="font-medium text-foreground">maintenance informatique</span>, configuration de systèmes et{" "}
                <span className="font-medium text-foreground">infographie</span>. Cette polyvalence me permet d&apos;offrir
                des solutions complètes adaptées à chaque projet.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 transition-all hover:border-accent/40">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                  <Heart size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">Centres d&apos;intérêt</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-default rounded-full border border-border/60 bg-surface-2/40 px-4 py-1.5 text-sm text-muted transition-all hover:border-accent/50 hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal x={40} y={0} className="space-y-6">
            <div className="glass rounded-3xl p-8 transition-all hover:border-primary/40">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">Formation</h3>
              </div>
              <ul className="space-y-5">
                {educations.map((edu, i) => (
                  <Reveal
                    as="li"
                    key={edu.degree}
                    delay={i * 0.1}
                    y={10}
                    className="relative border-l-2 border-primary/30 pl-6"
                  >
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="mt-0.5 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-primary">
                      <span>{edu.school}</span>
                      <a
                        href={edu.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Page Facebook de ${edu.school}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        <FaFacebookF size={12} />
                      </a>
                      <a
                        href={edu.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Site web de ${edu.school}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        <Globe size={13} />
                      </a>
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {edu.level} • {edu.period}
                    </p>
                    <p className="mt-2 text-sm text-muted">{edu.description}</p>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="glass rounded-3xl p-8 transition-all hover:border-accent/40">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                  <Languages size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">Langues parlées</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-xs text-muted">{lang.level}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
