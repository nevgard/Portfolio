import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    setIsLoading(true);
    setIsSuccess(false);
    setError("");

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw8L6Y80yPwIcqm7TalY8e-I9KVsgweaROR_jFGPvhaVMCjSszy5z3z49uQADk7mT_UFQ/exec', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.text(); // or response.json() based on your server's response

      console.log(result);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      setError('There was an error sending your message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: "some", once: true }}
      id="Contact"
      className="md:h-max mb-28 md:ml-[780px] md:pl-24 mt-24 md:mt-0"
    >
      <div className="text-center md:text-start">
        <h1 className="head1">LET'S WORK</h1>
        <h1 className="head1 text-neutral-700 -mt-16"> TOGETHER</h1>
      </div>
      <div className="px-6 md:px-0">
        <div className="contactForm max-w-3xl bg-neutral-800 rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
              Get in touch
            </h3>
            <p className="text-sm md:text-lg text-center">
              Please fill out the form below to get in touch with me. I will get
              back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="md:text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-md p-2 w-full bg-neutral-900 text-white focus:outline-none focus:ring-1 focus:ring-lime-400"
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
              <label htmlFor="message" className="md:text-lg font-medium mb-2">
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
            {isLoading && (
              <div className="text-center mb-4">
                <p>Loading...</p>
                {/* You can replace this with a spinner component */}
              </div>
            )}
            {isSuccess && !isLoading && (
              <div className="text-center mb-4 text-green-500">
                <p>Message sent successfully!</p>
              </div>
            )}
            {error && !isLoading && (
              <div className="text-center mb-4 text-red-500">
                <p>{error}</p>
              </div>
            )}
            <div className="buttonCard group flex items-center w-fit self-center rounded-xl bg-[#141517] px-6 py-3">
              <button type="submit" className="group-hover:text-lime-400 transition-all ease-in-out">
                Send Message
              </button>
              <FaPaperPlane className="ml-2 rotate-12 group-hover:rotate-0 transition-all ease-in-out group-hover:text-lime-400" />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
