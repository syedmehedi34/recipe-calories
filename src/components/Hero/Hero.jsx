import { scrollToSection } from "./../utilities/scrollToSection";
import { handleButtonAction } from "./Button";
const Hero = () => {
  //

  //
  return (
    <div className="hero h-[600px] mt-5  rounded-[24px] bg-gradient">
      <div className="hero-overlay bg-opacity-60 border rounded-[24px] bg-gradient"></div>
      <div className="hero-content text-neutral-content text-center rounded-[24px]">
        <div className="w-4/5">
          <h1 className="mb-5 text-5xl text-white font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="space-x-5">
            <button
              onClick={() => {
                scrollToSection();
                handleButtonAction(event);
              }}
              className="btn hero-btn bg-transparent rounded-[50px] border text-white"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                handleButtonAction(event);
              }}
              className="btn hero-btn bg-transparent rounded-[50px] border text-white"
            >
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
