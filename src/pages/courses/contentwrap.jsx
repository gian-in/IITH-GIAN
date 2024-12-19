import TableUI from "./TableUI";
import { courses } from "./sampledata";

const CoursesWrap = () => {
  return (
    <section id="contact" className="overflow-hidden py-4 md:py-8 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <TableUI courses={courses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesWrap;
