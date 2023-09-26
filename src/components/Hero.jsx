import { useEffect, useState } from "react";
import TypeText from "./TypingText";

export default function Hero() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="nav-hero">
        {/* <!-- navbar --> */}
        <section className="navbar" id="navbar">
          <nav
            className={`${
              isActive ? "navbar-scrolled" : ""
            } fixed dark:bg-gray-900 w-full z-20 top-0 left-0 dark:border-gray-600`}
            id="nav"
          >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="/" className="flex items-center">
                <img
                  src="../../public/logo.png"
                  className="h-8 mr-3"
                  alt="Logo"
                />
              </a>
              <div className="flex md:order-2">
                <a href="#contact">
                  <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    <i className="bx bx-paper-plane mr-2"></i>Send Message
                  </button>
                </a>

                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-white md:bg-transparent border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="/"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>

        {/* <!-- hero section start --> */}
        <section className="hero w-full pt-[200px] md:pt-[80px]" id="hero">
          <main>
            <div className="h-[620px] flex flex-col-reverse lg:flex-row items-center justify-between p-5">
              <div className="left mt-4 md:mt-0">
                <p className="i-am my-3">Hello, I am</p>
                {/* <h1 className="my-name">Muhammad Saroar</h1> */}
                <TypeText />
                <p className="my-designation my-2">Available to work</p>
                <p className="my-bio">
                  Need a professional Web Development Expert? I am here to
                  enhance your business that sales.
                </p>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <i className="bx bxs-cloud-download"></i> Download CV
                </button>
                <div className="flex items-center justify-start gap-5 mt-5 text-2xl">
                  <div className="text-[#1977F3]">
                    <a href="#">
                      <i className="bx bxl-facebook-circle"></i>
                    </a>
                  </div>
                  <div className="text-[#179CF0]">
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                  <div className="text-[#C0268D]">
                    <a href="#">
                      <i className="bx bxl-instagram-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right flex items-center justify-center">
                <img
                  src="../../public/main.png"
                  alt="Hero Img"
                  className="hero-img vert-move"
                />
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
