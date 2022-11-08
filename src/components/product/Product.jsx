import React from 'react';
import { FaArrowRight, FaCartArrowDown, FaExchangeAlt, FaGift, FaPercentage } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import phoneData from '../../data/data';
import { Link } from "react-router-dom";

export default function Product() {
  // Filter product
  const { id } = useParams();

  const product = phoneData.filter(product => {
    return product.name.includes(id);

  });

  // PRODUCT SECTION
  return (
    <section className='product'>

      <div className="navigation-links">
        <span>Заявки</span> <i><FaArrowRight /></i> <Link to="/">Оформить заказ </Link>
        <i><FaArrowRight /></i> <span className="active">{id}</span>
      </div>

      <div className="product__content">
        <div className="cart">
          <i><FaCartArrowDown /></i>
          <p>Перейти в корзину <span>1</span></p>
        </div>

        {product.map(({ name, img, id, price, creditPrice, gift, credit, exchange }) => (
          <div key={id} className="product__card">

            <h1 className='title'>{name}</h1>

            <div className="phone-info">

              <div className="phone-img">
                <img src={img} alt={name} />
                <div className="phone-advantages">
                  {gift ? <i className="gift"><FaGift /></i> : ""}
                  {credit ? <i className="credit"><FaPercentage /></i> : ""}
                  {exchange ? <i className="exchange"><FaExchangeAlt /></i> : ""}
                </div>
                <div className="slider">
                  <span className='active'></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="phone-text">

                <p className='phone-title'>Цена телефона</p>
                <p className="phone-price">{price}</p>
                <p className='phone-title'>Общая цена (с наценкой)</p>

                <div className="price">
                  <p className="phone-price">7 300 000 сум</p>
                  <p className="phone-creditPrice">{creditPrice}</p>
                </div>

                <div className="priceMont">
                  <button className='btn active'>
                    3 мес
                  </button>
                  <button className='btn'>
                    6 мес
                  </button>
                  <button className='btn'>
                    12 мес
                  </button>
                  <button className='btn'>
                    24 мес
                  </button>
                </div>

                <p className='phone-percentage'>Наценка: 5%</p>
                <p className='phone-title'>Общие характеристики</p>
                <p className='phone-character'>Тип: моноблок (классический) <br />
                  Стандарт: 2G, 3G, 4G (LTE), 5G <br />
                  Операционная система: iOS 14
                </p>

                <div className="phone-info-title">
                  Показать все
                </div>
              </div>
            </div>

            <div className="phone-shares">
              <div className="phone-info-title">
                Акции
              </div>

              {exchange ? <div className="share">
                <i className="exchange"><FaExchangeAlt /></i>
                <div className="share-info">
                  <div className="text">
                    <p>Обменяй свой старый айфон и получи скидку на новый</p>
                    <span>- 400 000 сум</span>
                  </div>
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div> : ""}

              {gift ? <div className="share">
                <i className="gift"><FaGift /></i>
                <div className="share-info">
                  <div className="text">
                    <p>Наушники в подарок</p>
                    <span>- Apple EarPods</span>
                  </div>
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div> : ""}

              {credit ? <div className="share">
                <i className="credit"><FaPercentage /></i>
                <div className="share-info">
                  <div className="text">
                    <p>Скидка на айфоны</p>
                    <p>IMEI 012345678901234</p>
                    <span>- 10 000 сум</span>
                  </div>
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div> : ""}

              <button className='btn'>Добавить в корзину</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
