import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <nav className="navbar">
      

      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="cart">cart</Link></li>
      </ul>

    </nav>

    <Outlet/>

    <footer>
        www.ecom.com
    </footer>
    </>
  )
}

export default Layout
