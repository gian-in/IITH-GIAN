import React, { useEffect } from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ScrollUp from "../../components/Common/ScrollUp";
import axios from "axios";
import parse from "html-react-parser";

const Objectives = () => {
  const [objectives, setObjectives] = React.useState(null || "");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_FP2}/objectives`)
      .then((response) => {
        setObjectives(response.data.objectives);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
            <div className="w-full px-4 lg:px-12">
              <div className="text-base mb-8 sm:text-base md:text-lg lg:text-lg">
                <div className="prose max-w-none prose-lg md:prose-base sm:prose-sm lg:prose-lg">
                  {parse(objectives)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Objectives;
