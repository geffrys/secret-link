import React from 'react';
import '../css/Popup.css'; // Importa el archivo CSS para el estilo


function Popup({ isOpen, onClose, children}) {
  if (!isOpen) return null;
  

  return (
    <div className="popup">
      <div className="popup-inner">
        {children}
        <button className="close-button" onClick={onClose}>❌</button>
        
      </div>
    </div>
  );
}

export default Popup;
