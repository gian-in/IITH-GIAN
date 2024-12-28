import React from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ScrollUp from "../../components/Common/ScrollUp";

const Contact = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName={"Contact"}
        description={"Contact for any queries or information about courses."}
      />
      <section id="contact" className="overflow-hidden py-4 md:py-8 lg:py-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div id="contact-local-coordinator" className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h3 className="mb-12 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Local Coordinator</h3>
                <div className="flex flex-col items-start space-x-0 lg:items-center lg:space-x-12 lg:flex-row">
                  <img
                    src="assets/anil.png"
                    alt="teacher"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded"
                  />
                  <div className="space-y-1 mt-4 lg:mt-0">
                    <h4 className="text-xl font-bold">Dr. Anil Agarwal</h4>
                    <p className="text-base">Local Coordinator</p>
                    <p className="text-base pt-2">Associate Professor</p>
                    <p className="text-base">Department of Civil Engineering</p>
                    <p className="text-base pb-2">Room B-221, IIT Hyderabad</p>
                    <p className="text-base">
                      Email:{" "}
                      <a
                        href="mailto:anil@ce.iith.ac.in"
                        className="text-primary hover:underline"
                      >
                        anil@ce.iith.ac.in
                      </a>
                    </p>
                    <p className="text-base">
                      Phone:{" "}
                      <a
                        href="tel:+91 (040) 2301 6312"
                        className="text-primary hover:underline"
                      >
                        +91 (040) 2301 6312
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="contact-postal-address" className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Address</h3>
                <p className="text-base">
                  Indian Institute of Technology Hyderabad, <br />
                  Area: Kandi (Village), <br />
                  Sangareddy (Mandal), <br />
                  Sangareddy (District), <br />
                  Telangana, <br />
                  India <br />
                  Pincode: 502284
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
