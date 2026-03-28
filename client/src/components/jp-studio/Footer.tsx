import { Instagram, Facebook, MessageCircle } from "lucide-react";

/**
 * Footer Component
 * Design: Luxo Minimalista Contemporâneo
 * - Giant brand name watermark behind content
 * - 4-column grid: brand info + social, then 3 link columns
 * - Social icons with rounded-full background
 * - Bottom bar with copyright and policy links
 */

interface NavColumn {
  title: string;
  links: string[];
}

const navColumns: NavColumn[] = [
  {
    title: "Serviços",
    links: ["Cabelo", "Maquiagem", "Estética", "Unhas", "Noivas"],
  },
  {
    title: "Sobre",
    links: ["Nossa História", "Equipe", "Galeria", "Depoimentos"],
  },
  {
    title: "Suporte",
    links: ["Contato", "Localização", "Dúvidas Frequentes", "Termos de Serviço"],
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/jessicapirestudio" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <h1 className="text-[200px] md:text-[400px] font-bold text-foreground text-center leading-none whitespace-nowrap">
          JP Studio
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 container py-24 px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                JP Studio de Beleza
              </h3>
              <p className="text-muted-foreground text-sm">
                A arte de revelar a sua essência.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Columns */}
          {navColumns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground">{column.title}</h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; 2024 JP Studio de Beleza. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Av. Tancredo Neves - Village 2, Maceió - AL, 57073-382
          </p>
        </div>
      </div>
    </footer>
  );
}
