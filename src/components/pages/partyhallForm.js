import React, { useState } from 'react';
import './partyhallForm.css';

const PartyHallForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event:'',
    Members:'',
    hours: 1,
    date:'',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    fetch('http://localhost:5000/api/partyhall', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      mode: 'cors',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Party hall booked successfully!'); // Success message
        setFormData({ name: '', email: '', phone: '', hours: 1 }); // Clear form
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Failed to book party hall.'); // Error message
      })
      .finally(() => setIsLoading(false)); // End loading
  };
  
  return (
    <div className='bg-booking'>
    <div className="booking-form">
      <h1>Book your party hall</h1>
      {message && <p className={message.includes('Failed') ? 'error-message' : 'success-message'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        
        <label>
          Events: 
         <select
         name='event'
         value={formData.event}
         onChange={handleChange}
         >
          <option value="Birthday">Birthday</option>
          <option value="Wedding ">Wedding Reception</option>
          <option value="Anniversary">Anniversary</option>
          
         </select>
        </label>
        <label>
          Total Members:
          <input
            type="number"  // Change to type="tel" for phone numbers
            name="Members"
            value={formData.Members}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"  // Change to type="tel" for phone numbers
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Hours:
          <input
            className='hours'
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
          />
        </label>
        <label>
  Date:
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
  />
</label>

        {/* Add more form fields as needed */}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Booking...' : 'Book Party Hall'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default PartyHallForm;
