import React from "react";

const Contact = () => {
  return (
    <div className="flex  h-screen w-screen flex-col items-center gap-10 py-16">
      <div className="flex w-full max-w-sm space-x-3">
        <div className="m-auto mt-10 w-full max-w-2xl rounded-lg bg-white px-5 py-10 ">
          <div className="mb-6 text-center font-Inter text-3xl font-medium text-gray-800">
            Contact me
          </div>
          <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="w-full flex-1 appearance-none rounded-md border border-gray-300 border-transparent bg-white py-2 px-4 font-Roboto text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                id="contact-form-email"
                className="w-full flex-1 appearance-none rounded-md border border-gray-300 border-transparent bg-white py-2 px-4 font-Roboto text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="w-full flex-1 appearance-none rounded-md border border-gray-300 border-transparent bg-white py-2 px-4 font-Roboto text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  id="comment"
                  placeholder="Message"
                  name="comment"
                  rows={5}
                  cols={40}
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="w-full rounded-md  bg-sky-400 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-500 focus:outline-none"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
