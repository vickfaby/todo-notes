import React, { useEffect } from 'react';
import '../styles/NoteMini.scss';

function NoteMini({ note }) {

  useEffect(() => {
    console.log('llega la nota:');
    console.log(note?.id);

    // document.getElementById(`note-${note?.id}`).style.background = note?.color
  }, []);

  return (
    <div id={`note-${note?.id}`} className="noteMini-div">
      <div>
        <p>{note?.title}</p>
      </div>
      <div>
        <p>{note?.content}</p>
      </div>
      <div>
        <p>{note?.creationDate}</p>
      </div>
      <div>
        <p>{note?.category}</p>
      </div>
    </div>
  );
}

export default NoteMini;
