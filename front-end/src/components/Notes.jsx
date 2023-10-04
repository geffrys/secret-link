import React from 'react'
import { useState } from 'react';
import '../css/Notes.css'; // Importa el archivo CSS para estilizar el menú

function Notes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotes = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notes-container">
      <button className="notes-button" onClick={toggleNotes}>
        Notes
      </button>
      {isOpen && (
        <ul className="notes-content">
          <input className='escribir' type="text" placeholder='escribir...' />
        </ul>
      )}
    </div>
  );
}

export default Notes;