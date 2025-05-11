export const hideElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add("opacity-0", "invisible");
  }
};

export const showElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove("opacity-0", "invisible");
    element.classList.add("transition-opacity", "duration-500", "opacity-100");
  }
};