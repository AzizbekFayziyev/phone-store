import React from 'react';
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        // NAVBAR COMPONENT
            <nav className='navbar'>
                <h1 className="navbar__logo">LOGO</h1>

                <div className="navbar__account">
                    <div className="navbar__account_bell">
                        <i><FaBell /></i>
                        <span>1</span>
                    </div>

                    <div className="navbar__account_user">
                        <h2>Личный кабинет</h2>
                        <i><FaUserCircle /></i>
                    </div>
                </div>
            </nav>
    )
}
