import { useEffect, useRef } from "react";
import { Sofa, Users, Zap } from "lucide-react";

/**
 * Bento Grid Component
 * Design: Luxo Minimalista Contemporâneo
 * - Asymmetric grid layout with 1 large block + 3 smaller blocks
 * - Large image block with overlay card containing brand story
 * - Feature cards with icons and descriptions
 * - Scroll-triggered animations with stagger
 */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Sofa className="w-8 h-8" />,
    title: "Ambiente Acolhedor",
    description: "Um espaço projetado para o seu conforto e relaxamento total durante os procedimentos.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Atendimento Personalizado",
    description: "Consultoria de imagem para entender exatamente o que combina com o seu estilo.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Profissionais Atualizados",
    description: "Nossa equipe está sempre em busca das últimas tendências e técnicas do mercado da beleza.",
  },
];

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const largeBlockRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe large block
    if (largeBlockRef.current) {
      largeBlockRef.current.style.opacity = "0";
      observer.observe(largeBlockRef.current);
    }

    // Observe feature cards
    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.animationDelay = `${(index + 1) * 80}ms`;
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
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Diferenciais do JP Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça o que nos torna especial e diferenciado no mercado de beleza
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {/* Large Block - Salon Image with Overlay Card */}
          <div
            ref={largeBlockRef}
            className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden shadow-premium group cursor-pointer"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184389768/2GDhDziqtFHzbN6WejFrKP/salon-interior-elegant-jiKuFXp2tF5fmBq4aKYZbv.webp"
              alt="Salon Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-premium">
              <h3 className="text-xl font-bold text-foreground mb-2">
                A JP Studio de Beleza
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nasceu da paixão por transformar. Cada detalhe do nosso estúdio foi pensado para oferecer uma experiência única de autocuidado.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex flex-col gap-4 shadow-premium hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
