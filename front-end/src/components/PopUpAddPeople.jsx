import React from 'react';
import '../css/Popup.css'; // Importa el archivo CSS para el estilo


function Popup({ isOpen, onClose, id_client, children}) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={onClose}>Cerrar</button>
        
      </div>
    </div>
  );
}

export default Popup;
