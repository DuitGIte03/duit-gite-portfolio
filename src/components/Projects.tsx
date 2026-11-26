import { projects } from '../data/portfolio';
import SectionLabel from './ui/SectionLabel';
import SplitText from './ui/SplitText';
import Reveal from './ui/Reveal';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 py-24 md:px-8 md:py-32"
      aria-labelledby="projects-title"
    >
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="03">Selected projects</SectionLabel>
          <h2
            id="projects-title"
            className="mt-6 text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] font-medium tracking-[-0.045em]"
          >
            <SplitText text="Projects in" className="block" />
            <SplitText
              text="progress."
              delay={0.12}
              className="block font-serif font-normal tracking-[-0.03em] italic"
            />
          </h2>
        </div>

        <p className="max-w-[34ch] text-sm text-muted md:text-right">
          I’m working on three projects. More details coming soon.
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.id}
            delay={index * 0.08}
            className="min-h-64 border border-line bg-bg p-6 md:p-8"
          >
            <article className="flex h-full min-h-48 flex-col">
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                0{index + 1} · In progress
              </span>

              <h3 className="mt-8 text-[clamp(1.5rem,2vw,1.9rem)] leading-[1.05] font-medium tracking-[-0.035em]">
                {project.title}
              </h3>

              <p className="mt-auto pt-8 text-[15px] text-muted">
                Coming soon
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}