"use client";
import Image from "next/image";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState, FC } from "react";
import Link from "next/link";


interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState('Login')

  return (
    <div>
      <Heading
        title="MK.Sons"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
      <Hero/>
      <Link className="text-white" href='/admin'>Go to Admin Dashboard</Link>

    </div>
  );
};

export default Page;
