import latestCourses from "./sample";
import SingleCourse from "./SingleCourse";

const Guidelines = () => {
  return (
    <section id="guidelines" className="py-4 md:py-8 lg:py-12 relative z-10">
      <div className="mb-20" id="guidelines">
        <h3 className="text-2xl mb-8 font-bold text-gray-800 md:text-2xl lg:text-3xl">
          Guidelines
        </h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {latestCourses.map((course) => (
            <div key={course.id} className="w-full">
              <SingleCourse course={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12" id="forms">
        <h3 className="text-2xl mb-8 font-bold text-gray-800 md:text-2xl lg:text-3xl">
          Forms
        </h3>
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

export default Guidelines;
