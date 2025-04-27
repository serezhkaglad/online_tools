import { useState } from 'react';
import './BusinessCard.css';

const BusinessCard = ({ name, education, jobTitle, company, email, phone, address }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="business-card">
      {/*logo*/}
      <div className="university-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/52/VAMK_logo.png" 
          alt="VAMK Logo" 
          className="vamk-logo"
        />
        <div className="university-info">
          <h3>VAMK</h3>
          <p>VAASA AMMATTIKORKEAKOULU UNIVERSITY OF APPLIED SCIENCES</p>
        </div>
      </div>
      
      {/*person info*/}
      <div className="person-info">
        <h2>{name}</h2>
        <p>{education}</p>
      </div>
      
      {/*job details*/}
      <div className="job-details">
        <p><strong>{jobTitle}</strong></p>
        <p>{company}</p>
        <p>Information Technology</p>
        <p>Technology</p>
      </div>
      

      {showContact && (
        <div className="contact-info">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      )}
      
      <button onClick={() => setShowContact(!showContact)}>
        {showContact ? 'Hide contact' : 'Show email'}
      </button>
    </div>
  );
};

export default BusinessCard;