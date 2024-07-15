import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <header className="bg-primary bg-opacity-85 sticky top-0 left-0 w-full flex items-center z-10 justify-center">
        <div className="container">
          <div className="flex items-center justify-center relative">
            {/* <div className="px-4">
              <a href="#home" className="font-bold text-lg  block py-6">
                Ahmad Fahmi Faza
              </a>
            </div> */}
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
                onClick={toggleMenu}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className={`${
                  menuOpen ? 'block' : 'hidden'
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#" className="text-base  py-2 mx-8 flex group-hover:text-primary">
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a href="#about" className="text-base  py-2 mx-8 flex group-hover:text-primary">
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className="text-base  py-2 mx-8 flex group-hover:text-primary">
                      Projects
                    </a>
                  </li>
                  <li className="group">
                    <a href="#techStack" className="text-base  py-2 mx-8 flex group-hover:text-primary">
                      Tech Stack
                    </a>
                  </li>
                  <li className="group">
                    <a href="#collaboration" className="text-base  py-2 mx-8 flex group-hover:text-primary">
                      Collaboration
                    </a>
                  </li>
                  <li className="group">
                    <a href="#contact" className="text-base  py-2 mx-8 flex group-hover:text-primary">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbar
