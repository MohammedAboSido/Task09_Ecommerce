import CartPage from "../pages/CartPage/CartPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import StorePage from "../pages/StorePage/StorePage";
import ViewProductPage from "../pages/ViewProductPage/ViewProductPage";
import { PATH } from "./../constants/index";

export const router = [
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.REGISTER, element: <RegisterPage /> },
  { path: PATH.MAIN, element: <MainPage /> },
  { path: PATH.PRODUCTS, element: <ProductsPage /> },
  { path: PATH.CART, element: <CartPage /> },
  { path: PATH.STORE, element: <StorePage /> },
  { path: PATH.PRODUCT, element: <ViewProductPage /> },
];
