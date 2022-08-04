import React, { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header(props) {
  let [cartOpen, setCartOpen]  = useState(false);

  const showOrders = props => {
    let sum = props.orders.reduce((sum, current) => sum + Number(current.price), 0);

    return (
      <div>
        {props.orders.map( el =>
          <Order key={el.id} item={el} onDelete={props.onDelete}/>        
        )}
        <p className="sum">Сумма: { new Intl.NumberFormat().format(sum)} Р </p>
      </div>
    )
  }

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    )
  }

  return (
   <header>
    <div>
        <span className='logo'>Альфа слух</span>
        <ul className='nav'>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen( !cartOpen) } className={`shop-cart-button ${cartOpen && 'active'}`}/>
        { cartOpen && (
          <div className="shop-cart">
                {props.orders.length ? showOrders(props) : showNothing()}
          </div>
        )}
        
    </div>
    <div className='presentation'></div>
   </header>
  )
}
