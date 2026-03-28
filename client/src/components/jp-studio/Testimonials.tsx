import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

/**
 * Testimonials Component
 * Design: Luxo Minimalista Contemporâneo
 * - 3-column auto-scrolling testimonial cards
 * - Alternating scroll directions (down, up, down)
 * - Gradient masks at top and bottom
 * - Hover to slow animation
 */

interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  quote: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    city: "Maceió, AL",
    rating: 5,
    quote: "Fiz minha produção de noiva na JP Studio e foi perfeito! A equipe é maravilhosa e me deixou exatamente como eu sonhava.",
    service: "Produção Noiva Completa",
  },
  {
    id: 2,
    name: "Camila Rodrigues",
    city: "Maceió, AL",
    rating: 5,
    quote: "O melhor ombre hair que já fiz. O loiro ficou super natural e o cabelo continuou saudável.",
    service: "Mechas e Iluminação",
  },
  {
    id: 3,
    name: "Amanda Costa",
    city: "Maceió, AL",
    rating: 5,
    quote: "Atendimento impecável desde 2009! Não troco o design de sobrancelhas delas por nada.",
    service: "Design de Sobrancelhas",
  },
  {
    id: 4,
    name: "Letícia Barros",
    city: "Rio Largo, AL",
    rating: 5,
    quote: "Fui madrinha de casamento e a maquiagem durou a festa inteira intacta. Profissionais excelentes.",
    service: "Maquiagem Social",
  },
  {
    id: 5,
    name: "Beatriz Mendes",
    city: "Maceió, AL",
    rating: 4.5,
    quote: "Ambiente super agradável e a escova modeladora deixa meu cabelo com um volume incrível.",
    service: "Escova Modeladora",
  },
  {
    id: 6,
    name: "Fernanda Lima",
    city: "Marechal Deodoro, AL",
    rating: 5,
    quote: "Recuperei meu cabelo com o tratamento reconstrutor. O resultado foi visível na primeira sessão.",
    service: "Tratamento Reconstrutor",
  },
  {
    id: 7,
    name: "Juliana Alves",
    city: "Maceió, AL",
    rating: 5,
    quote: "As unhas em gel ficaram super naturais e não descolam. Recomendo muito!",
    service: "Alongamento de Unhas",
  },
  {
    id: 8,
    name: "Patrícia Gomes",
    city: "Maceió, AL",
    rating: 5,
    quote: "Lugar aconchegante e equipe simpática. Faço as unhas toda semana.",
    service: "Manicure e Pedicure",
  },
  {
    id: 9,
    name: "Renata Souza",
    city: "Maceió, AL",
    rating: 5,
    quote: "Confio de olhos fechados. Elas entendem perfeitamente o que a cliente quer.",
    service: "Mechas e Iluminação",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-premium flex flex-col gap-4 min-h-[300px] flex-shrink-0">
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-secondary text-secondary"
          />
        ))}
        {testimonial.rating % 1 !== 0 && (
          <Star className="w-4 h-4 fill-secondary/50 text-secondary" />
        )}
      </div>

      {/* Quote */}
      <p className="text-foreground italic leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.city}</p>
        <p className="text-xs text-primary font-semibold mt-2 uppercase tracking-wide">
          {testimonial.service}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const container3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add hover listeners to slow animation
    const containers = [container1Ref, container2Ref, container3Ref];
    containers.forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener("mouseenter", () => {
          ref.current?.style.setProperty("animation-duration", "60s");
        });
        ref.current.addEventListener("mouseleave", () => {
          ref.current?.style.setProperty("animation-duration", "30s");
        });
      }
    });
  }, []);

  // Duplicate testimonials for seamless loop
  const testimonials1 = [...testimonials, ...testimonials].filter(
    (_, i) => i % 3 === 0
  );
  const testimonials2 = [...testimonials, ...testimonials].filter(
    (_, i) => i % 3 === 1
  );
  const testimonials3 = [...testimonials, ...testimonials].filter(
    (_, i) => i % 3 === 2
  );

  return (
    <section className="w-full py-24 bg-white px-6">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            O Que Nossas Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] overflow-hidden scroll-mask">
          {/* Column 1 - Scroll Down */}
          <div
            ref={container1Ref}
            className="flex flex-col gap-6 animate-scroll-down"
          >
            {testimonials1.map((testimonial) => (
              <TestimonialCard
                key={`col1-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Column 2 - Scroll Up */}
          <div
            ref={container2Ref}
            className="flex flex-col gap-6 animate-scroll-up"
          >
            {testimonials2.map((testimonial) => (
              <TestimonialCard
                key={`col2-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Column 3 - Scroll Down */}
          <div
            ref={container3Ref}
            className="flex flex-col gap-6 animate-scroll-down"
          >
            {testimonials3.map((testimonial) => (
              <TestimonialCard
                key={`col3-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
