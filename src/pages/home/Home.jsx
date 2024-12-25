// import { useState } from "react";
// import SectionTitle from "../../components/Common/SectionTitle";
import LatestCourses from "../../components/LatestCourses";
import ScrollUp from "../../components/Common/ScrollUp";

const Home = () => {
  return (
    <>
    <ScrollUp />
    {/* <section className="relative z-10 py-16 md:py-20 lg:py-28 lg:mt-12 md:mt-8 mt-4">
      <div className="container">
        <SectionTitle
          title="Welcome to GIAN IIT Hyderabad"
          paragraph="Global Initiative of Academic Networks (GIAN) is a Government of India initiative to tap the talent pool of scientists and entrepreneurs internationally to encourage their engagement with the institutes of Higher Education in India so as to augment the country's existing academic resources, accelerate the pace of quality reform, and elevate India's scientific and technological capacity to global excellence."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center grid">
                <img src="/images/giancert.jpg" alt="GIAN Inaugural Poster"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section> */}
    <LatestCourses />
    </>
  );
};

export default Home;
