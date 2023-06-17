import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Bounce, Rotate, Slide, Zoom } from "react-awesome-reveal";

const ContactUs = () => {
  return (
    <>
      <div className="w-full md:w-3/4 mx-auto">
        <section className="text-gray-600 body-font">
          <div className="">
            <div className="flex flex-col text-center w-full  px-5 md:px-0 mb-10  lg:mb-20">
              <h1 className="text-4xl text-center font-bold my-8">
                Contact with learn language School
              </h1>
            </div>
            <div className="md:flex px-5 md:px-0 flex-wrap justify-between gap-6  md:space-y-0 space-y-6">
              <Slide direction="left" cascade damping={0.1}>
                <div className="w-full lg:w-72 py-8 flex flex-col text-center items-center shadow-lg rounded-lg">
                  <div
                    className="w-20 h-20 inline-flex items-center justify-center rounded-full
                   bg-sky-400 text-slate-900 mb-5 flex-shrink-0">
                    <FiMapPin className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-700 text-2xl title-font font-bold mb-3">
                      Address
                    </h2>
                    <p className="leading-relaxed text-base">
                      Dhaka-1289, Bangladesh
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide direction="left" cascade damping={0.1} delay={200}>
                <div className="w-full lg:w-72 py-8 flex flex-col text-center items-center shadow-lg rounded-lg">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-sky-400 text-slate-900 mb-5 flex-shrink-0">
                    <FiPhone className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-700 text-2xl title-font font-bold mb-3">
                      Phone No
                    </h2>
                    <p className="leading-relaxed text-base">0176660000</p>
                  </div>
                </div>
              </Slide>
              <Slide direction="left" cascade damping={0.1} delay={400}>
                <div className="w-full lg:w-72 py-8 flex flex-col text-center items-center shadow-lg rounded-lg">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-sky-400 text-slate-900 mb-5 flex-shrink-0">
                    <FiMail className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-700 text-2xl title-font font-bold mb-3">
                      Email / Website
                    </h2>
                    <p className="leading-relaxed text-base">
                      info@learnlanguage School.com
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 pb-24 pt-10 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="text-4xl text-center font-bold my-8">
                Send Us a Message
              </h1>
            </div>
            <div className="w-full mx-auto">
              <div className="flex flex-col md:flex-row flex-wrap -m-2">
                <div className="p-2 w-full md:w-1/2">
                  <Zoom>
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </Zoom>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <Zoom>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </Zoom>
                </div>
                <div className="p-2 w-full">
                  <Zoom>
                    <div className="relative">
                      <label
                        htmlFor="subject"
                        className="leading-7 text-sm text-gray-600">
                        Subject (optional)
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </Zoom>
                </div>
                <div className="p-2 w-full">
                  <Bounce>
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={""}
                      />
                    </div>
                  </Bounce>
                </div>
                <div className="p-2 w-full">
                  <Rotate>
                    <button className="flex mx-auto btn-gray">Submit</button>
                  </Rotate>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
