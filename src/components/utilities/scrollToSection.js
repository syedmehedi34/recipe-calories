// scrollToSection.js
export const scrollToSection = () => {
  const section = document.getElementById("target-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
