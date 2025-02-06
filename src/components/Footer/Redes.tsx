function Redes() {
  return (
    <section className="flex flex-col text-center items-center bg-[url(/images/bg-pattern-footer-mobile.svg)]">
      <img src="/images/logo.svg" alt="imagen logo" className="w-35" />
      <ul className="flex items-center my-10 gap-5">
        <a href="">
          <img
            src="/images/icon-facebook.svg"
            alt="icono redes"
            className="w-8"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-twitter.svg"
            alt="icono redes"
            className="w-8"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-pinterest.svg"
            alt="icono redes"
            className="w-8"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-instagram.svg"
            alt="icono redes"
            className="w-8"
          />
        </a>
      </ul>
    </section>
  );
}

export default Redes;
