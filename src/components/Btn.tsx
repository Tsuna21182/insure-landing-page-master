type BtnProps = {
  name: string;
};

function Btn({ name }: BtnProps) {
  return (
    <button className="border border-VeryLightGray text-VeryLightGray uppercase font-body p-2 my-5 w-40 md:border-VeryDarkViolet md:text-DarkViolet md:w-40">
      {name}
    </button>
  );
}

export default Btn;
