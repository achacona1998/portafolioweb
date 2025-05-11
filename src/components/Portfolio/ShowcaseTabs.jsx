import { memo } from "react";

export const ShowcaseTabs = memo(({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="w-full bg-black/45 backdrop-blur-2xl grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center rounded-md shadow-inner shadow-[#77001aaa] p-3">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(tab.name)}
          className={`cursor-pointer flex flex-col justify-center items-center p-4 w-full rounded-md transition-colors duration-300 text-gray-400 ${
            activeTab === tab.name
              ? "bg-[#77001a] text-white"
              : "hover:text-white hover:bg-[#77001aaa]/40"
          }`}>
          <tab.icon className="w-4 h-4" />
          <h3 className="font-semibold text-md">{tab.name}</h3>
        </button>
      ))}
    </div>
  );
});