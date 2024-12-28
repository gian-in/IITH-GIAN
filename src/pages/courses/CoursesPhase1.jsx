import React, { useEffect } from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import TableUI from "./TableUI";
// import { courses } from "./sampledata";
import ScrollUp from "../../components/Common/ScrollUp";
import axios from "axios";

const CoursesPhase1 = () => {
  const [courses, setCourses] = React.useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_FP2}/courses/1`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName={"Courses Phase 1"}
        description={
          "List of all the courses held at IITH for GIAN Phase 1"
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

export default CoursesPhase1;
