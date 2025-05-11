import { ArrowUpRight } from "lucide-react";
import { memo } from "react";

// eslint-disable-next-line no-unused-vars
export const AboutCard = memo(({ icon: Icon, title, description, data }) => (
  <div
    className="relative group p-3 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20 hover:border-[#77001A]/40 transition-all duration-300 "
    data-aos="fade-up">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-[#330008]/50 to-[#77001A]/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-white">{data}</span>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-md font-semibold bg-gradient-to-r from-white to-[#BBBBBB] bg-clip-text text-transparent uppercase">
            {title}
          </h3>
          <p className="leading-relaxed text-gray-400">{description}</p>
        </div>
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
    </div>
  </div>
));
