import { Response } from "express";
import userModel from "../models/user.model";

export const getUserById = async (id: string, res: Response) => {
  const userJson = await userModel.findById(id)

  if (userJson) {
    const user = userJson;
    res.status(201).json({
      success: true,
      user,
    });
  }
};

export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    users,
  });
};

export const updateUserRoleService = async (res:Response,id: string,role:string) => {
  const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });

  res.status(201).json({
    success: true,
    user,
  });
}