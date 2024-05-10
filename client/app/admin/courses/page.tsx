"use client";
import React from "react";
import Heading from "@/app/utils/Heading";
import AdminSideBar from '../../components/Admin/sidebar/AdminSidebar'
import AdminProtected from "@/app/hooks/adminProtected";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AllCourses from "@/app/components/Admin/Course/AllCourses";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Elearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSideBar/>
          </div>
          <div className="w-[85%]">
            <DashboardHero isDashboard={true} />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
