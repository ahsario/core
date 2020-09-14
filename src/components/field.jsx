import React from 'react';

const Fields = ({ fieldNames }) => {
  const Field = (name, type, value) => {
    if (!name) {
      return (
        <span>
          <input type={type} value={value} />
        </span>
      );
    }
    return (
      <div>
        <label>{name}</label>
        <input type={type} value={value} />
      </div>
    );
  };

  function renderItems(arr) {
    return arr.map((item) => {
      const label = Field(item.name, item.type, item.value);

      return (
        <>
          {label}
        </>
      );
    });
  }

  const Items = renderItems(fieldNames);

  return Items;
};
export default Fields;
