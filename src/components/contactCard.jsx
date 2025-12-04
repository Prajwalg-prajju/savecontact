import React from "react";
import "../css/style.css";  // Correct path to css folder

const ContactCard = ({ contact }) => {
  const saveContact = () => {
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company || ""}
TITLE:${contact.jobTitle || ""}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email || ""}
URL:${contact.website || ""}
ADR:${contact.address || ""}
NOTE:${contact.notes || ""}
X-SOCIALPROFILE;type=linkedin:${contact.linkedin || ""}
X-SOCIALPROFILE;type=facebook:${contact.facebook || ""}
X-SOCIALPROFILE;type=instagram:${contact.instagram || ""}
X-SOCIALPROFILE;type=twitter:${contact.twitter || ""}
END:VCARD
    `;
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name}.vcf`;
    a.click();
  };

  return (
    <div className="contact-card">
      {contact.image && <img src={contact.image} alt={contact.name} />}
      <div className="contact-info">
        <h2>{contact.name}</h2>
        {contact.phone && <p>📞 {contact.phone}</p>}
        {contact.email && <p>✉️ {contact.email}</p>}
        {contact.jobTitle && <p>💼 {contact.jobTitle}</p>}
        {contact.company && <p>🏢 {contact.company}</p>}
      </div>

      <div className="contact-links">
        {contact.website && (
          <a href={contact.website} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {contact.facebook && (
          <a href={contact.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        )}
        {contact.instagram && (
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        )}
        {contact.twitter && (
          <a href={contact.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        )}
        {contact.whatsapp && (
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        )}
      </div>

      <div className="contact-actions">
        <button onClick={saveContact}>Save Contact</button>
      </div>
    </div>
  );
};

export default ContactCard;
