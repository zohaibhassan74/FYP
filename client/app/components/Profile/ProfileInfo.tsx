"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import avatarIcon from "../../../public/assests/avatar.png";
import { AiOutlineCamera } from "react-icons/ai";
import { styles } from "@/app/styles/style";
import { useUpdateAvatarMutation } from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useEditProfileMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);
  const [loadUser, setLoadUser] = useState(false);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [editProfile, { isSuccess: success, error: updateError }] =
    useEditProfileMutation();
  const {} = useLoadUserQuery(undefined, {
    skip: loadUser ? false : true,
  });

  //   const imageHandler = async (e:any) => {
  //     const fileReader = new FileReader();

  //     fileReader.onload = () => {
  //         if(fileReader.readyState === 2){
  //             const avatar = fileReader.result
  //             updateAvatar({
  //                 avatar,
  //             })
  //         }
  //     }
  //     fileReader.readAsDataURL(e.target.files[0])
  //   };

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        // Check if the result is a string (image data)
        if (typeof fileReader.result === "string") {
          const avatar = fileReader.result; // Assuming data is a string
          updateAvatar({ avatar }); // Send avatar data to the mutation
        } else {
          console.error("Error: Invalid file type or reading error");
          // Handle the error gracefully, e.g., display an error message to the user
        }
      }
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoadUser(true);
    }
    if (error) {
      console.log(error || updateError);
    }
    if (success) {
      toast.success("Profile updated successfully");
    }
  }, [isSuccess, error, success, updateError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    editProfile({
      name,
    });
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt=""
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39A] rounded-full"
          />

          <input
            type="file"
            name=""
            id="avatar"
            className="hidden absolute"
            onChange={imageHandler}
            accept="image/png, image/jpeg, image/jpg, image/webp"
          />
          <label htmlFor="avatar">
            <div
              className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex
             items-center justify-center cursor-pointer"
            >
              <AiOutlineCamera size={20} className="z-1" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className=" w-full">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label className=" block pb-2">Name</label>
              <input
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[100%] pb-2">
              <label className=" block pb-2">Email Address</label>
              <input
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                type="text"
                readOnly
                required
                value={user?.email}
              />
            </div>
            <input
              className={`w-full 800px:w-[250px] h-[40px] border border-[#37a39A] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
              required
              value="Update"
              type="submit"
            />
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default ProfileInfo;
