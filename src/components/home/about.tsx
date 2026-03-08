import React from 'react';
import { SocialProof } from '../../generated/types';
import { Section } from '../ui/section';

export interface AboutProps {
  biography: string;
  proofs: SocialProof[];
}

export const About = ({ biography, proofs }: AboutProps) => {
  return (
    <Section id="about" className={sectionClassName}>
      <div className={containerClassName}>
        <div className={bioContainerClassName}>
          <h2 className={titleClassName}>Sobre mim</h2>
          {biography.split('\n\n').map((paragraph, index) => (
            <p key={index} className={paragraphClassName}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={proofsContainerClassName}>
          <h3 className={subtitleClassName}>O que dizem sobre mim</h3>
          <div className={gridClassName}>
            {proofs.map((proof, index) => (
              <article key={index} className={cardClassName}>
                <blockquote className={quoteClassName}>
                  "{proof.quote}"
                </blockquote>
                <div className={authorContainerClassName}>
                  <p className={authorNameClassName}>{proof.author}</p>
                  <p className={authorRoleClassName}>{proof.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const sectionClassName = 'bg-slate-50 dark:bg-slate-900/50';
const containerClassName = 'flex flex-col gap-16 lg:flex-row lg:gap-24 items-start';
const bioContainerClassName = 'flex-1 space-y-6';
const titleClassName = 'text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white';
const paragraphClassName = 'text-lg text-slate-600 dark:text-slate-300 leading-relaxed';
const proofsContainerClassName = 'flex-1 w-full space-y-8';
const subtitleClassName = 'text-2xl font-semibold tracking-tight text-slate-900 dark:text-white';
const gridClassName = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-1';
const cardClassName = 'group relative flex flex-col justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 transition-all hover:-translate-y-1 hover:shadow-md';
const quoteClassName = 'text-base italic text-slate-700 dark:text-slate-300';
const authorContainerClassName = 'mt-auto flex flex-col';
const authorNameClassName = 'font-semibold text-slate-900 dark:text-white';
const authorRoleClassName = 'text-sm text-slate-500 dark:text-slate-400';
