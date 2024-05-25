// import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
// import React, { useEffect, useState } from "react";
// import Loader from "../Loader/Loader";
// import Heading from "@/app/utils/Heading";
// import Header from "../Header";
// import Footer from "../Footer";
// // import CourseDetails from "./CourseDetails";
// import {
//   useCreatePaymentIntentMutation,
//   useGetStripePublishablekeyQuery,
// } from "@/redux/features/orders/ordersApi";
// // import { loadStripe } from "@stripe/stripe-js";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

// type Props = {
//   id: string;
// };

// const CourseDetailsPage = ({ id }: Props) => {
//   const [route, setRoute] = useState("Login");
//   const [open, setOpen] = useState(false);
//   const { data, isLoading } = useGetCourseDetailsQuery(id);
//   // const { data: config } = useGetStripePublishablekeyQuery({});
//   // const [createPaymentIntent, { data: paymentIntentData }] =
//   //   useCreatePaymentIntentMutation();
//   // const { data: userData } = useLoadUserQuery(undefined, {});
//   // const [stripePromise, setStripePromise] = useState<any>(null);
//   // const [clientSecret, setClientSecret] = useState("");

//   // useEffect(() => {
//   //   if (config) {
//   //     const publishablekey = config?.publishablekey;
//   //     setStripePromise(loadStripe(publishablekey));
//   //   }
//   //   if (data && userData?.user) {
//   //     const amount = Math.round(data.course.price * 100);
//   //     createPaymentIntent(amount);
//   //   }
//   // }, [config, data, userData]);

//   // useEffect(() => {
//   //   if (paymentIntentData) {
//   //     setClientSecret(paymentIntentData?.client_secret);
//   //   }
//   // }, [paymentIntentData]);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div>
//           <Heading
//             title={data?.course.name + " - ELearning"}
//             description={
//               "ELearning is a programming community which is developed by shahriar sajeeb for helping programmers"
//             }
//             keywords={data?.course?.tags}
//           />
//           <Header
//             route={route}
//             setRoute={setRoute}
//             open={open}
//             setOpen={setOpen}
//             activeItem={1}
//           />
//           {/* {stripePromise && (
//             <CourseDetails
//               data={data.course}
//               stripePromise={stripePromise}
//               clientSecret={clientSecret}
//               setRoute={setRoute}
//               setOpen={setOpen}
//             />
//           )} */}
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseDetailsPage;

'use client'
import React, { useState } from "react";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError, error } = useGetCourseDetailsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  if (!data || !data.course) {
    return <div>No course details found.</div>;
  }

  return (
    <>
      <Heading
        title={data.course.name + " - ELearning"}
        description={
          "ELearning is a programming community which is developed by shahriar sajeeb for helping programmers"
        }
        keywords={data.course.tags}
      />
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={1}
      />
      <div>
        <h1>{data.course.name}</h1>
        <p>{data.course.description}</p>
        {/* Render other course details here */}
      </div>
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
