import React from 'react';

const Post = (props) => {

  return (
    <div>
      <ul>
        {props.data.map(note => <li key={note.id}>Firstname: {note.firstname} Lastname:{note.lastname}, Phone: {note.phone}, Role:{note.role}, Message: {note.message}</li>)}
      </ul>

    </div>
  );
};

export default Post;