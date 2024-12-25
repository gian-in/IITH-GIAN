import SectionTitle from "../Common/SectionTitle";
import latestCourses from "./sample";
import SingleCourse from "./SingleCourse";

const LatestCourses = () => {
  return (
    <section
      id="latest-courses"
      className="bg-gray-light dark:bg-bg-color-dark py-32 md:py-36 lg:py-40 relative z-10"
    >
      <div className="container">
        <SectionTitle
          title="Latest Courses at IITH"
          paragraph="Here are some of the latest courses."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {latestCourses.map((course) => (
            <div key={course.id} className="w-full">
              <SingleCourse course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;
