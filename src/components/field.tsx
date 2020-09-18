import React from 'react';

type ItemProps = {
  fieldNames: any,
}

interface IProps{
  name: string,
  type: string,
  value: string
}

const RenderItems: React.FC<ItemProps> = ({ fieldNames }) => fieldNames.map(({ name, type, value }: IProps) => {
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
