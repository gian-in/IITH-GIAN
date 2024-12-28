import { Link } from "react-router-dom";

const SingleCourse = ({ course, isEmpty }) => {
  if (isEmpty) {
    return (
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <div className="relative block aspect-[37/22] w-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="mb-4 block text-lg font-bold  dark:bg-gray-600 sm:text-lg">
            Please watch this space for upcoming courses
          </h3>
        </div>
      </div>
    );
  }
  const { courseName , thumbnail , startDate, endDate, brochureLink, courseCoordinator } = course;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          to={brochureLink}
          target="_blank"
          className="relative block aspect-[37/22] w-full"
        >
          {/* <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span> */}
          <img
            src={`${import.meta.env.VITE_API_FP1}/courses/thumbnail/${thumbnail}`}
            alt="image"
            className="object-fill"
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              to={brochureLink}
              target="_blank"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {courseName}
            </Link>
          </h3>
          <p className="mb-4 text-lg font-medium text-body dark:text-white">
            Course Coordinator : {courseCoordinator}
          </p>
          <p className="pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
