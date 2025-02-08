import Btn from "../Btn";

function FindWork() {
  return (
    <section className="bg-DarkViolet bg-[url(/images/bg-pattern-how-we-work-mobile.svg)] bg-no-repeat bg-[13rem_-1rem] flex flex-col justify-center items-center text-center p-10 mx-5 my-20 h-80 xl:flex-row xl:justify-between xl:p-20 xl:h-60 xl:text-left xl:mx-25">
      <h2 className="font-display text-VeryLightGray text-4xl my-5 xl:w-80">
        Find out more about how we work
      </h2>
      <Btn
        name={"how we work"}
        className={
          "md:text-VeryLightGray md:border-VeryLightGray md:hover:bg-VeryLightGray md:hover:text-DarkViolet"
        }
      />
    </section>
  );
}

export default FindWork;
