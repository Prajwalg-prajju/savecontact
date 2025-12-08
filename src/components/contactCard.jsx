import React from "react";
import "../css/style.css";

const ContactCard = ({ contact }) => {

  // ✅ Convert local image to Base64 for vCard
  const toBase64 = async (fileUrl) => {
    if (!fileUrl) return "";

    const response = await fetch(fileUrl);
    const blob = await response.blob();

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        resolve(base64);
      };
      reader.readAsDataURL(blob);
    });
  };

  const saveContact = async () => {
  const photoBase64 = await toBase64(contact.image);

  const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${contact.name}
FN:${contact.name}
ORG:${contact.company || ""}
TITLE:${contact.jobTitle || ""}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email || ""}
URL:${contact.website || ""}
ADR;TYPE=HOME:${contact.address || ""}
NOTE:${contact.notes || ""}
${photoBase64 ? `PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}` : ""}
X-SOCIALPROFILE;type=linkedin:${contact.linkedin || ""}
X-SOCIALPROFILE;type=facebook:${contact.facebook || ""}
X-SOCIALPROFILE;type=instagram:${contact.instagram || ""}
X-SOCIALPROFILE;type=twitter:${contact.twitter || ""}
END:VCARD
`.trim();

  const encodedVCard = encodeURIComponent(vCardData);

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isIOS) {
    // ✅ ✅ THIS IS THE ONLY METHOD THAT WORKS IN iOS CHROME
    const dataUrl = `data:text/vcard;charset=utf-8,${encodedVCard}`;
    window.location.href = dataUrl;
  } else {
    // ✅ Works for Android Chrome, Desktop, Safari
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 2000);
  }
};


  return (
    <div className="contact-card">
      {contact.image && (
        <img src={contact.image} alt={contact.name} />
      )}

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
