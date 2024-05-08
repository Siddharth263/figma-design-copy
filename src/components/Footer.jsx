import downArrow from "../assets/down-arrow.svg";
import { useState } from "react";

const Footer = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);

  return (
    <footer>
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-5xl text-[#0f3c99] font-bold">FAQ</p>
        </div>
        <div className="footer-div">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between items-center w-full"
          >
            <span className="font-bold">
              Can education flashcards be used for all age groups?
            </span>
            <span>
              <img src={downArrow} alt="Expand" />
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="mt-2 text-wrap overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              iure! Saepe facilis debitis sunt dolorem sed quisquam omnis
              numquam! Nobis reprehenderit eius possimus quasi tenetur neque
              explicabo, necessitatibus tempora nesciunt.
            </div>
          </div>
        </div>
        <div className="footer-div">
          <button
            onClick={() => setAccordionOpen2(!accordionOpen2)}
            className="flex justify-between items-center w-full"
          >
            <span className="font-bold">
              Can education flashcards be used for all age groups?
            </span>
            <span>
              <img src={downArrow} alt="Expand" />
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              accordionOpen2
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="mt-2 text-wrap overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              iure! Saepe facilis debitis sunt dolorem sed quisquam omnis
              numquam! Nobis reprehenderit eius possimus quasi tenetur neque
              explicabo, necessitatibus tempora nesciunt.
            </div>
          </div>
        </div>
        <div className="footer-div">
          <button
            onClick={() => setAccordionOpen3(!accordionOpen3)}
            className="flex justify-between items-center w-full"
          >
            <span className="font-bold">
              Can education flashcards be used for all age groups?
            </span>
            <span>
              <img src={downArrow} alt="Expand" />
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              accordionOpen3
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="mt-2 text-wrap overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              iure! Saepe facilis debitis sunt dolorem sed quisquam omnis
              numquam! Nobis reprehenderit eius possimus quasi tenetur neque
              explicabo, necessitatibus tempora nesciunt.
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 h-72" />
    </footer>
  );
};

export default Footer;
