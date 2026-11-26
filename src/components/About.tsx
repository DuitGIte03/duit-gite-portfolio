import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { stats } from '../data/portfolio';
import { gsap, ScrollTrigger } from '../lib/scroll';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

const STATEMENT =
  'I work in accounting and financial operations, handling accounting records, reconciliations, compliance, and reporting — while exploring AI and automation to make financial workflows smarter and more efficient.';

/** Words light up as you scroll past, like a lamp warming up. */
function ScrubStatement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const words = ref.current.querySelectorAll('[data-w]');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 45%',
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [reduce]);

  return (
    <p
      ref={ref}
      className="text-[clamp(1.9rem,4.6vw,4.4rem)] leading-[1.06] font-medium tracking-[-0.045em]"
      aria-label={STATEMENT}
    >
      {STATEMENT.split(' ').map((word, index) => (
        <span
          key={index}
          data-w
          aria-hidden="true"
          className={/LLM|payment|SaaS/.test(word) ? 'font-serif font-normal tracking-[-0.02em] italic' : ''}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  );
}

export default function About() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      id="about"
      className="relative px-4 py-24 md:px-8 md:py-32"
      aria-labelledby="about-title"
    >
      <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
        <SectionLabel index="01">About</SectionLabel>
        <h2 id="about-title" className="sr-only">
          About me
        </h2>
      </div>

      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-11">
          <ScrubStatement />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-line bg-line md:mt-24 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08} className="bg-bg p-6 md:p-8">
            <div className="text-[clamp(2.6rem,5vw,4.5rem)] leading-none font-medium tracking-[-0.05em]">
              {stat.value}
            </div>
            <div className="mt-4 text-sm text-muted">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}