import { useState } from "react";
import NavBar from "./NavBar";
import Btn from "./Btn";

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
            <div className="absolute top-20 left-0 w-full bg-VeryDarkViolet p-5">
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
