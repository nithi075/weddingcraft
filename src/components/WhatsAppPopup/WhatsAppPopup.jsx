import React, { useState } from 'react';
import './WhatsAppPopup.css'; // Mela kudutha CSS-ai intha file-il pottukonvum

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const togglePopup = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, message } = formData;
    
    // Unga WhatsApp Number-ai inge maathavum
    const phoneNumber = "917092263880"; 

    if (!name || !message) {
      alert("Dayavu seidhu details fill pannunga!");
      return;
    }

    const text = `Hello! %0AName: ${name}%0ARequirement: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Trigger Button - Idhai unga Footer-il enga venaalum vaikkalam */}
      <button className="open-popup-btn" onClick={togglePopup}>
        CONTACT US
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>&times;</span>
            
            <h2 className="popup-title">Get In Touch</h2>
            <p className="popup-subtitle">Tell us what you need</p>
            
            <div className="input-group">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="input-group">
              <textarea 
                id="message" 
                placeholder="What do you need?" 
                rows="3" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button className="whatsapp-submit" onClick={sendToWhatsApp}>
              SUBMIT TO WHATSAPP
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;