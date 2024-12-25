import React from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ScrollUp from "../../components/Common/ScrollUp";

const Objectives = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb pageName={"Objectives"} description={"GIAN Objectives"} />
      <section
        id="objectives"
        className="overflow-hidden py-4 md:py-8 lg:py-10"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="text-base mb-8 sm:text-base md:text-lg lg:text-lg">
                <p>
                  The Global Initiative on Academic Networks (GIAN) aims to
                  provide a platform for the best international experts to
                  interact with faculty and students in India to inspire ideas,
                  share knowledge, and motivate people to learn and work together
                  in a global environment. The GIAN program is designed to
                  catalyze higher education institutions in India to build
                  stronger academic and research collaborations with the best
                  institutions in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Objectives;
