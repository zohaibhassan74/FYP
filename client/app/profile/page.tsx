'use client'
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header';
import React, { FC, useState } from "react";
import Profile from '../components/Profile/Profile';
import { useSelector } from 'react-redux';

interface PageProps {} 

const Page: FC<PageProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  const {user} = useSelector((state: any) => state.auth);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user.name}'s Profile - Digitizing Education`}
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
      </Protected>
      <Profile user={user} />
    </div>
  );
};

export default Page;
