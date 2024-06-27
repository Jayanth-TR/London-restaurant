import React from "react";
import { Link } from 'react-router-dom';
import './partyhall.css';

const PartyHall=()=>{
    return(
      <div className="party-container">
         
          <div className="party-hall-section">
            <h1>PARTY HALL SECTION:</h1>
            <div className="section-with-bg1" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-izaC21401GHQz7kVdYhk0zvaJzsITq_Sw&usqp=CAU")' }}>
              <h2>Welcome to LONDON HOTEL's Elegant Party Hall:</h2>
              <p>
                Host your memorable events with us in our exquisite party hall. Whether it's a birthday celebration,
                anniversary party, or any special event, our versatile and sophisticated party hall is the perfect venue
                to create lasting memories.
              </p>
            </div>

            <div className="section-with-bg" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvxuU-G17U3zP0-YVFaKNaRXWosyBLd4Oqg&usqp=CAU")' }}>
              <h3>FEATURES & AMENITIES:</h3>
              <p><strong><u>Spacious Venue:</u></strong> Our party hall offers ample space to accommodate a large number of guests comfortably.</p>
              <p><strong><u>Flexible Seating Arrangements:</u></strong> Customize the seating layout to suit your event, whether it's a seated dinner, cocktail party, or dance floor setup.</p>
              <p><strong><u>State-of-the-Art Audiovisual Equipment:</u></strong> Enjoy high-quality sound systems and projectors for presentations or entertainment.</p>
              <p><strong><u>Catering Services:</u></strong> Choose from our diverse catering options, offering a range of delicious cuisines to please every palate.</p>
              <p><strong><u>Dedicated Event Staff:</u></strong> Our professional event staff is committed to ensuring your event runs smoothly, from planning to execution.</p>
            </div>

      
            <div className="section-with-bg" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrm1GwfN6kHp1_Fy7ajSuba7hzcN2bVBsGA&usqp=CAU")' }}>
              <h3>CELEBRATE YOUR SPECIAL OCASSIONS:</h3>
              <p><strong><u>Birthdays:</u></strong> Create magical moments with a themed birthday party tailored to your preferences.</p>
              <p><strong><u>Anniversaries:</u></strong> Toast to years of love and companionship in an elegant setting.</p>
              <p><strong><u>Wedding Receptions:</u></strong> Make your wedding day even more memorable with a beautiful reception in our party hall.</p>
            </div>

            <div className="section-with-bg4" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg?size=626&ext=jpg&ga=GA1.1.525175222.1690035152&semt=ais")' }}>
              <h3>BOOKING INFORMATION:</h3>
              <p>
                Reserve our party hall for your upcoming event. Contact our event planning team to discuss your requirements,
                check availability, and explore our packages.
              </p>
              <p>
                  <strong>Contact Information:</strong>  9843019196
                </p>

                <p>
                  <strong>LONDON HOTEL- Your Trusted Venue for Memorable Celebrations</strong>
                </p>
                <p>
                  Allow us to turn your events into extraordinary experiences. Book our party hall today and let the celebrations begin!
                </p>
            </div>
            <Link to="/components/pages/partyhallForm">
        <button>Book your PartyHall</button>
      </Link>
            
          </div>
         

      </div>
    );
}
export default PartyHall;