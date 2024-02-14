import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contactus from './Components/ContactUs/Contactus.jsx'
import Login from './Components/Login/Login.jsx'
import  SignUp  from './Components/SignUp/SignUp.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contactus' element={<Contactus/>}/>
        
        <Route path='Login' element={<Login/>} >
    
        <Route path='SignUp' element={<SignUp/>}/>
        </Route>
        <Route path='SignUp' element={<SignUp/>}/>
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
