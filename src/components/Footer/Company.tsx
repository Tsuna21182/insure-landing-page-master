function Company() {
  return (
    <section className="flex flex-col items-center gap-5 font-body">
      <h3 className="uppercase text-GrayishBlue text-xl">our company</h3>
      <ul className="flex flex-col text-center gap-2">
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          how we work
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          why insure?
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          check price
        </a>
        <a
          href="#"
          className="text-lg uppercase text-DarkViolet font-bold md:hover:underline"
        >
          Reviews
        </a>
      </ul>
    </section>
  );
}

export default Company;
