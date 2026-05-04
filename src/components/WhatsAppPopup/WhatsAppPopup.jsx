import React, { useState, useEffect } from 'react'; // useEffect saerthukonga
import './WhatsAppPopup.css';

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  // Page load aagi 30 seconds kalithu popup vara intha logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000); // 30 seconds = 30000ms

    // Component unmount aagum pothu timer-ai clean panna ithu mukkiyam
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, message } = formData;
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
      {/* 
        Manual-ah open panna intha button irukalaam. 
        Venaamna idhai remove pannidunga, timer mattum work aagum. 
      */}
    
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