// HomePage.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './home.css';

const HomePage = () => {
  return (
    <div className="container">
    <div className="home-page">

      <header className="header">
       <p className='quotes'>
        <span>"Food, in the end, in our own tradition, is something holy.</span>
        <span>It's not about nutrients and calories. </span>
        <span>It's about sharing. It's about honesty.</span>
        <span> It's about identity."</span>
       </p> 
        
       
      </header>
        <div className='home-intro'>
        <div className='logo'>
          <img src='/logo2.png' alt='hotel-logo' className='logo1'/>
          
        </div>
        <h1>Welcome to london hotel</h1>
        <p>Explore and Enjoy</p>
        </div>
        <div className='menu-details'>
           <p>See our delicious menu items</p>
           <div className='rotating-image'>
           <img src='https://themewagon.github.io/restoran/img/hero.png' alt='delicious food'/>
           </div>
           <div className='menu-card'>
            <img src='/menu.png' alt='card'/>
              <img src='/menu1.png' alt='card'/>
            
           </div>
        </div>
        <div className='about-container'>
        <img src='/restaurant-interior.jpg' alt='about'className='column'/>
        <div className='column'>
          <h1>About us</h1>
          <h3>London Hotel in Karanampettai, Coimbatore </h3>
            <p>
            Restaurants in Coimbatore provide various cuisines with an aesthetic seating arrangement and the best services.
             Restaurants act as great places for many situations. From team meetings to family dinners, it can help serve a wide
              range of audiences. Many restaurants are aware of their customer preferences, hence, you can find a wide variety of vegetarian, non-vegetarian, vegan and gluten free options.
          
            </p>
            <p>If you are looking for a perfect place to have a date, family dinner or simply wish to hang out with your friends, we highly suggest you visit London Hotel in Karanampettai, Coimbatore. Not only are they known for their good quality of food, but also for their services such as Home Delivery , Veg Option Available , Food Menu Varies.</p>
            <h6><u>Party Hall:</u></h6>
            <p>Host your memorable events with us in our exquisite party hall. Whether it's a birthday celebration, anniversary party, or any special event, our versatile and sophisticated party hall is the perfect venue to create lasting memories. </p>
            </div>
        
        </div>
        <div className='home-contact'>
        <p className='column1'>
          <h2>CONTACT US</h2>
         <span> <strong><u>Location:  </u></strong>Karanampettai,Coimbatore</span>
         <span> <strong><u>Email:  </u></strong>londonhotel@gmail.com</span>
         <span> <strong><u>Phone:  </u></strong>9843019196</span> 
       </p>
       <p className='column2'>
        <h2>Timing</h2>
        <span>Morning - 11am</span>
        <span>To</span>
        <span>Evening - 11pm</span>
       </p>
       <div className="icons">
        <a href="https://www.instagram.com/london_restaurant_66/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
        </div>
     
      
    </div>
    </div>
  );
};

export default HomePage;