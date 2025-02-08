function Redes() {
  return (
    <section className="w-full flex flex-col text-center items-center md:flex-row md:justify-around xl:justify-between xl:px-30 xl:gap-0">
      <div>
        <img src="/images/logo.svg" alt="imagen logo" className="w-35" />
      </div>

      <ul className="flex items-center my-10 gap-5">
        <a href="">
          <img
            src="/images/icon-facebook.svg"
            alt="icono redes"
            className="w-8 md:hover:scale-125 transition-all duration-200"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-twitter.svg"
            alt="icono redes"
            className="w-8 md:hover:scale-125 transition-all duration-200"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-pinterest.svg"
            alt="icono redes"
            className="w-8 md:hover:scale-125 transition-all duration-200"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-instagram.svg"
            alt="icono redes"
            className="w-8 md:hover:scale-125 transition-all duration-200"
          />
        </a>
      </ul>
    </section>
  );
}

export default Redes;
