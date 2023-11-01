import React from 'react';

function CustomButton(props) {
  return (
    <button style={{ backgroundColor: props.color }}>
      Click me
    </button>
  );
}

export default CustomButton;
