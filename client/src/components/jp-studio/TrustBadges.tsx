import { useEffect, useRef } from "react";
import { Award, Sparkles, Crown, MapPin } from "lucide-react";

/**
 * Trust Badges Component
 * Design: Luxo Minimalista Contemporâneo
 * - 4 trust indicators with icons and descriptions
 * - Scroll-triggered fade-in-scale animation
 * - Circular icon containers with primary color background
 */

interface Badge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const badges: Badge[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experiência Comprovada",
    description: "Realçando belezas e transformando vidas desde 2009.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Produtos Premium",
    description: "Utilizamos apenas as melhores marcas do mercado.",
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Especialistas em Noivas",
    description: "Produções inesquecíveis para o seu grande dia.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Localização Privilegiada",
    description: "Fácil acesso na Av. Tancredo Neves em Maceió.",
  },
];

export default function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1 }
    );

    badgeRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.animationDelay = `${index * 80}ms`;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 bg-white px-6"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              ref={(el) => {
                badgeRefs.current[index] = el;
              }}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {badge.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground">
                {badge.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
