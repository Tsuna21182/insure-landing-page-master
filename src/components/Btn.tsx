type BtnProps = {
  name: string;
  className?: string;
};

function Btn({ name, className }: BtnProps) {
  return (
    <button
      className={`border border-VeryLightGray text-VeryLightGray uppercase font-body p-2 my-5 w-40 md:border-VeryDarkViolet md:text-DarkViolet md:w-40 cursor-pointer ${className} transition-all duration-200`}
    >
      {name}
    </button>
  );
}

export default Btn;
