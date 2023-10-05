function MobileView({ navbar }) {
  return (
    <ul
      className={
        !navbar
          ? "hidden"
          : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center font-bold"
      }
    >
      <li className="py-6 text-4xl hover:scale-110">
        <a href="/">Home</a>
      </li>
      <li className="py-6 text-4xl hover:scale-110">
        <a href="/about">About</a>
      </li>
      <li className="py-6 text-4xl hover:scale-110">
        <a href="/skills">Skills</a>
      </li>
      <li className="py-6 text-4xl hover:scale-110">
        <a href="/work">Work</a>
      </li>
      <li className="py-6 text-4xl hover:scale-110">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
}

export default MobileView;
