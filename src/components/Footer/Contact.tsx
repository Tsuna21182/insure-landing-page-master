function Contact() {
  return (
    <section className="flex flex-col items-center gap-5 font-body">
      <h3 className="uppercase text-GrayishBlue text-xl">contact</h3>
      <ul className="flex flex-col text-center gap-2">
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          sales
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          support
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          live chat
        </a>
      </ul>
    </section>
  );
}

export default Contact;
