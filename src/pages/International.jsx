import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Button } from '@/components/ui/button'


const International = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const closePopup = () => {
    setShowPopup(false);
    navigate('/'); // Redirect to the home page (landing page)
  };

  const popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)' // Darker overlay for dark theme
  };

  const popupContentStyles = {
    backgroundColor: '#333', // Dark background for the popup
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.1)', // Lighter shadow for dark background
    textAlign: 'center',
    maxWidth: '400px',
    color: '#fff' // Light text color for contrast
  };

  const closeBtnStyles = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff', // Keeping a blue button for contrast
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };
 

  return (
    
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <img src="/internationaltcp.webp" alt="international tcp" className="w-full" />
      {showPopup && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <p>For inquiries regarding international services, please contact your nearest branch either online or in person.</p><br /><p>For contact details, please refer to the information provided on the home page.</p><br />
            <Button variant="inter"  onClick={closePopup} > &nbsp;&nbsp; Back &nbsp;&nbsp;</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default International;
