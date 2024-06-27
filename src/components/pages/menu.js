import React, { useState } from 'react';
import OrderForm from './orderForm';
import menuData from './menuData';

import './menu.css';

const Menu = () => {
  const [showOrderForm, setShowOrderForm] = useState({});

  const toggleOrderForm = (itemId) => {
    setShowOrderForm((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className='menu-container'>
      <h1 className='heading'>ORDER YOUR FOOD</h1>
      <div className='menu'>
        {menuData.map((category) => (
          <div key={category.id} className='category'>
            <h3>{category.category}</h3>
            <div className='item-list'>
              {category.items.map((item) => (
                <div key={item.name} className='item-card'>
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4><br/>
                  <p>₹-{item.price}/-</p>
                  <button onClick={() => toggleOrderForm(item.id)}>Order Now</button>
                  {showOrderForm[item.id] && (
                    <OrderForm
                      item={item}
                      onSubmit={() => toggleOrderForm(item.id)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
