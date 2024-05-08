import Breadcrumb from "./Breadcrumb";
import Flashcard from "./FlashCard";
import LowerFlashCard from "./LowerFlashCard";

const Main = () => {
  return (
    <main>
      <Breadcrumb />
      <div>
        <p className="text-[#0f3c99] font-bold tracking-wider text-4xl py-2">
          Relations and Functions ( Mathematics )
        </p>
      </div>
      <Flashcard />
      <LowerFlashCard />
    </main>
  );
};

export default Main;
