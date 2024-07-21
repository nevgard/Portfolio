import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
      <section id="Contact" className="md:h-max mb-28 md:ml-[780px] md:pl-24">
        <div className="text-center md:text-start">
          <h1 className="head1">LET'S WORK</h1>
          <h1 className="head1 text-neutral-700 -mt-16"> TOGETHER</h1>
        </div>
        <div className="px-6 md:px-0">
          <div className="contactForm max-w-3xl bg-neutral-800  rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                Get in touch
              </h3>
              <p className="text-sm md:text-lg text-center">
                Please fill out the form below to get in touch with me. I will
                get back to you as soon as possible.
              </p>
            </div>
            <form
              action="https://formsubmit.co/8d4a8f1a0c6c6b7e4f8b"
              method="POST"
              className="flex flex-col"
            >
              <div className="mb-4">
                <label htmlFor="name" className="md:text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="rounded-md p-2 w-full bg-neutral-900 text-white focus:outline-none focus:ring-1 focus:ring-lime-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="md:text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" rounded-md p-2 w-full bg-neutral-900 text-white focus:outline-none focus:ring-1 focus:ring-lime-400"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="md:text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className=" rounded-md p-2 w-full bg-neutral-900 text-white focus:outline-none focus:ring-1 focus:ring-lime-400"
                  required
                ></textarea>
              </div>
              <div className="buttonCard group flex items-center w-fit self-center rounded-xl bg-[#141517] px-6 py-3">
                <button className="group-hover:text-lime-400 transition-all ease-in-out">
                  {" "}
                  Send Message
                </button>
                <FaPaperPlane className="ml-2 rotate-12 group-hover:rotate-0 transition-all ease-in-out group-hover:text-lime-400" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;
