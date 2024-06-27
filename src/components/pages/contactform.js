// ContactForm.js
import React  , { useState }from 'react';
import './contactform.css';
import { useNavigate } from 'react-router-dom';
const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async () => {
    const url = 'http://localhost:5000/submitForm';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);  // Handle the response from the server
      alert("form submitted successfully");
      navigate("/components/home");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
    </label>
    <label>
      Email:
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
    </label>
    <label>
      Message:
      <textarea name="message" value={formData.message} onChange={handleChange} />
    </label>
    <button type="submit">Submit</button>
  </form>
  );
};

export default ContactForm;
