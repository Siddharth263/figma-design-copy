import hyggex from "../assets/hyggex.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between py-6">
        <div>
          <img src={hyggex} alt="Nav Logo" width={200} height={200} />
        </div>
        <div className="flex items-center justify-center gap-x-8 max-sm:hidden">
          <div>
            <p className="text-lg">Home</p>
          </div>
          <div>
            <p className="text-lg">Flashcard</p>
          </div>
          <div>
            <p className="text-lg">Contact</p>
          </div>
          <div>
            <p className="text-lg">FAQ</p>
          </div>
          <div>
            <button className="rounded-full tracking-wide text-lg bg-[#0f3c99] text-white px-8 py-2">
              Login
            </button>
          </div>
        </div>
        <div className="hidden max-sm:block border-2 border-red-500 py-1">
          <div className="w-10 h-1 bg-[#0f3c99] rounded-lg mb-1"></div>
          <div className="w-10 h-1 bg-[#0f3c99] rounded-lg mb-1"></div>
          <div className="w-10 h-1 bg-[#0f3c99] rounded-lg"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
