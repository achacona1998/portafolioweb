import { memo } from "react";
import SectionTitle from "../components/assets/SectionTitle";
import { LogoAmplio } from "../components//icons/icons";
import { ContactInfo } from "../components//Contact/ContactInfo";
import { ContactForm } from "../components//Contact/ContactForm";
import { contactInfo } from "../constants/contactData";

const Contact = () => {
  return (
    <section id="Contact" className="py-20 min-h-screen">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title={"Get in Touch"}
          description={
            "Have a question or want to work together? Feel free to reach out!"
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <ContactInfo
                key={info.id}
                id={info.id}
                icon={info.icon}
                title={info.title}
                content={info.content}
                link={info.link}
              />
            ))}
            <LogoAmplio />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
