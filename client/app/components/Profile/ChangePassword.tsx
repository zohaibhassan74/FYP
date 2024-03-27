import React, { FC, useState, useEffect } from "react";
import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword,{isSuccess, error}] = useUpdatePasswordMutation();


  useEffect(() => {
    if (isSuccess) {
      toast.success("Password updated successfully");
    }
    if (error) {
      console.log(error );
    }
  }, [isSuccess, error]);

  const submitHandler = (e : any) => {
    e.preventDefault();
    if(newPassword !== confirmPassword)
    {
      toast.error("Password does not match");
    }else {
      updatePassword({
        oldPassword,
        newPassword,
      })
    }
  };
  return (
    <div className="w-full pl-7 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500]  text-black dark:text-[#fff] pb-2 mt-3">
        Change Password
      </h1>
      <div className=" w-full">
        <form 
        aria-required
        onSubmit={submitHandler}
        className="flex flex-col items-center"
        >
         <div className="w-[100%] 800px:w-[60%] mt-5">
            <label className=" block pb-2  text-black dark:text-[#fff]">Enter your old Password</label>
            <input
            type="password"
            className={`${styles.input} !w-[95%] mb-4 800px:mb-0 `}
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            />
         </div>
         <div className="w-[100%] 800px:w-[60%] mt-5">
            <label className=" block pb-2  text-black dark:text-[#fff]">Enter your New Password</label>
            <input
            type="password"
            className={`${styles.input} !w-[95%] mb-4 800px:mb-0 `}
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            />
         </div>
         <div className="w-[100%] 800px:w-[60%] mt-5">
            <label className=" block pb-2  text-black dark:text-[#fff]">Confirmed your Password</label>
            <input
            type="password"
            className={`${styles.input} !w-[95%] mb-4 800px:mb-0 `}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
            className="w-full 800px:w-[250px] h-[40px] border border-[#37a39A] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer" 
            required
            value={'update'}
            type="submit"
            />
         </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
