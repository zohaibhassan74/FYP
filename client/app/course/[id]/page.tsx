'use client'
import React from "react";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import { useEffect, useState } from "react";
import Loader from "@/app/components/Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CourseDetails from "@/app/components/Course/CourseDetails";
import { useParams } from "next/navigation";
// import CourseDetailsPage from "@/app/components/Course/CourseDetailsPage";


type Props = {
  };
  

const Page = () => {
    const params = useParams()
    console.log(params , "params")
    const { id } = params
    const courseID = Array.isArray(id) ? id[0] : id;  
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useGetCourseDetailsQuery(courseID); 
    

    return (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <Heading
                title={data?.course?.name + " - ELearning"}
                description={
                  "ELearning is a programming community which is developed by shahriar sajeeb for helping programmers"
                }
                keywords={data?.course?.tags}
              />
              <Header
                route={route}
                setRoute={setRoute}
                open={open}
                setOpen={setOpen}
                activeItem={1}
              />
              <CourseDetails data={data?.course} setRoute={setRoute} setOpen={setOpen}/>
              {/* {stripePromise && (
                <CourseDetails
                  data={data.course}
                  stripePromise={stripePromise}
                  clientSecret={clientSecret}
                  setRoute={setRoute}
                  setOpen={setOpen}
                />
              )} */}
              <Footer />
            </div>
          )}
        </>
      );
    };


export default Page;
 