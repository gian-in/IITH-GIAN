import SectionTitle from "../Common/SectionTitle";
import latestCourses from "./sample";
import SingleCourse from "./SingleCourse";

const LatestCourses = () => {
  return (
    <section
      id="latest-courses"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Courses"
          paragraph="We offer a wide range of courses to help you grow your career. Here are some of our latest courses."
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
