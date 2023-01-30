import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "/dev-ed-wave.png";
import { useState } from "react";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 text-black md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-black font-burtons">DavidDeveloped</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl text-black"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8"
                  href="/resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              David Simpkins
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Web Developer</h3>
            <p className="text-md  py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Web Developer providing services of programming and design.
              <p>Take a peek down below.</p>
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={deved} layout="fill" objectFit="cover" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}
