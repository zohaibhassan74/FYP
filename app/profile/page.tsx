'use client'
import React, { FC, useState } from "react";

import Heading from "../utils/Heading";
import Header from "../components/Header";
import { useSelector } from "react-redux";

type Props = {};

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const {user} = useSelector((state:any) => state.auth);

  return (
    <div className="min-h-screen">
        <Heading
          title={`${user?.name} profile - Elearning`}
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
        <Footer />
    
    </div>
  );
};

export default Page;
