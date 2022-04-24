import React from 'react';
import { Status } from '../../../interfaces/status';
import * as S from './styles';

interface Props {
  title: string;
  selected: Status;
  options: Status[];
}

const Card: React.FC<Props> = ({ title, selected, options }) => {
  return (
    <S.Card data-testid="card">
      <h3>{title}</h3>
      <S.Status defaultValue={selected.id}>
        {options.map((op) => (
          <option value={op.id} key={op.id}>
            {op.status}
          </option>
        ))}
      </S.Status>
    </S.Card>
  );
};

export default Card;
