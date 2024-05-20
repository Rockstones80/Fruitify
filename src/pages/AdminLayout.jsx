import { Route, Routes } from "react-router-dom"
import Dashboard from "./admin/Dashboard"
import AdminNavbar from "./admin/AdminNavbar"
import AdminSidebar from "./admin/AdminSidebar"
import AdminProduct from "./admin/AdminProduct"
import Favourite from "./admin/Favourite"
import Inbox from "./admin/Inbox"
import OrderList from "./admin/OrderList"
import Stock from "./admin/Stock"

const AdminLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <AdminNavbar />
      <div className="flex gap-5 h-full">
        <AdminSidebar />
        <div className="flex-[5] bg-[#F5F6FA] p-3">
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='product' element={<AdminProduct />} />
            <Route path='favourites' element={<Favourite />} />
            <Route path='inbox' element={<Inbox />} />
            <Route path='order-list' element={<OrderList />} />
            <Route path='stock' element={<Stock />} />
          </Routes> 
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
{/* <Routes>
        <Route path='dashboard' element={<Dashboard />} />
      </Routes> */}