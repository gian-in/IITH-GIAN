import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Courses2020 from "./pages/courses/Courses2020";
import Scrollup from "./components/Common/ScrollUp";
import Courses2015 from "./pages/courses/Courses2015";
import Courses2017 from "./pages/courses/Courses2017";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Scrollup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Navigate to="/courses/2020" />} />
          <Route path="/courses/2020" element={<Courses2020 />} />
          <Route path="/courses/2017-2019" element={<Courses2017 />} />
          <Route path="/courses/2015-2016" element={<Courses2015 />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog-details" element={<BlogDetails />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
