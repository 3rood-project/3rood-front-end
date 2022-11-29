import NavBar from "./components/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shopProfile" element={<ShopProfile />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path="/userProfile/edit" element={<EditProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopLogin" element={<ShopLogin />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
