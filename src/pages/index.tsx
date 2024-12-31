import { VscVscode } from "react-icons/vsc";
import { FaArrowLeft, FaArrowRight, FaPython, FaRegSquare, FaFile, FaCodeBranch, FaDocker, FaUserCircle, FaGitAlt, FaRobot, FaFolderPlus, FaJs } from "react-icons/fa";
import { MdOutlineClose, MdOutlineSearch } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { IoExtensionPuzzle, IoReloadOutline } from "react-icons/io5";
import Navbar from "@/components/nav";
import CodeBlock from "@/components/codeblock";
import { FaComputer, FaFileCirclePlus, FaGear } from "react-icons/fa6";
import { BiLogoKubernetes } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import { Project, ProjectProps } from "@/components/project";
import { Kalnia } from "next/font/google";
import Keyboard from "@/components/keyboard";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
const font = Kalnia({ subsets: ['latin'] })
function PythonCode () {
  return (
    <CodeBlock language="python">
      {`# Check out the other files
greet = "Hello, I am Kush Dhingra, I code stuff!"
print(greet)`}
    </CodeBlock>
  )
}

function JavascriptCode () {
  return (
    <CodeBlock language="javascript">
      {`const greet = "Hello, I am Kush Dhingra, I code stuff!"
console.log(greet)`}
    </CodeBlock>
  )
}

