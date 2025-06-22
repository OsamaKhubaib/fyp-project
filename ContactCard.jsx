import React from "react";

// This is a Contact Card component
const ContactCard = () => {
  return (
    // This div is the box for the card
    <div
      style={{
        border: "1px solid blue",           // Blue border around the card
        padding: "20px",                    // Space inside the card
        maxWidth: "400px",                  // Card won't be too wide
        margin: "auto",                     // Center the card on the page
        backgroundColor: "#",         // Light blue background only for the card
      }}
    >
      {/* Title */}
      <h1>Get In Touch</h1>

      {/* Subtitle */}
      <h2>We're Here to Help!</h2>

      {/* Message */}
      <p>
        Have questions or need support? Feel free to contact us.
      </p>

      {/* Support details */}
      <div>
        <strong>Customer Support Hotline:</strong>
        <p>
          <strong>Phone:</strong> 12-234-567-89
        </p>
        <p>
          <strong>Hours:</strong> Mon–Fri: 8AM–8PM, Sat–Sun: 9AM–5PM
        </p>
      </div>

      {/* Some numbers for fun or stats */}
      <div style={{ marginTop: "20px" }}>
        <div>600</div>
        <div>➕ 481 Hug</div>
      </div>
    </div>
  );
};

export default ContactCard;
