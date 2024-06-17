import React from 'react';

function Message({ message }) {
  return (
    <div className="message">
      <strong>{message.user}</strong>: {message.message}
    </div>
  );
}

export default Message;
