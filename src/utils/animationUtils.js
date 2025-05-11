import AOS from "aos";
import "aos/dist/aos.css";

export const initializeAOS = () => {
  const initAOS = () => {
    AOS.init({
      duration: 800,
      once: false,
    });
  };

  initAOS();
  window.addEventListener("resize", initAOS);
  
  return () => window.removeEventListener("resize", initAOS);
};