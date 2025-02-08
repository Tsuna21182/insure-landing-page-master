import Btn from "../Btn";

function Hero() {
  return (
    <section className="bg-DarkViolet text-VeryLightGray text-center bg-[url(/images/bg-pattern-intro-left-mobile.svg)] bg-no-repeat xl:bg-[url(/images/bg-pattern-intro-left-desktop.svg)]">
      <img
        src="/images/image-intro-mobile.jpg"
        alt="imagen hero"
        className="w-full xl:absolute xl:w-lg xl:top-50 xl:right-30 3xl:w-2xl 3xl:top-40 3xl:right-50"
      />

      <div className="p-8 mt-10 xl:ml-5 xl:mt-0 xl:py-30 xl:flex xl:flex-col xl:items-start xl:text-left xl:max-w-[750px] xl:h-[600px] 3xl:py-40 3xl:px-20 3xl:ml-40">
        <h2 className="font-display text-3xl xl:max-w-90 xl:text-5xl">
          Humanizing your insurance.
        </h2>
        <p className="font-body my-5 xl:text-xl">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that´s right for
          you. Ensure you and your loved ones are protected
        </p>
        <Btn
          name={"View plans"}
          className={
            "md:text-VeryLightGray md:border-VeryLightGray md:hover:bg-VeryLightGray md:hover:text-DarkViolet"
          }
        />
      </div>
    </section>
  );
}

export default Hero;
