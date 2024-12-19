import React from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import CoursesWrap from "./contentwrap";

const Courses2020 = () => {
  return (
    <>
      <Breadcrumb
        pageName={"Courses 2020"}
        description={"List of all the Courses for the year 2020"}
      />
      <CoursesWrap />
    </>
  );
};

export default Courses2020;
