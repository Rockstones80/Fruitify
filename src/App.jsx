import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Dynamic from "./pages/Dynamic";
import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
import AdminLayout from "./pages/AdminLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Dynamic />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin/*" element={<AdminLayout />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
