import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { PATH } from "./../constants/index";

export const router = [
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.REGISTER, element: <RegisterPage /> },
  { path: PATH.MAIN, element: <MainPage /> },
];
