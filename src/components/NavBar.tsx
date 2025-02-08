function NavBar() {
  return (
    <nav className=" text-VeryLightGray flex flex-col gap-5 p-5 uppercase font-body md:text-DarkGrayishViolet md:flex-row md:items-center md:gap-10">
      <a href="#" className="hover:font-bold">
        how we work
      </a>
      <a href="#" className="hover:font-bold">
        blog
      </a>
      <a href="#" className="hover:font-bold">
        Account
      </a>
    </nav>
  );
}

export default NavBar;
