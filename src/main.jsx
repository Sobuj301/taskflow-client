import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/Home';
import DashboardHome from './pages/DashboardHome';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './routes/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "tasks",
        element: <Tasks />
      },
      {
        path: "addTask",
        element: <AddTask />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
