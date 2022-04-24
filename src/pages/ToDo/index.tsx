import React from 'react';
import Card from './Card/index';
import { Status } from '../../interfaces/status';
import * as S from './styles';

const mockedStatus: Status[] = [
  {
    id: 0,
    status: 'pendente',
  },
  {
    id: 1,
    status: 'em andamento',
  },
  {
    id: 2,
    status: 'concluído',
  },
];

const selectedStatus: Status = mockedStatus[1];

const ToDo: React.FC = () => {
  return (
    <S.Container data-testid="to-do">
      <S.Header>
        <S.ImageUser />
        <div>
          <h2>Nome da pessoa</h2>
          <p>
            Parabéns! Você completou <span>30</span> de <span>60</span> tarefas!
          </p>
        </div>
        <hr />
        <S.NewTask>Criar nova tarefa</S.NewTask>
      </S.Header>
      <Card
        title="Fazer atividade de NodeJS"
        selected={selectedStatus}
        options={mockedStatus}
      />
    </S.Container>
  );
};

export default ToDo;
