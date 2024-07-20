import React from "react";
import Heading from "../components/Heading";
import ButtonPrimary from "../components/ButtonPrimary";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    // <section
    //   id="contact"
    //   className="flex-col justify-center items-center text-white"
    // >
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-3xl mx-auto text-center mb-10 items-center flex-col flex">
    //       <Heading text="Contact Me" />
    //       <p className="text-sm md:text-lg mt-6">
    //         If you have any questions or would like to get in touch, please fill
    //         out the form below. I will get back to you as soon as possible.
    //       </p>
    //     </div>

    //     <div className="contactForm max-w-3xl mx-auto bg-primary  rounded-lg px-8 pt-6 pb-8 mb-4">
    //       <div className="mb-4">
    //         <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
    //           Get in touch
    //         </h3>
    //         <p className="text-sm md:text-lg text-center">
    //           Please fill out the form below to get in touch with me. I will get
    //           back to you as soon as possible.
    //         </p>
    //       </div>
    //       <form
    //         action="https://formsubmit.co/8d4a8f1a0c6c6b7e4f8b"
    //         method="POST"
    //         className="flex flex-col"
    //       >
    //         <div className="mb-4">
    //           <label htmlFor="name" className="text-lg font-medium mb-2">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             class="rounded-md p-2 w-full bg-dark text-white focus:outline-none focus:ring-1 focus:ring-accent"
    //             required
    //           />
    //         </div>

    //         <div className="mb-4">
    //           <label htmlFor="email" className="text-lg font-medium mb-2">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             className=" rounded-md p-2 w-full bg-dark text-white focus:outline-none focus:ring-1 focus:ring-accent"
    //             required
    //           />
    //         </div>

    //         <div className="mb-6">
    //           <label htmlFor="message" className="text-lg font-medium mb-2">
    //             Message
    //           </label>
    //           <textarea
    //             id="message"
    //             name="message"
    //             rows="4"
    //             className=" rounded-md p-2 w-full bg-dark text-white focus:outline-none focus:ring-1 focus:ring-accent"
    //             required
    //           ></textarea>
    //         </div>

    //         <ButtonPrimary text="Send Message" />
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <section id="Contact" className="h-max mb-28 ml-[780px] pl-24">
      <h1 className="head1">LET'S WORK</h1>
      <h1 className="head1 text-neutral-700 -mt-16"> TOGETHER</h1>
      <div className="">
        <div className="contactForm max-w-3xl bg-neutral-800  rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
              Get in touch
            </h3>
            <p className="text-sm md:text-lg text-center">
              Please fill out the form below to get in touch with me. I will get
              back to you as soon as possible.
            </p>
          </div>
          <form
            action="https://formsubmit.co/8d4a8f1a0c6c6b7e4f8b"
            method="POST"
            className="flex flex-col"
          >
            <div className="mb-4">
              <label htmlFor="name" className="text-lg font-medium mb-2">
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
              <label htmlFor="email" className="text-lg font-medium mb-2">
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
              <label htmlFor="message" className="text-lg font-medium mb-2">
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
            <div className="buttonCard group flex items-center w-fit self-center rounded-xl bg-[#141517] px-6 py-3" >

           <button className="group-hover:text-lime-400 transition-all ease-in-out"> Send Message</button>
           <FaPaperPlane className="ml-2 rotate-12 group-hover:rotate-0 transition-all ease-in-out group-hover:text-lime-400" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
