import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Redux from "../assets/redux1.png";
import ReactRouterImg from "../assets/react-router.png";

function Skills() {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center">
          <p className="text-5xl sm:text-4xl font-bold inline border-b-4 border-stone-300">
            Skills
          </p>
        </div>
        <p className="py-4 text-2xl flex justify-center">
          These are the technologies I&apos;ve worked with.
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="javascript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
            <p className="my-4">ReactJs</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img className="w-20 mx-auto" src={Redux} alt="redux icon" />
            <p className="my-5">Redux</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img
              className="w-20 mx-auto my-5"
              src={ReactRouterImg}
              alt="react-router icon"
            />
            <p className="my-8">React Router</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-700 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
