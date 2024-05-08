import home from "../assets/home.svg";
import arrow from "../assets/arrow.svg";

const Breadcrumb = () => {
  return (
    <div className="flex items-center justify-start p-2 gap-x-2 mb-8">
      <div>
        <img src={home} alt="Home" width={20} height={20} />
      </div>
      <div>
        <img src={arrow} alt="Arrow" width={8} height={8} />
      </div>
      <div>
        <p className="breadcrumb-p">Flashcard</p>
      </div>
      <div>
        <img src={arrow} alt="Arrow" width={8} height={8} />
      </div>
      <div>
        <p className="breadcrumb-p">Mathematics</p>
      </div>
      <div>
        <img src={arrow} alt="Arrow" width={8} height={8} />
      </div>
      <div>
        <p className="text-[#0f3c99] font-bold breadcrumb-p">
          Relation and Function
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
