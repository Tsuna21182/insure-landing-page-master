function HelpMe() {
  return (
    <section className="flex flex-col items-center gap-5 font-body">
      <h3 className="uppercase text-GrayishBlue text-xl">help me</h3>
      <ul className="flex flex-col text-center gap-2">
        <a href="#" className="text-lg uppercase text-DarkViolet font-bold">
          faq
        </a>
        <a href="#" className="text-lg uppercase text-DarkViolet font-bold">
          terms of use
        </a>
        <a href="#" className="text-lg uppercase text-DarkViolet font-bold">
          privacy policy
        </a>
        <a href="#" className="text-lg uppercase text-DarkViolet font-bold">
          cookies
        </a>
      </ul>
    </section>
  );
}

export default HelpMe;
