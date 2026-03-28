import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, CreditCard } from "lucide-react";

/**
 * CTA Banner Component
 * Design: Luxo Minimalista Contemporâneo
 * - Full-bleed background image
 * - Large headline with value propositions
 * - Scroll-triggered scale animation
 */

interface ValueProp {
  icon: React.ReactNode;
  text: string;
}

const valueProps: ValueProp[] = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    text: "Agendamento rápido via WhatsApp",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    text: "Horários flexíveis para sua conveniência",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    text: "Aceitamos todos os cartões",
  },
];

export default function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLDivElement;
            element.classList.add("animate-fade-in-scale");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-32 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663184389768/2GDhDziqtFHzbN6WejFrKP/bridal-makeup-production-bvuXc49pjBXesthHRzwEVS.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container flex flex-col items-center text-center gap-8"
      >
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
          Pronta para realçar a sua beleza única?
        </h2>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-white"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                {prop.icon}
              </div>
              <p className="text-sm md:text-base font-semibold">
                {prop.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-white text-foreground hover:bg-secondary hover:text-white px-8 py-6 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-premium"
        >
          Falar com a Recepção
        </Button>
      </div>
    </section>
  );
}
