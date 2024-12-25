import React from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ScrollUp from "../../components/Common/ScrollUp";
import Guidelines from "../../components/Guidelines";

const GuidelinesPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb pageName={"Guidelines"} description={"GIAN Guidelines"} />
      <section
        id="objectives"
        className="overflow-hidden py-4 md:py-8 lg:py-10"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <Guidelines />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidelinesPage;
