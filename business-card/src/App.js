import { useState } from 'react';
import BusinessCard from './components/BusinessCard';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const businessCardsData = [
    {
      name: "Anna-Kaisa Saari",
      education: "KTM, Iris (VAMK) Iris (AMK), AnO\nM.Sc, M.Eng, B.Sc, Professional Teacher",
      jobTitle: "Päätoiminen tuntiopettaja\nTietotekniikka Lecturer",
      company: "Wärtsilä" ,
      email: "asa@vamk.fi",
      phone: "+358 50 471 0300",
      address: "Wolflinite 30, FI-65200 VAASA, Finland"
    },
    {
      name: "Jane Smith",
      education: "BSc in Business Administration",
      jobTitle: "Marketing Manager",
      company: "Creative Marketing",
      email: "jane@createmarketing.fi" ,
      phone: "+358 50 471 0300",
      address: "Wolflinite 30, FI-65200 VAASA, Finland"
    },
    {
      name: "Alex Johnson",
      education: "PhD in Electrical Engineering",
      jobTitle: "Senior Engineer",
      company: "Innovate Tech",
      email: "alex.johnson@innovatetech.com",
      phone: "+358 50 471 0300",
      address: "Wolflinite 30, FI-65200 VAASA, Finland"
    }
  ];

  const filteredCards = businessCardsData.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Business Card App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, company, or job title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="cards-container">
        {filteredCards.map((card, index) => (
          <BusinessCard
            key={index}
            name={card.name}
            education={card.education}
            jobTitle={card.jobTitle}
            company={card.company}
            email={card.email}
            logo={card.logo}
            phone={card.phone}
            address={card.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;