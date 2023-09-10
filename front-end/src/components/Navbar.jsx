import React from 'react'
import '../css/Navbar.css'
import SignOutBtn from "./SignOutBttn"

function Navbar() {
  return (
    <section className='navbar'>
        <h1 className='navbar__titulo'>Secreto Link</h1>
        <SignOutBtn/>
    </section>
  )
}

export default Navbar