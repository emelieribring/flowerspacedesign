import React from 'react';
import '../Styles/Navbar.css';
import hamMenu from '../Images/icons8-menu-24.png'

function Nav() {
  return (
    <nav>
        <div>
         <p>ICONIC</p>
        </div>
        <div>
            <img src={hamMenu} alt="hamburgerIcon" />
        </div>
    </nav>
  );
}

export default Nav;