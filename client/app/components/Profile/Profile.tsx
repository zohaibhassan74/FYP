"use client";
import React, { FC, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import {signOut} from "next-auth/react";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);
  const [logOut, setlogOut] = useState(false)
  const {} = useLogOutQuery(undefined, {
    skip: !logOut ? true : false,
  })

  const logouthandler = async () => {
    setlogOut(true)
    await signOut();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }
  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 light:bg-white bg-opacity-90 border dark:border-[#ffffff1d] border-[#100303f0] rounded-5px
        shadow-xl dark:shadow-sm mt-[80px] mb-[80px] sticky ${`scroll? "top-[120px]" : " top-[30px]`} left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logouthandler={logouthandler}
        />
      </div>
        {
          active === 1 && (
            <ProfileInfo avatar={avatar} user={user} />
          )
        }
               {
          active === 2 && (
            <ChangePassword />
          )
        }
    </div>
  );
};

export default Profile;
