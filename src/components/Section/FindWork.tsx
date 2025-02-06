import Btn from "../Btn";

function FindWork() {
  return (
    <section className="bg-DarkViolet bg-[url(/images/bg-pattern-how-we-work-mobile.svg)] bg-no-repeat bg-[13rem_-1rem] flex flex-col justify-center items-center text-center p-10 mx-5 my-20 h-80">
      <h2 className="font-display text-VeryLightGray text-4xl my-5">
        Find out more about how we work
      </h2>
      <Btn name={"how we work"} />
    </section>
  );
}

export default FindWork;
