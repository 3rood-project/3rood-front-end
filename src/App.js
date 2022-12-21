import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import {
  AuthProvider,
  RequireAuth,
  useAuthUser,
  useIsAuthenticated,
} from "react-auth-kit";

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Shops } from "./components/pages/Shops";
import ShopLogin from "./components/pages/ShopLogin";
import JoinUs from "./components/pages/JoinUs";
import { ShopProfile } from "./components/pages/ShopProfile";
import UserProfile from "./components/pages/UserProfile";
import OrderDetails from "./components/pages/OrderDetails";
import EditProfile from "./components/pages/EditProfile";
import { Cart } from "./components/pages/Cart";
import { Checkout } from "./components/pages/Checkout";
import { ShopOwner } from "./components/pages/ShopOwner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "./redusers/UserData";

function App() {
  //---------------------------------------------------------------------//
  // this code to fitch user information if he is isAuthenticated to make accusable every were
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated() && userData.length === 0) {
      dispatch(fetchUserProfile(auth().token));
    }
  }, []);
  //---------------------------------------------------------------------//
  return (
    <>
      <NavBar />
      <Routes>
        {/* ----------public routes----------- */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopLogin" element={<ShopLogin />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shopProfile/:shopName" element={<ShopProfile />} />
        {/* ----------user routes-------------- */}
        <Route
          path="/checkout"
          element={
            <RequireAuth loginPath={"/login"}>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/orderDetails/:id"
          element={
            <RequireAuth loginPath={"/login"}>
              <OrderDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/userProfile"
          element={
            <RequireAuth loginPath={"/login"}>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route path="/userProfile/edit" element={<EditProfile />} />
        {/* ----------shop routes-------------/ */}
        <Route path="/shopOwner" element={<ShopOwner />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
