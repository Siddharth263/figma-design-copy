import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="px-24 grid gap-4 font-roboto">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
