import React from 'react';

const RenderItems = ({ fieldNames }) => fieldNames.map(({ name, type, value }) => {
  if (name) {
    return (
      <div>
        <label>{name}</label>
        <input type={type} value={value} />
      </div>
    );
  }

  return (
    <span>
      <input type={type} value={value} />
    </span>
  );
});

export default RenderItems;
