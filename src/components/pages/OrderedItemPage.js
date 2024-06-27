// OrderedItemPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderedItemDetails from './OrderedItemDetails';
import './ordereditempage.css';

const OrderedItemPage = () => {
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    const fetchOrderedItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrderedItems(response.data);
      } catch (error) {
        console.error('Error fetching ordered items:', error);
      }
    };

    fetchOrderedItems();
  }, []); // Only fetch ordered items once when component mounts

  const handleOrderCancellation = async (orderId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cancelOrder/${orderId}`);
      if (response.status === 200) {
        // Remove the cancelled order from the orderedItems list
        setOrderedItems(prevItems => prevItems.filter(item => item._id !== orderId));
        alert('Order canceled successfully');
      } else {
        throw new Error('Failed to cancel order');
      }
    } catch (error) {
      console.error('Error canceling order:', error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>MY ORDERS</h2>
    
    <div className='ordered-page'>
      
      {orderedItems.length > 0 ? (
        orderedItems.map(item => (
          <OrderedItemDetails
            key={item._id}
            orderedItem={item}
            onOrderCancelled={() => handleOrderCancellation(item._id)}
          />
        ))
      ) : (
        <p>No ordered items to display.</p>
      )}
    </div>
    </div>
  );
};

export default OrderedItemPage;
