import React from 'react';
import { getNewId } from '../services/idService';

const RadioButton = ({
  id = getNewId(),
  name = 'radioButtonName',
  label = 'Valor do Label',
  buttonChecked = false,
  onRadioClick = null,
}) => {
  function handleRadioButtonChange() {
    if (onRadioClick) {
      onRadioClick();
    }
  }
  return (
    <div className="flex flex-row justify-center items-center m-4 gap-2 ">
      <input
        type="radio"
        id={id}
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
