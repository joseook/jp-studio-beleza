import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/**
 * Newsletter Component
 * Design: Luxo Minimalista Contemporâneo
 * - Full-width primary color background
 * - Large serif heading
 * - Email input with rounded-full shape
 * - Success state with check icon
 */

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-24 px-6 bg-primary"
    >
      <div className="container">
        <div
          ref={contentRef}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Dicas de beleza e ofertas exclusivas
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 max-w-2xl">
            Cadastre-se em nossa lista VIP e receba 10% de desconto no seu primeiro serviço
          </p>

          {/* Form or Success State */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <Button
                type="submit"
                className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-premium"
              >
                Quero meu desconto
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 py-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-semibold text-white">
                Bem-vinda à nossa comunidade VIP!
              </p>
              <p className="text-white/80">
                Verifique seu e-mail para confirmar o cadastro
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
