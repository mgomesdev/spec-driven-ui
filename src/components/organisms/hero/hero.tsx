import React from 'react';
import { Button } from '../../atoms/button/button';

interface HeroProps {
    title: string;
    subtitle?: string;
    logoSrc?: string;
    imageSrc?: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    logoSrc,
    imageSrc,
    ctaText = 'Começar Agora',
    onCtaClick,
}) => {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-background px-4 py-20 text-center">
            {/* Background pattern placeholder */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--border)_0%,_transparent_70%)] opacity-20" />
            
            <div className="max-w-5xl w-full flex flex-col items-center gap-6">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                        {title.split(' ').map((word, i) => (
                            word.toLowerCase() === 'antigravity' ? 
                            <span key={i} className="text-primary"> {word}</span> : 
                            <span key={i}> {word}</span>
                        ))}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <Button onClick={onCtaClick} className="px-8 py-6 text-base rounded-full">
                        {ctaText}
                    </Button>
                    <Button variant="ghost" className="px-8 py-6 text-base rounded-full border border-border">
                        Ver Portfolio
                    </Button>
                </div>

                {imageSrc && (
                    <div className="mt-12 w-full max-w-4xl relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted/50 group">
                        <img
                            src={imageSrc}
                            alt="Illustration"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};
