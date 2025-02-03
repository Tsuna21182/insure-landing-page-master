type BtnProps = {
  name: string;
};

function Btn({ name }: BtnProps) {
  return (
    <button className="border border-VeryLightGray text-VeryLightGray uppercase font-body p-2 mb-5 w-full md:border-VeryDarkViolet md:text-DarkViolet md:w-40">
      {name}
    </button>
  );
}

export default Btn;
