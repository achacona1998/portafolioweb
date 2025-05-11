import { memo } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { MainTitle } from "./MainTitle";
import { TypingEffect } from "./TypingEffect";
import { TechStack } from "./TechStack";
import { SocialLink } from "./SocialLink";
import { CTAButton } from "../assets/CTAButton";
import { TECH_STACK, SOCIAL_LINKS } from "../../constants/homeData";

export const HomeContent = memo(({ text }) => (
  <div
    className="order-1 space-y-6 w-full text-left lg:w-1/2 sm:space-y-8 lg:text-left lg:order-1 lg:mt-0"
    data-aos="fade-right"
    data-aos-delay="200">
    <div className="space-y-4 sm:space-y-6">
      <StatusBadge />
      <MainTitle />
      <TypingEffect text={text} />

      {/* Description */}
      <p
        className="max-w-xl text-base font-light leading-relaxed text-gray-400 md:text-lg"
        data-aos="fade-up"
        data-aos-delay="1000">
        Creating innovative, functional, and user-friendly websites for digital
        solutions.
      </p>

      {/* Tech Stack */}
      <div
        className="flex flex-wrap gap-3 justify-start"
        data-aos="fade-up"
        data-aos-delay="1200">
        {TECH_STACK.map((tech, index) => (
          <TechStack key={index} tech={tech} />
        ))}
      </div>

      {/* CTA Buttons */}
      <div
        className="flex flex-row gap-3 justify-start w-full"
        data-aos="fade-up"
        data-aos-delay="1400">
        <CTAButton href="Portfolio" text="Projects" icon={ExternalLink} />
        <CTAButton href="Contact" text="Contact" icon={Mail} />
      </div>

      {/* Social Links */}
      <div
        className="flex gap-4 justify-start pt-2 pb-6 sm:pt-0 sm:pb-0"
        data-aos="fade-up"
        data-aos-delay="1600">
        {SOCIAL_LINKS.map((social, index) => (
          <SocialLink key={index} {...social} />
        ))}
      </div>
    </div>
  </div>
));
