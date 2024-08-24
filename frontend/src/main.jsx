import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Pages/Dashboard.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Packages_Dashboard from './Pages/Packages_Dashboard.jsx'
import Add_Package from './Pages/Add_Package.jsx'
import Cus_Details from './Pages/Customer_Details.jsx'
import Update_Package from './Pages/Update_Package.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/packages",
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

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
