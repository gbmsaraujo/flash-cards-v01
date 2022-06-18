import React from 'react';

const Button = ({ children: description, onButtonClick = null }) => {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className=" bg-gray-200 p-2 rounded-md m-2"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
};

export default Button;
