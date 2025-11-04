"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Coffee, GraduationCap, Mail, Settings } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="wide"
      sizing="comfortable"
      background="plain"
      cardStyle="elevated"
      primaryButtonStyle="solid"
      secondaryButtonStyle="outline"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {"name": "Shop", "id": "products"},
            {"name": "Training Lab", "id": "about"}, 
            {"name": "Menu", "id": "products"},
            {"name": "About", "id": "about"}
          ]}
          brandName="Matbakh"
          button={{
            "text": "Order Now",
            "href": "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Matbakh Coffee Lab"
          description="Discover exceptional coffee from our Madrid-based roastery and training lab. Experience the art of specialty coffee with our carefully sourced beans from Colombia and Ethiopia."
          tag="Premium Coffee"
          tagIcon={Coffee}
          mediaItems={[
            {"imageSrc": "/placeholders/placeholder1.webp", "imageAlt": "Matbakh coffee shop interior"},
            {"imageSrc": "/placeholders/placeholder1.webp", "imageAlt": "Sunset Kiss Colombian coffee"},
            {"imageSrc": "/placeholders/placeholder1.webp", "imageAlt": "Tropical Juice Colombian coffee"},
            {"imageSrc": "/placeholders/placeholder1.webp", "imageAlt": "Black Mamba Ethiopian coffee"},
            {"imageSrc": "/placeholders/placeholder1.webp", "imageAlt": "Coffee training lab session"}
          ]}
          buttons={[
            {"text": "Shop Coffee", "href": "products"},
            {"text": "Training Lab", "href": "about"}
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Coffee Selection"
          description="Explore our carefully curated selection of specialty coffee from Colombia and Ethiopia, each with unique flavor profiles and processing methods."
          tag="Premium Origins"
          products={[
            {
              "id": "050-sunset-kiss",
              "name": "SUNSET KISS",
              "price": "€30,00",
              "imageSrc": "/placeholders/placeholder1.webp",
              "imageAlt": "050 - SUNSET KISS / COLOMBIA / TYPICA - HONEY PROCESS"
            },
            {
              "id": "053-tropical-juice", 
              "name": "TROPICAL JUICE",
              "price": "€20,00",
              "imageSrc": "/placeholders/placeholder1.webp",
              "imageAlt": "053 - TROPICAL JUICE / COLOMBIA"
            },
            {
              "id": "054-black-mamba",
              "name": "BLACK MAMBA", 
              "price": "€20,00",
              "imageSrc": "/placeholders/placeholder1.webp",
              "imageAlt": "054 - BLACK MAMBA / ETHIOPIA"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Matbakh Training Lab"
          description="More than just a coffee shop, Matbakh is a comprehensive coffee education center in the heart of Madrid. Our Training Lab offers professional barista courses, cupping sessions, and coffee knowledge workshops."
          tag="Coffee Education"
          tagIcon={GraduationCap}
          bulletPoints={[
            {
              "title": "Professional Training",
              "description": "Learn from certified baristas and coffee professionals in our fully equipped training facility",
              "icon": Award
            },
            {
              "title": "Specialty Coffee",
              "description": "Work with premium beans from renowned origins including Colombian Typica and Ethiopian varieties",
              "icon": Coffee
            },
            {
              "title": "Hands-on Experience",
              "description": "Practice with professional-grade equipment in our state-of-the-art coffee lab environment",
              "icon": Settings
            }
          ]}
          imageSrc="/placeholders/placeholder1.webp"
          imageAlt="Coffee training lab equipment and roasting process"
          buttons={[
            {"text": "Join Training", "href": "contact"},
            {"text": "Learn More", "href": "about"}
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          tagIcon={Mail}
          title="Ready to Start Your Coffee Journey?"
          description="Whether you're interested in our premium coffee selection or want to join our training lab sessions, we'd love to hear from you."
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By signing up you agree to receive updates about our coffee offerings and training programs."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              "title": "Shop",
              "items": [
                {"label": "Coffee Selection", "href": "products"},
                {"label": "Equipment", "href": "shop"},
                {"label": "Gift Cards", "href": "shop"}
              ]
            },
            {
              "title": "Training",
              "items": [
                {"label": "Barista Courses", "href": "about"},
                {"label": "Cupping Sessions", "href": "about"},
                {"label": "Private Workshops", "href": "contact"}
              ]
            },
            {
              "title": "About",
              "items": [
                {"label": "Our Story", "href": "about"},
                {"label": "Location", "href": "contact"},
                {"label": "Contact", "href": "contact"}
              ]
            }
          ]}
          logoText="Matbakh"
          copyrightText="© 2025 | Matbakh Coffee Lab Madrid"
        />
      </div>
    </ThemeProvider>
  );
}