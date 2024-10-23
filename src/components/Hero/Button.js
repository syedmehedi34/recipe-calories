export const handleButtonAction = (event) => {
  const buttons = document.querySelectorAll(".hero-btn");
  buttons.forEach((button) => {
    button.classList.remove("bg-primary", "text-title");
    button.classList.add("bg-transparent", "text-white");
  });

  event.target.classList.add("bg-primary", "text-title");
  event.target.classList.remove("bg-transparent", "text-white");
};
