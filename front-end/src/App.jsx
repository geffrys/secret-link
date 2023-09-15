import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Login from './pages/Login'
import RegisterClient from './pages/RegisterClient'
import Navbar from "./components/Navbar";
import LoginClient from './pages/LoginClient'


export default function App() {
  return (
    <main>
      <Navbar />
      <section>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<LoginClient />} />
          <Route path='/signup' element={<Login/>} />
          <Route path='*' element={<NotFound />} />
          <Route path='/registerclient' element={<RegisterClient />} />
        </Routes>
      </section>
    </main>
  )
}
