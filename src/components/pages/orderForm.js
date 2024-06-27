import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const OrderForm = ({ item, onSubmit }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    quantity:'',
    itemName: item.name, // Include item name from props
    itemPrice: item.price, // Include item price from props
  });
  let navigate= useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/order', formData);
      // Check if the request was successful
      if (response.status === 200) {
        // Optionally, show a success message to the user
        alert('Order placed successfully!');
        // Pass the form data to the onSubmit function provided by the parent component
        onSubmit(formData);
        // Redirect the user to the ordered item page
        navigate('/components/pages/OrderedItemPage');
        // Reset the form fields
        setFormData({
          name: '',
          address: '',
          phoneNumber: '',
          quantity: '',
          itemName: item.name,
          itemPrice: item.price,
        });
      } else {
        // Handle error if the request was not successful
        console.error('Failed to place order:', response.statusText);
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      // Handle any network or server errors
      console.error('Failed to place order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        <input type='text' name='quantity' value={formData.quantity} onChange={handleChange} placeholder='Quantity'/>
        <input type="hidden" name="itemName" value={formData.itemName} />
        <input type="hidden" name="itemPrice" value={formData.itemPrice} />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
