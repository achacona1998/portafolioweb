import { memo } from "react";
import { Mail, ExternalLink, Download } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { MainTitle } from "./MainTitle";
import { TypingEffect } from "./TypingEffect";
import { TechStack } from "./TechStack";
import { SocialLink } from "./SocialLink";
import { CTAButton } from "../assets/CTAButton";
import { TECH_STACK, SOCIAL_LINKS } from "../../constants/homeData";

export const HomeContent = memo(({ text }) => (
  <div
    className="space-y-8 w-full max-w-2xl"
    data-aos="fade-right"
    data-aos-delay="200">
    <div className="space-y-6">
      <StatusBadge />
      <MainTitle />
      <TypingEffect text={text} />

      <p
        className="text-base font-light leading-relaxed text-gray-400 md:text-lg"
        data-aos="fade-up"
        data-aos-delay="1000">
        Desarrollando plataformas SaaS y e-commerce de alto rendimiento, con
        interfaces modernas y optimizadas para conversión.
      </p>

      <div
        className="flex flex-wrap gap-3"
        data-aos="fade-up"
        data-aos-delay="1200">
        {TECH_STACK.map((tech, index) => (
          <TechStack key={index} tech={tech} />
        ))}
      </div>

      <div
        className="flex flex-row flex-wrap gap-4 w-full"
        data-aos="fade-up"
        data-aos-delay="1400">
        <CTAButton href="Portfolio" text="Proyectos" icon={ExternalLink} />
        <CTAButton
          href="/CV/CV(es).pdf"
          text="Descargar CV"
          icon={Download}
          isDownload={true}
          isExternal={true}
        />
        <CTAButton href="Contact" text="Contacto" icon={Mail} />
      </div>

      <div
        className="flex gap-4 pt-2 pb-6 sm:pt-0 sm:pb-0"
        data-aos="fade-up"
        data-aos-delay="1600">
        {SOCIAL_LINKS.map((social, index) => (
          <SocialLink key={index} {...social} />
        ))}
      </div>
    </div>
  </div>
));
