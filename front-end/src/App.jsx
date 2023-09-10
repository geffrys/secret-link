import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'
import Login from './pages/Login'
import RegisterClient from './components/RegisterClient'
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <main>
      <Navbar />
      <section>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/client' element={<Login />} />
          <Route path='/registerclient' element={<RegisterClient />} />
        </Routes>
      </section>
    </main>
  )
}
