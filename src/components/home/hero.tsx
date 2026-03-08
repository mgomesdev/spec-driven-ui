import React from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export function Hero({ name, title, subtitle, ctaText }: HeroProps) {
  return (
    <Section className="relative overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950"></div>

      <div className={containerStyles}>
        <span className={nameStyles}>
          Olá, eu sou {name}
        </span>

        <h1 className={titleStyles}>
          <span className={highlightStyles}>{title}</span>
        </h1>

        <p className={subtitleStyles}>
          {subtitle}
        </p>

        <div className={ctaContainerStyles}>
          <Button variant="primary" href="#projects">
            {ctaText}
          </Button>
          <Button variant="outline" href="#contact">
            Entrar em Contato
          </Button>
        </div>
      </div>
    </Section>
  );
}

const containerStyles = 'flex flex-col items-center justify-center space-y-8 text-center min-h-[70vh] md:min-h-[80vh]';
const nameStyles = 'text-sm font-semibold tracking-wider text-amber-500 uppercase dark:text-amber-400';
const titleStyles = 'text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-zinc-50';
const highlightStyles = 'text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500';
const subtitleStyles = 'max-w-2xl text-lg text-zinc-600 sm:text-xl md:text-2xl dark:text-zinc-400 leading-relaxed';
const ctaContainerStyles = 'flex flex-col sm:flex-row gap-4 mt-8';
