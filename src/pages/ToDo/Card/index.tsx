import React from 'react';
import { Status } from '../../../interfaces/status';

interface Props {
  title: string;
  selected: Status;
  options: Status[];
}

const Card: React.FC<Props> = ({ title, selected, options }) => {
  return (
    <div data-testid="card">
      <h3>{title}</h3>
      <select defaultValue={selected.id}>
        {options.map((op) => (
          <option value={op.id} key={op.id}>
            {op.status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Card;
