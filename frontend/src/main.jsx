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
import App from './App';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import FullBlogPage from './components/FullBlogPage';
import ForgotPassword from './pages/ForgotPassword';
import NotFoundPage from './components/NotFoundPage';
import AddProject from './pages/AddProject';
import ComingSoonPage from './pages/ComingSoon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
    path: "users/:user",
    element: <UserDashboard />
  },
  {
    path: "users/:user/edit",
    element: <EditUserProfile />
  },
  {
    path: "/resetpassword/:uid/:token",
    element: <ResetPassword />
  },
  {
    path: "/forgotpassword/",
    element: <ForgotPassword />
  },
  {
    path: "/home/:title",
    element: <FullBlogPage />
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />
  },
  {
    path: "/users/:user/addproject",
    element: <AddProject />
  },
  {
    path: "/comingsoon",
    element: <ComingSoonPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-primary font-poppins'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
