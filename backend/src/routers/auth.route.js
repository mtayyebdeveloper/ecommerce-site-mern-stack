import express from "express";
import { UserVerify } from "../middlewares/verify.middleware.js";
import { upload } from "../middlewares/uploadFile.middleware.js";
import {
  LoginController,
  LogoutController,
  SignUpController,
  createUserInfoController,
  createUserOrderController,
  deleteUserInfoController,
  getUserController,
  getUserInfoController,
  getUserOrdersController,
  updateUserController,
  updateUserInfoController,
  updateUserPasswordController,
} from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.route("/login").post(UserVerify, LoginController);
AuthRouter.route("/signup").post(
  UserVerify,
  upload.single("file"),
  SignUpController
);
AuthRouter.route("/logout").get(UserVerify, LogoutController);
AuthRouter.route("/createinfo").post(UserVerify, createUserInfoController);
AuthRouter.route("/createorder").post(UserVerify, createUserOrderController);
AuthRouter.route("/deleteinfo").delete(UserVerify, deleteUserInfoController);
AuthRouter.route("/getuser").get(UserVerify, getUserController);
AuthRouter.route("/getinfo").get(UserVerify, getUserInfoController);
AuthRouter.route("/getorders").get(UserVerify, getUserOrdersController);
AuthRouter.route("/updateuser").patch(
  UserVerify,
  upload.single("file"),
  updateUserController
);
AuthRouter.route("/updateinfo/:id").patch(UserVerify, updateUserInfoController);
AuthRouter.route("/updatepassword").patch(
  UserVerify,
  updateUserPasswordController
);

export default AuthRouter;
