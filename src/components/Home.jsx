// import MyPic from "../assets/picture.jpg";

function Home() {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 text-2xl sm:text-4xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white hover:text-blue-200 ">
          Marpaul Jay Bunani
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-gray-300">
          I&apos;m a Frontend Web Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px] text-2xl sm:text-3xl">
          I&apos;m on a mission to transform ideas into pixel-perfect realities.
          <br /> With a strong foundation in HTML, CSS, JavaScript and React.
        </p>
        {/* <span className="float-right">
          <img src={MyPic} alt="my photo" style={{ width: "100px" }} />
        </span> */}
        {/* <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-stone-400 hover:border-stone-400">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
