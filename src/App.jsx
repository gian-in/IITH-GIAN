import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Courses2020 from "./pages/courses/Courses2020";
import Courses2015 from "./pages/courses/Courses2015";
import Courses2017 from "./pages/courses/Courses2017";
import Contact from "./pages/contact/Contact";
import Objectives from "./pages/objectives/Objectives";
import Guidelines from "./pages/guidelines/Guidelines";
import ErrorPage from "./pages/error/page";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Navigate to="/courses/2020" />} />
          <Route path="/courses/2020" element={<Courses2020 />} />
          <Route path="/courses/2017-2019" element={<Courses2017 />} />
          <Route path="/courses/2015-2016" element={<Courses2015 />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guidelines-forms" element={<Guidelines />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
