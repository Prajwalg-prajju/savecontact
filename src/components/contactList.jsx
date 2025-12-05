import React from "react";
import ContactCard from "./contactCard.jsx";
import "../css/style.css";

const contacts = [
  {
    name: "Rahul Sharma",
    phone: "+919876543210",
    email: "rahul@gmail.com",
    image: "https://i.pravatar.cc/300",
    whatsapp: "https://wa.me/919876543210",
    website: "https://rahulportfolio.com",
    linkedin: "https://linkedin.com/in/rahulsharma",
    facebook: "https://facebook.com/rahul.sharma",
    instagram: "https://instagram.com/rahulsharma",
    twitter: "https://twitter.com/rahulsharma",
    company: "TechCorp Pvt Ltd",
    jobTitle: "Software Engineer",
    notes: "Met at React Conference 2025",
    address: "123, MG Road, Mumbai, Maharashtra, India",
  },
];

const ContactList = () => (
  <div className="card-list-container">
    <div className="card-list">
      {contacts.map((contact, i) => (
        <ContactCard key={i} contact={contact} />
      ))}
    </div>
  </div>
);

export default ContactList;
