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
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 py-20 text-center">
            <div className="max-w-4xl w-full flex flex-col items-center gap-8">
                {logoSrc && (
                    <div className="mb-4">
                        <img
                            src={logoSrc}
                            alt="Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </div>
                )}

                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>

                {imageSrc && (
                    <div className="mt-8 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={imageSrc}
                            alt="Illustration"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                <div className="mt-8">
                    <Button onClick={onCtaClick}>
                        {ctaText}
                    </Button>
                </div>
            </div>
        </section>
    );
};
