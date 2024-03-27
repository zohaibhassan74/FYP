import React, { FC } from "react";
import Image from "next/image";
import avatarDefault from "../../../public/assests/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logouthandler: any;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logouthandler,
}) => {
  return (
    <div className=" w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? " dark:bg-slate-800 light:bg-white" : " bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar || avatar : avatarDefault}
          alt=""
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] c ursor-pointer rounded-full"
        />
        <h5 className=" pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          My Account
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
         active === 2 ? " bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} className=" dark:text-white text-black"/> 
        <h5 className="pl-2 font-Poppins dark:text-white text-black 800px:block hidden">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
         active === 3 ? " bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} className=" dark:text-white text-black"/> 
        <h5 className="pl-2 font-Poppins dark:text-white text-black 800px:block hidden">
          Enrolled Courses
        </h5>
      </div>
      {user.role === "admin" && (
        <Link
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
         active === 6 ? " bg-slate-800" : "bg-transparent"
        }`}
        href={"/admin"}
      >
        <MdOutlineAdminPanelSettings size={20} className=" dark:text-white text-black"/> 
        <h5 className="pl-2 font-Poppins dark:text-white text-black 800px:block hidden">
          Admin Dashboard
        </h5>
      </Link>
      )}
      
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
         active === 3 ? " bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => logouthandler()}
      >
        <AiOutlineLogout size={20} className=" dark:text-white text-black"/> 
        <h5 className="pl-2 font-Poppins dark:text-white text-black ">
          LogOut
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;



