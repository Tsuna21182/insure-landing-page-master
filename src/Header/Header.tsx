import { useState } from "react";
import NavBar from "../components/NavBar";
import Btn from "../components/Btn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5">
      <div>
        <img src="/images/logo.svg" alt="imagen logo" />
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <div>
            <img src="/images/icon-close.svg" alt="icono menu" />
            <div className="absolute top-18 left-0 w-full bg-VeryDarkViolet p-5 bg-[url(/images/bg-pattern-mobile-nav.svg)] bg-no-repeat bg-right-bottom bg-[100%_auto] h-[560px]">
              <NavBar />
              <Btn name={"view plans"} />
            </div>
          </div>
        ) : (
          <img src="/images/icon-hamburger.svg" alt="icono menu" />
        )}
      </button>
      <div className="hidden md:flex ">
        <NavBar />
        <Btn name={"view plans"} />
      </div>
    </header>
  );
}

export default Header;
