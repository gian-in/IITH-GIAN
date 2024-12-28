import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import CoursesPhase3 from "./pages/courses/CoursesPhase3";
import CoursesPhase1 from "./pages/courses/CoursesPhase1";
import CoursesPhase2 from "./pages/courses/CoursesPhase2";
import Contact from "./pages/contact/Contact";
import Objectives from "./pages/objectives/Objectives";
import Guidelines from "./pages/guidelines/Guidelines";
import ErrorPage from "./pages/error/page";
import CoursesPhase4 from "./pages/courses/CoursesPhase4";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Navigate to="/courses/phase4" />} />
          <Route path="/courses/phase4" element={<CoursesPhase4 />} />
          <Route path="/courses/phase3" element={<CoursesPhase3 />} />
          <Route path="/courses/phase2" element={<CoursesPhase2 />} />
          <Route path="/courses/phase1" element={<CoursesPhase1 />} />
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
