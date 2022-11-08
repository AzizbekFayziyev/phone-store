import React from 'react';
import { FaCartArrowDown, FaHome, FaList, FaShoppingBag, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function NavigationBar() {
    // LINKS
    const links = [
        {
            title: "Главная",
            icon: <FaHome />,
        },
        {
            title: "Заказы",
            icon: <FaList />,
        },
        {
            title: "Товары",
            icon: <FaShoppingBag />,
        },
        {
            title: "Отзывы",
            icon: <FaStar />,
        },
        {
            title: "Оформить заказ",
            icon: <FaCartArrowDown />,
            active: true,
        },
    ];

    // NAVIGATION BAR
    return (
        <div className="nav-cnt">
            <ul className='navigation'>
                {links.map((e, id) => (
                    <li
                        key={id}
                        className={`navigation_item ${e.active ? "active" : ""}`}>
                        <Link
                            to="/"
                            className="navigation_link">
                            <i>{e.icon}</i> <span>{e.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
