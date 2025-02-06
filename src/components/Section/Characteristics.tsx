import Card from "../Card";
import Data from "../../Data/Db";

function Characteristics() {
  return (
    <section className="flex flex-col justify-center items-center text-center p-1.5 m-5">
      <div className="border-t-1 mt-20 mb-8 w-30 text-GrayishBlue"></div>
      <h2 className="text-4xl font-display">We´re different</h2>
      <div>
        {Data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Characteristics;
