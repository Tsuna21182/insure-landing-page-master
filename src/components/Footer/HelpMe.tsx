function HelpMe() {
  return (
    <section className="flex flex-col items-center gap-5 font-body md:items-baseline">
      <h3 className="uppercase text-GrayishBlue text-xl">help me</h3>
      <ul className="flex flex-col text-center gap-2 md:text-left">
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          faq
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          terms of use
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          privacy policy
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          cookies
        </a>
      </ul>
    </section>
  );
}

export default HelpMe;
