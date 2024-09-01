import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Pages/AdminDashboard/Dashboard.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Packages_Dashboard from './Pages/AdminDashboard/ServicePackages/Packages_Dashboard.jsx'
import Add_Package from './Pages/AdminDashboard/ServicePackages/Add_Package.jsx'
import Cus_Details from './Pages/AdminDashboard/ManageCustomers/Customer_Details.jsx'
import Update_Package from './Pages/AdminDashboard/ServicePackages/Update_Package.jsx'
import App from './App.jsx';
import HomeNavbar from './components/NavBar/HomeNavbar.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';
import ChangePassword from './Pages/ChangePassword/ChangePassword.jsx';
import StoreNavbar from './components/NavBar/StoreNavbar.jsx';
import Packages from './Pages/CustomerSide/ServicePackages/Packages.jsx'
import PackageDetails from './Pages/CustomerSide/ServicePackages/PackageDetails.jsx'

const router = createBrowserRouter([


  // ======================== Client  Side=====================



  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword />,
  },
  {
    path: "/StoreNavbar",
    element: <StoreNavbar />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/packages/:id",
    element: <PackageDetails />,
  },



  // ======================== Admin Side=====================



  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dash_packages",
    element: <Packages_Dashboard />,
  },
  {
    path: "/packages/addpckg",
    element: <Add_Package />,
  },
  {
    path: "/cus_details",
    element: <Cus_Details />,
  },
  {
    path: "/packages/update",
    element: <Update_Package />,
  },
  {
    path: "/packages/update/:id",
    element: <Update_Package />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
