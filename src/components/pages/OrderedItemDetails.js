// OrderedItemDetails.js
import React from 'react';
import './ordereditempage.css';


const OrderedItemDetails = ({ orderedItem, onOrderCancelled }) => {
  const cancelOrder = () => {
    // Call the onOrderCancelled function passed from OrderedItemPage with the order ID
    onOrderCancelled(orderedItem._id);
  };

  return (
    <div className='orderdetails'>
      
      <p>Item Name:<span> {orderedItem.itemName}</span></p>
      <p>Price: <span>{orderedItem.itemPrice}</span></p>
      <p>Quantity:<span> {orderedItem.quantity}</span></p>
      <p>Name:<span> {orderedItem.name}</span></p>
      <p>Address:<span> {orderedItem.address}</span></p>
      <p>Phone Number:<span> {orderedItem.phoneNumber}</span></p>
      <button onClick={cancelOrder} className='cancel-btn'>Cancel Order</button>
    </div>
  );
};

export default OrderedItemDetails;
