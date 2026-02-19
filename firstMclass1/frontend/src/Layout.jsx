import React from 'react'

import { Outlet } from 'react-router-dom'

import { Link} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
      {/* <div className="logo">Cinova</div> */}

      <ul style={{display:'flex',listStyle:"none", gap:"10px"}}>

        <li><Link to="/home">Home</Link></li> |
        <li><Link to="/insert">insert</Link></li> |
        <li><Link to="/display">display</Link></li> |
        {/* <li><Link to="/update">update</Link></li> | */}
        <li><Link to="/search">Search</Link></li> |
        <li><Link to="/contact">contact</Link></li> |
      </ul>

    
    </nav>

      <main>
        <Outlet/>
      </main>

      
    </>
  )
}

export default Layout
