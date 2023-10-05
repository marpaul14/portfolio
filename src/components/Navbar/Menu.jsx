function Menu() {
  return (
    <ul className="hidden font-bold text-md md:flex">
      <li className=" hover:bg-gray-500 hover:scale-110">
        <a href="/">Home</a>
      </li>
      <li className=" hover:bg-gray-500 hover:scale-110">
        <a href="/about">About</a>
      </li>
      <li className=" hover:bg-gray-500 hover:scale-110">
        <a href="/skills">Skills</a>
      </li>
      <li className=" hover:bg-gray-500 hover:scale-110">
        <a href="/work">Work</a>
      </li>
      <li className=" hover:bg-gray-500 hover:scale-110">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
}

export default Menu;
