import React from "react";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen ">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-accent">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right md:text-4xl text-xl font-bold">
              <p>Hi. I'm Ahmad, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className="text-sm md:text-md ">
              I'm a 23-year-old Informatics Engineering graduate with a passion for web development and design. With a solid foundation in computer science and information technology, I've honed my skills in creating user-friendly interfaces and optimizing website performance. My experience includes front-end development during an internship at PT Publika Investa Karya and various projects like mobile apps and ecommerce websites. Proficient in HTML, CSS, JavaScript, React.js, Tailwind, and more, I'm always eager to learn and take on new challenges. Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
