import Hero from "@/components/jp-studio/Hero";
import TrustBadges from "@/components/jp-studio/TrustBadges";
import BentoGrid from "@/components/jp-studio/BentoGrid";
import ServicesGrid from "@/components/jp-studio/ServicesGrid";
import Testimonials from "@/components/jp-studio/Testimonials";
import CTABanner from "@/components/jp-studio/CTABanner";
import Newsletter from "@/components/jp-studio/Newsletter";
import Footer from "@/components/jp-studio/Footer";

/**
 * Home Page - JP Studio de Beleza
 * Design: Luxo Minimalista Contemporâneo
 * 
 * Sections:
 * 1. Hero - Full-bleed background with headline and CTA
 * 2. Trust Badges - 4 trust indicators
 * 3. Bento Grid - Features and salon image
 * 4. Services Grid - Filterable service catalog
 * 5. Testimonials - Auto-scrolling customer reviews
 * 6. CTA Banner - Call-to-action with value props
 * 7. Newsletter - Email capture form
 * 8. Footer - Navigation and contact info
 */

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <TrustBadges />
      <BentoGrid />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </div>
  );
}
