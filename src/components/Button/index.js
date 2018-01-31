import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({
  title = 'Post',
  type = 'hub-button-primary',
  buttonState,
  children,
}) => {
  return (
    <button
      type="button"
      className={`hub-button ${type}`}
      disabled={buttonState}>
      {title ? <span>{title}</span> : ''}
      {React.Children.map(children, child => child)}
    </button>
  );
};

export default Button;
