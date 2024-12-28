import { Link } from "react-router-dom";

const Form = ({ course }) => {
  const { title, link, thumbnail, lastUpdated } = course;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-two duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link to={link} className="relative block aspect-[37/22] w-full">
          {/* <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span> */}
          <img
            src={`${
              import.meta.env.VITE_API_FP2
            }/forms/thumbnail/${thumbnail}`}
            alt="image"
            className="max-h-[300px] overflow-hidden w-full h-full object-cover object-top"
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              to={link}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            Last updated{" "}
            {new Date(lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
