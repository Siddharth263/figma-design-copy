import sound from "../assets/sound.svg";
import hint from "../assets/hint.svg";
import restart from "../assets/restart.svg";
import box from "../assets/box.svg";
import backarrow from "../assets/back-arrow.svg";
import fowardarrow from "../assets/forward-arrow.svg";

const FlashCard = () => {
  return (
    <section className="mt-8 flex flex-col gap-6 items-center">
      <div className="flex items-center justify-center gap-x-12">
        <div>
          <button className="flashcard-p">Study</button>
        </div>
        <div>
          <button className="flashcard-p">Quiz</button>
        </div>
        <div>
          <button className="flashcard-p">Test</button>
        </div>
        <div>
          <button className="flashcard-p">Game</button>
        </div>
        <div>
          <button className="flashcard-p">Others</button>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-blue-500 to-[#0f3c99] rounded-3xl p-8 w-[38rem] h-[20rem]">
        <div className="flex justify-between">
          <div>
            <img src={hint} alt="Hint" />
          </div>
          <div>
            <img src={sound} alt="Sound" />
          </div>
        </div>
        <div className="flex items-center justify-center p-20">
          <p className="text-white text-4xl">9 + 6 + 7x - 2x - 3</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-2/5">
        <div>
          <img src={restart} alt="Restart" />
        </div>
        <div className="flex gap-x-6 items-center justify-stretch">
          <div>
            <img src={backarrow} alt="Go Back" />
          </div>
          <div>
            <p className="text-xl text-[#0f3c99] font-extrabold">01/10</p>
          </div>
          <div>
            <img src={fowardarrow} alt="GO Forward" />
          </div>
        </div>
        <div>
          <img src={box} alt="Resize" />
        </div>
      </div>
    </section>
  );
};

export default FlashCard;