function TypescriptCode () {
  return (
    <CodeBlock language="typescript">
      {`const greet: string = "Hello, I am Kush Dhingra, I code stuff!"
console.log(greet)`}
    </CodeBlock>
  )
}
export default function Home() {
  const [Code, setCode] = useState<JSX.Element>(<PythonCode />);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/kushdhingra/projects/refs/heads/main/db.json")
    .then((response) => response.json())
    .then((data) => {
      setProjects(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div className="mt-[24rem]">
      <Navbar />
      <div className="animate-fadeIn hidden smol:flex w-[100vw] h-[100vh] flex-col items-center justify-center p-4 1024:flex">
        <div className="flex flex-row items-center gap-4 bg-black border-[#9a9a9a] border-4 w-[20vw] h-[3vh] ml-3 translate-y-1 border-b-0 z-index-[-1] rounded-t-[50rem]">
          <div className="w-[2vh] h-[2vh] rounded-full bg-red-500 relative translate-y-1 block mr-auto ml-auto">
            <div className="absolute top-0 left-1/2 w-full h-[2px] translate-y-[-4px] bg-red-500 transform -translate-x-1/2" />
          </div>
        </div>
        <div className="border-[#9a9a9a] border-2 border-t-4 border-b-0 shadow-[0_10px_20px_#00000080] transition-shadow duration-500 p-4 rounded-t-md w-[80vw] h-[100vh] bg-black">
          <div className="bg-[#11111b] w-full h-full flex flex-col">
            <div className="flex rounded-sm gap-4 w-full h-[5vh]">
              <div className="w-full h-[2vh] p-1 flex flex-row space-x-3 text-[15px]">
                <div className="w-fit h-fit p-1">
                  <VscVscode className="text-2xl text-[#24abf2]" />
                </div>
                <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1">File</button>
                <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1">Edit</button>
                <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1">Selection</button>
                <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1">•••</button>
                <div className="flex flex-row items-center justify-center mt-[15px]">
                  <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1 ml-2"><FaArrowLeft /></button>
                  <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1"><FaArrowRight /></button>
                </div>
                <div>
                  <button className="bg-[#1e1e2e] hover:text-[#cba6f7] hover:border-[#cba6f7] p-1 border-transparent border-2 w-[25vw] flex flex-row text-[15px] rounded-sm justify-center">
                    <MdOutlineSearch className="scale-x-[-1] text-1xl" />
                    <span className="text-[12px]">Portfolio</span>
                  </button>
                </div>
                <div className="flex flex-row items-center justify-end mt-[15px] w-full">
                <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1">•••</button>
                  <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1 ml-2"><RiSubtractFill /></button>
                  <button className="outline-none bg-transparent hover:bg-[#fff4] h-fit w-fit rounded-sm p-1"><FaRegSquare /></button>
                  <button className="outline-none bg-transparent hover:bg-[#f00] h-fit w-fit rounded-sm p-1"><MdOutlineClose /></button>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-start items-start w-full h-[70vh] gap-0">
              <div className="w-fit p-4 h-full flex-col pl-1 space-y-2 text-gray-200">
                <div>
                  <button className="text-[#cba6f7] text-2xl">
                    <FaFile />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaCodeBranch />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <IoExtensionPuzzle />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaPython />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaGitAlt />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaDocker />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <BiLogoKubernetes />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaRobot />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaUserCircle />
                  </button>
                </div>
                <div>
                  <button className="hover:text-[#cba6f7] text-2xl">
                    <FaGear />
                  </button>
                </div>

              </div>
              <div className="h-full w-fit p-2 bg-[#13131d] flex flex-col">
                <div className="text-[#cba6f7] text-2xlflex">
                  <div className="flex flex-row space-x-2">
                    <p className="flex flex-row">Explorer</p>
                    <button><FaFileCirclePlus /></button> <button><FaFolderPlus /></button> <button><IoReloadOutline /></button> <button><IoIosMore /></button>
                  </div>
                </div>
                <div className="h-full overflow-y-scroll cursor-hover">
                  <div onClick={() => {setCode(<PythonCode />)}} className="flex hover:bg-[#fff1] flex-row">
                    <button className="flex flex-row"><FaPython className="text-1xl mt-1 mr-2 text-blue-600" /> main.py</button>
                  </div>
                  <div onClick={() => {setCode(<JavascriptCode />)}} className="flex hover:bg-[#fff1] flex-row">
                    <button className="flex flex-row"><FaJs className="text-1xl mt-1 mr-2 text-yellow-400" /> index.js</button>
                  </div>
                  <div onClick={() => {setCode(<TypescriptCode />)}} className="flex hover:bg-[#fff1] flex-row">
                    <button className="flex flex-row"><SiTypescript className="text-1xl mt-1 mr-2 text-cyan-400" /> index.ts</button>
                  </div>
                </div>
              </div>
              <div className="h-full w-full bg-[#181825] border-gray-50 border-1">
                  {Code}
              </div>
            </div>
          </div>
        </div>
        <Keyboard />
      </div>
      <div className="animate-fadeIn flex smol:hidden w-[100vw] h-[100vh] flex-col text-center items-center absolute top-24">
        <div className="w-full h-full flex flex-col mt-20 animate-fadeIn">
            <h1 className={`${font.className} text-7xl text-white drop-shadow-sm shadow-white`}>Hello 👋, I am Kush</h1>    
            <em className="text-gray-200 text-xl">Coding with passion</em>
            <div className="flex flex-row w-full items-center justify-center gap-6 mt-4">
              <Link href="https://github.com/kushdhingra" className="cursor-hover p-2 bg-white drop-shadow-2xl backdrop-blur-md rounded-md flex flex-row justify-center items-center gap-2 text-black">
                <BsGithub /> View Github
              </Link>
              <Link href="#projects" className="cursor-hover p-2 bg-transparent border-white transition-colors duration-500 hover:bg-white hover:text-black border-[1.5px] drop-shadow-2xl backdrop-blur-md rounded-md flex flex-row justify-center items-center gap-2">
                <FaComputer /> View Projects
              </Link>
            </div>
        </div>
      </div>
      <div id="projects" className="w-[100vw] mt-[50vh] space-y-8 h-fit p-4 bg-transparent flex flex-col items-center">
        <div className="w-full text-center flex flex-col mt-20 animate-fadeIn">
            <h1 className={`${font.className} text-4xl text-white`}><FaComputer className="block mr-auto ml-auto" /> Projects</h1>    
        </div>
        <div className="flex gap-5 flex-row flex-wrap items-center justify-center">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              desc={project.desc}
              github={project.github}
              link={project.link}
              banner={project.banner}
            />
          ))
        ) : (
          <p className="text-white">Error while loading the projects, please try refreshing the page or contact kushdhingra3112@gmail.com</p>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
