import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'
import LoginClient from './components/LoginClient'
import DefaultLayout from './Layout/DefaultLayout'
import RegisterClient from './components/RegisterClient'



export default function App() {
  return (
    <section>
      <DefaultLayout />
      <section>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/client' element={<LoginClient />} />
          <Route path='/registerclient' element={<RegisterClient />} />
        </Routes>
      </section>
    </section>
  )
}
