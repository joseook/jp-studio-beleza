import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

/**
 * Services Grid Component
 * Design: Luxo Minimalista Contemporâneo
 * - Category filter with animated sliding background
 * - 4-column grid with aspect-square service cards
 * - Hover-reveal add button
 * - Scroll-triggered animations
 */

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "cabelo" | "maquiagem" | "estética" | "unhas" | "eventos";
  badge: string;
  image: string;
}

const services: Service[] = [
  {
    id: "1",
    name: "Produção Noiva Completa",
    description: "Maquiagem HD, penteado estruturado, teste prévio e assessoria.",
    price: "Sob Consulta",
    category: "eventos",
    badge: "Mais Desejado",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663184389768/2GDhDziqtFHzbN6WejFrKP/bridal-makeup-production-bvuXc49pjBXesthHRzwEVS.webp",
  },
  {
    id: "2",
    name: "Mechas e Iluminação",
    description: "Técnicas modernas de ombre hair e luzes para um visual natural.",
    price: "A partir de R$ 250",
    category: "cabelo",
    badge: "Tendência",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    name: "Escova Modeladora",
    description: "Lavagem especial, hidratação rápida e escova com finalização.",
    price: "R$ 60",
    category: "cabelo",
    badge: "Dia a Dia",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&h=500&fit=crop",
  },
  {
    id: "4",
    name: "Design de Sobrancelhas",
    description: "Mapeamento facial e design para harmonizar seu rosto.",
    price: "R$ 45",
    category: "estética",
    badge: "Essencial",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop",
  },
  {
    id: "5",
    name: "Maquiagem Social",
    description: "Make profissional para festas, formaturas e eventos sociais.",
    price: "R$ 120",
    category: "eventos",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop",
  },
  {
    id: "6",
    name: "Tratamento Reconstrutor",
    description: "Cronograma capilar intensivo para fios danificados.",
    price: "R$ 150",
    category: "cabelo",
    badge: "Tratamento",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
  },
  {
    id: "7",
    name: "Alongamento de Unhas",
    description: "Unhas em gel com acabamento natural e alta durabilidade.",
    price: "R$ 130",
    category: "unhas",
    badge: "Novo",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
  },
  {
    id: "8",
    name: "Manicure e Pedicure",
    description: "Cuidado completo com as unhas, incluindo esmaltação.",
    price: "R$ 50",
    category: "unhas",
    badge: "Essencial",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "cabelo", label: "Cabelo" },
  { id: "maquiagem", label: "Maquiagem" },
  { id: "estética", label: "Estética" },
  { id: "unhas", label: "Unhas" },
  { id: "eventos", label: "Eventos/Noivas" },
];

const badgeColors: Record<string, string> = {
  "Mais Desejado": "bg-secondary text-white",
  "Tendência": "bg-accent text-foreground",
  "Dia a Dia": "bg-primary/20 text-foreground",
  "Essencial": "bg-primary/20 text-foreground",
  "Popular": "bg-accent text-foreground",
  "Tratamento": "bg-primary/20 text-foreground",
  "Novo": "bg-secondary text-white",
};

export default function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [filteredServices, setFilteredServices] = useState(services);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedCategory === "todos") {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter((s) => s.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

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

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.animationDelay = `${index * 50}ms`;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [filteredServices]);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 bg-white px-6"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa completa linha de serviços de beleza e estética
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-premium"
                  : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group rounded-3xl overflow-hidden shadow-premium hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    badgeColors[service.badge] || "bg-primary/20 text-foreground"
                  }`}
                >
                  {service.badge}
                </div>

                {/* Add Button - Reveal on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-foreground hover:bg-primary hover:text-white rounded-full gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Agendar
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {service.description}
                </p>
                <p className="font-semibold text-primary text-sm">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
