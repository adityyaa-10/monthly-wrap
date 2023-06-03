import React from 'react'
import ReactDOM from 'react-dom/client'
import 'flowbite';
import 'flowbite-react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateBlog from './pages/CreateBlog'
import ContactUs from './pages/ContactUs';
import UserDashboard from './pages/UserDashboard';
import EditUserProfile from './pages/EditUserProfile';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create",
    element: <CreateBlog />
  },
  {
    path: "/contact",
    element: <ContactUs />
  },
  {
    path: "/userdashboard",
    element: <UserDashboard />
  },
  {
    path: "/editprofile",
    element: <EditUserProfile />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-primary font-poppins'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
