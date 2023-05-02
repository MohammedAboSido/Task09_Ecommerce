import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { PATH } from "./../constants/index";

export const router = [
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.REGISTER, element: <RegisterPage /> },
];
