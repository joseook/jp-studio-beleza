import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * Hero Section Component
 * Design: Luxo Minimalista Contemporâneo
 * - Full-bleed background image with gradient overlay
 * - Large serif headline with blur-in animation
 * - Subheadline and CTA button with staggered animations
 * - Scroll indicator at bottom
 */

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations on mount
    if (labelRef.current) {
      labelRef.current.style.animationDelay = "0.2s";
      labelRef.current.classList.add("animate-blur-in");
    }
    if (headlineRef.current) {
      headlineRef.current.style.animationDelay = "0.4s";
      headlineRef.current.classList.add("animate-blur-in");
    }
    if (subtextRef.current) {
      subtextRef.current.style.animationDelay = "0.6s";
      subtextRef.current.classList.add("animate-blur-in");
    }
    if (ctaRef.current) {
      ctaRef.current.style.animationDelay = "0.8s";
      ctaRef.current.classList.add("animate-blur-in");
    }
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663184389768/2GDhDziqtFHzbN6WejFrKP/hero-beauty-transformation-o22UpYy6K88mpPL2zJvt8J.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center py-24 px-6">
        {/* Label */}
        <div
          ref={labelRef}
          className="opacity-0 mb-6 inline-block"
        >
          <span className="text-sm md:text-base font-semibold tracking-widest text-primary uppercase">
            Transformação e Elegância
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-tight"
        >
          Revele sua melhor versão com elegância e estilo
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="opacity-0 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-balance"
        >
          Especialistas em transformações capilares, maquiagem e estética desde 2009. Agende seu momento de cuidado em Maceió e sinta-se maravilhosa.
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="opacity-0">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-premium"
          >
            Agendar Meu Horário
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </section>
  );
}
