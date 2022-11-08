import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaExchangeAlt, FaGift, FaPercentage, FaSearch } from 'react-icons/fa';
import phoneData from '../../data/data';
import { Link } from "react-router-dom";
import noResult from "../../assets/images/noResult.gif";

export default function Products() {
    // Search products
    const [inputVal, setInputVal] = useState("");

    const filteredData = phoneData.filter(s => {
        return s.name.toLowerCase().includes(inputVal.toLowerCase())
    });

    // PRODUCTS SECTION
    return (
        <section className='products'>
            <div className="navigation-links">
                <span>Заявки</span> <i><FaArrowRight /></i> <span className="active">Оформить заказ</span>
            </div>

            <div className="products__content">
                <h1 className='title'>Оформить заказ</h1>

                <div className="products__search">
                    <input onChange={(e) => setInputVal(e.target.value)} type="search" className="products__search_input" placeholder='Поиск по названию товара' />
                    <button className='products__search_button'><i><FaSearch /></i></button>
                </div>



                <div className="product__cards">
                    <h3>Все товары ({phoneData.length})</h3>

                    <div className="product__cards_row">
                        {filteredData.length ? filteredData.map(({ name, img, id, price, creditPrice, gift, credit, exchange }) => (
                            <Link  to={`/product/${name}`} key={id} className="product__cards_card">
                                <div className="phone-img">
                                    <img src={img} alt={name} />
                                    <div className="phone-advantages">
                                        {gift ? <i className="gift"><FaGift /></i> : ""}
                                        {credit ? <i className="credit"><FaPercentage /></i> : ""}
                                        {exchange ? <i className="exchange"><FaExchangeAlt /></i> : ""}
                                    </div>
                                </div>

                                <h4 className="phone-name">{name}</h4>
                                <p className='phone-price'>{price}</p>
                                <p className="phone-creditPrice">{creditPrice}</p>
                            </Link>
                        )) : <img src={noResult} alt="no results"></img>}
                    </div>
                </div>

                <div className="products__pagination">
                    <i><FaArrowLeft /></i>
                    <div className="products__pagination_items">
                        <span>1</span>
                        <span className='active'>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>...</span>
                        <span>10</span>
                    </div>
                    <i><FaArrowRight /></i>
                </div>
            </div>
        </section>
    )
}
