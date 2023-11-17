import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Card from "./pages/Card";
import Details from "./pages/Details";
import Login from "./components/Login";
import Register from "./components/Register";
import Shipping from "./pages/Shipping";

function App() {
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
          {/* 
          <Route path="/products?" element={<CategoryShops />} />
          <Route path="/products/search?" element={<SearchProducts />} />
          <Route path="/order/confirm?" element={<ConfirmOrder />} />
          <Route path="/payment" element={<Payment />} />
          */}

          {/* <Route path="/dashboard" element={<ProtectUser />}>
            <Route path="" element={<Dashboard />}>
              <Route path="" element={<Index />} />
              <Route path="my-orders" element={<Orders />} />
              <Route path="my-wishlist" element={<Wishlist />} />
              <Route path="order/details/:orderId" element={<Order />} />
              <Route path="chage-password" element={<ChangePassword />} />
              <Route path="chat" element={<Chat />} />
              <Route path="chat/:sellerId" element={<Chat />} />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
