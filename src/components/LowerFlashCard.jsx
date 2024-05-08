import secLogo from "../assets/sec-logo.svg";
import plus from "../assets/plus.svg";

const LowerFlashCard = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <img src={secLogo} alt="" />
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            <img src={plus} alt="Add" />
          </div>
          <div>
            <p className="text-[#0f3c99] text-3xl font-bold">Create Flashcard</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerFlashCard;
