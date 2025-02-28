import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import HomePage from './pages/HomePage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import CommunitiesPage from './pages/CommunitiesPage.jsx'
import MissionsPage from './pages/MissionsPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignupPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path : "/blogs", 
        element : <BlogsPage />
      },
      {
        path : "/communities", 
        element : <CommunitiesPage />
      },
      {
        path : "/missions", 
        element : <MissionsPage />
      },
      {
        path : "/quiz", 
        element : <QuizPage />
      },
      {
        path : "/signin", 
        element : <SignInPage />
      },
      {
        path : "/signup", 
        element : <SignUpPage />
      },
      {
        path: "/about",
        element: <h1 className='text-center text-5xl'>About</h1>,
      },
      {
        path: "/contact",
        element: <h1 className='text-center text-5xl'>Contact</h1>,
      },
      {
        path : "*",
        element : <h1 className='text-center text-5xl'>404 Not Found</h1>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
