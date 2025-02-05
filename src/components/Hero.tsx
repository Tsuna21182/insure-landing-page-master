import Btn from "./Btn";

function Hero() {
  return (
    <section>
      <img
        src="/images/image-intro-mobile.jpg"
        alt="imagen hero"
        className="w-full"
      />

      <div className="bg-DarkViolet p-8 text-VeryLightGray text-center bg-[url(/images/bg-pattern-intro-left-mobile.svg)] bg-no-repeat">
        <h2 className="font-display text-3xl">Humanizing your insurance.</h2>
        <p className="font-body my-5">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that´s right for
          you. Ensure you and your loved ones are protected
        </p>
        <Btn name={"View plans"} />
      </div>
    </section>
  );
}

export default Hero;
