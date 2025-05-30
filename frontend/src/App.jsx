/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/page";
import Home from "./pages/home/page";
import SkillsPage from "./partials/skills/page";
import Footer from "./components/footer/page";
import Login from "./authentication/login/page";
import Register from "./authentication/register/page";
import ViewPlans from "./partials/plans/viewplans/page";
import SkillPlan from "./partials/plans/skillplan/page";
import CloudPlan from "./partials/plans/cloudplan/page";
import Blog from "./partials/blogs/page";
import DetailBlogs from "./partials/blogs/detailblogs/page";
import CloudGuru from "./partials/cloudguru/page";
import Courses from "./partials/courses/page";
import Course from "./routes/course/page";
import Success from "./purchasemode/success/page";
import Cancel from "./purchasemode/cancel/page";
import Dashboard from "./dashboard/page";

import Users from "./dashboard/dashboardPartials/users";
import Layout1 from './dashboard/dashboardPartials/dashboard'
import CreateCourse from './dashboard/dashboardPartials/courses/createCourse'
import EditCourse from './dashboard/dashboardPartials/courses/courses'

function App() {
  const location = useLocation();
  const dashboardPaths = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!dashboardPaths && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewplans" element={<ViewPlans />} />
        <Route path="/skillsplan" element={<SkillPlan />} />
        <Route path="/cloudplan" element={<CloudPlan />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/moreblogs" element={<DetailBlogs />} />
        <Route path="/cloudguru" element={<CloudGuru />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        {/* Dynamic Routes */}
        <Route path="/course/:slug" element={<Course />} />

        {/* Dashboard Route */}
        <Route element={<Dashboard />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Layout1 />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/createCourse" element={<CreateCourse />} />
          <Route path="/dashboard/editCourse" element={<EditCourse />} />
        </Route>
      </Routes>

      {!dashboardPaths && <Footer />}
    </>
  );
}

export default App;
