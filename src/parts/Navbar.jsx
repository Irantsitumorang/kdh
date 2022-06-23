import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className='header'>
        <div className="header1">
            <Link to="/">Forum anak IT</Link>
            {/* <h3>Forum anak IT</h3> */}
            <div class="search">
                <span class="icon"><i class="fa fa-search"></i></span>
                <input type="search" id="search" placeholder="Search..." />
            </div>
        </div>

        <div className="header2">
            <ul className='header2'>
                <li class="dropdown"><a href="/">Categories</a>
                    <ul class="isi-dropdown">
                        <li><Link to="/">Linux</Link></li>
                        <li><Link to="/">Windows</Link></li>
                        <li><Link to="/">Mac OS</Link></li>
                        <li><Link to="/">Android</Link></li>
                        <li><Link to="/">IOS</Link></li>
                    </ul>
                </li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar