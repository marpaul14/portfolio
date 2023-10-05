function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="bg-gray-800 border-y-2">
          <div className="max-w-[1000px] w-full flex justify-center gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className=" text-7xl sm:text-6xl font-bold inline border-b-4 border-stone-300">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
            <div className="text-5xl font-bold sm:text-right hover:bg-gray-700 hover:cursor-default">
              <p>
                Hi, Nice to meet you!
                <br /> Please take a look around.
              </p>
            </div>
            <div className="text-lg hover:bg-gray-700 hover:cursor-default">
              <p>
                My goal is to secure an entry-level to mid-level front-end web
                developer position where I can continue to refine my skills,
                learn from experienced professionals, and contribute to creating
                visually stunning and highly functional web applications. I am
                dedicated to staying current with industry trends and best
                practices, especially in the realm of React.js, to excel in this
                ever-evolving field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
