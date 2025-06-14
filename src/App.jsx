import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import { AnimatePresence } from 'framer-motion'

export default function App() {

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'menu', element: <Menu /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
      ]
    }
  ])

  return <>
    
    <RouterProvider router={routers}></RouterProvider>

  </>
}
