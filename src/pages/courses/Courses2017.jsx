import React from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import TableUI from "./TableUI";
import { courses } from "./sampledata";
import ScrollUp from "../../components/Common/ScrollUp";

const Courses2017 = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName={"Courses 2017 - 2019"}
        description={
          "List of all the courses held at IITH for the year 2017 - 2019"
        }
      />
      <section id="contact" className="overflow-hidden py-4 md:py-8 lg:py-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <TableUI courses={courses} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses2017;
