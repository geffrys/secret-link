import React from 'react'
import '../css/Notes.css';

function Notes() {
    return (
        <section className="notes">
            <label>Notes</label>
            <div>
                <input className='escribir' type="text" placeholder='escribir...' />
            </div>
        </section>
    );
}

export default Notes;