import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutesPG from './routes/RoutesPG'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'


export default function App() {
  return (
    <main>
      <Navbar />
      <section className='each_page'>
        <RoutesPG/>
      </section>
      <Footer className="foot"/>
    </main>
  )
}
