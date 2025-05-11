import { useState } from "react";

export const useShowcase = (initialTab = "Projects") => {
  const [activeTab, setActiveTab] = useState(initialTab);
  
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  
  return { activeTab, handleTabChange };
};