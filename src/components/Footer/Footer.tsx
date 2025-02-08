import Redes from "./Redes";
import Company from "./Company";
import HelpMe from "./HelpMe";
import Contact from "./Contact";
import Others from "./Others";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 mb-30 bg-[url(/images/bg-pattern-footer-mobile.svg)] md:bg-[url(/images/bg-pattern-footer-desktop.svg)] bg-cover bg-center">
      <Redes />
      <div className="border border-GrayishBlue w-80 md:w-lvh xl:w-7xl 3xl:w-[110rem]"></div>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-60 md:gap-y-8">
        <Company />
        <HelpMe />
        <Contact />
        <Others />
      </div>
    </footer>
  );
}

export default Footer;
