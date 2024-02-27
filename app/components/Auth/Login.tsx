"use client";
import React, { FC, useEffect, useState } from "react";
import {AiFillGithub} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
  refetch:any;
};



const Login: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
 



  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with ELearning</h1>
      <form>
      <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
          // value={values.email}
          // onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${"border-gray-500"} ${
            styles.input
          }`} />
          <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            // value={values.password}
            // onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${
              "border-gray-500"
            } ${styles.input}`}
          />
          </div>
          <div className="w-full mt-5">
          <input type="submit" value="Login" className={`${styles.button}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2"
          />
          <AiFillGithub size={30} className="cursor-pointer ml-2 dark:text-white" />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] dark:text-white">
          Not have any account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign up
          </span>
          </h5>
      </form>
      <br/>
    </div>
  );
};

export default Login;
