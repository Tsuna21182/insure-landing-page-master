import Redes from "./Redes";
import Company from "./Company";
import HelpMe from "./HelpMe";
import Contact from "./Contact";
import Others from "./Others";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8">
      <Redes />
      <div className="border border-GrayishBlue w-80"></div>
      <Company />
      <HelpMe />
      <Contact />
      <Others />
    </footer>
  );
}

export default Footer;
