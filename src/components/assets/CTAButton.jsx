import { memo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useContactModal } from "../../context/ContactModalContext";

export const CTAButton = memo(
  // eslint-disable-next-line no-unused-vars
  ({ href, text, icon: Icon, isDownload = false, isExternal = false }) => {
    const { openModal } = useContactModal();
    const isPrimaryContact = href === "Contact";
    const baseClasses = `cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg ${
      isPrimaryContact
        ? "bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white hover:from-[#AA0020] hover:to-[#77001A] shadow-[#77001A]/30"
        : "bg-black/30 backdrop-blur-sm border border-[#77001A]/20 text-white hover:bg-[#77001A]/10 hover:border-[#77001A]/40 shadow-black/30 hover:shadow-[#77001A]/20"
    }`;

    const content = (
      <>
        <span className="z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
          {text}
        </span>
        <Icon
          className={`w-4 h-4 text-gray-200 ${
            isPrimaryContact
              ? "group-hover:translate-x-1"
              : "group-hover:rotate-45"
          } 
        transform transition-all duration-300 z-10`}
        />
      </>
    );

    if (isDownload || isExternal) {
      return (
        <a
          href={href}
          className={baseClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          download={isDownload}>
          {content}
        </a>
      );
    }

    if (isPrimaryContact) {
      return (
        <button className={baseClasses} onClick={openModal} type="button">
          {content}
        </button>
      );
    }

    return (
      <ScrollLink
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={baseClasses}>
        {content}
      </ScrollLink>
    );
  },
);
