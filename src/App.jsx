import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Dynamic from "./pages/Dynamic";
import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
import AdminLayout from "./pages/AdminLayout";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Dynamic />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="admin/*" element={<AdminLayout />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
