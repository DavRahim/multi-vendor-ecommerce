import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Card from "./pages/Card";
import Details from "./pages/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import Shipping from "./pages/Shipping";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_category } from "./store/Reducers/homeReducer";
import CategoryShop from "./pages/CategoryShop";
import SearchProducts from "./pages/SearchProducts";
import Payment from "./pages/Payment";
import ProtectUser from "./utils/ProtectUser";
import Dashboard from "./pages/Dashboard";
import Index from "./components/dashboard/Index";
import Orders from "./components/dashboard/Orders";
import Wishlist from "./components/dashboard/Wishlist";
import ChangePassword from "./components/dashboard/ChangePassword";
import Order from "./components/dashboard/Order";
import {
  get_card_products,
  get_wishlist_products,
} from "./store/Reducers/cardReducer";
import Chat from "./components/dashboard/Chat";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(get_category());
  }, [dispatch]);
  useEffect(() => {
    dispatch(get_card_products(userInfo?.id));
  }, [userInfo, dispatch]);
  useEffect(() => {
    dispatch(get_wishlist_products(userInfo.id));
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/card" element={<Card />} />
          <Route path="/product/details/:slug" element={<Details />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/products?" element={<CategoryShop />} />
          <Route path="/products/search?" element={<SearchProducts />} />
          <Route path="/payment" element={<Payment />} />

          {/* 
          <Route path="/order/confirm?" element={<ConfirmOrder />} />
          */}

          <Route path="/dashboard" element={<ProtectUser />}>
            <Route path="" element={<Dashboard />}>
              <Route path="" element={<Index />} />
              <Route path="my-orders" element={<Orders />} />
              <Route path="my-wishlist" element={<Wishlist />} />
              <Route path="chage-password" element={<ChangePassword />} />
              <Route path="order/details/:orderId" element={<Order />} />
              <Route path="chat" element={<Chat />} />
              <Route path="chat/:sellerId" element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
