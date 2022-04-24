import Card from '../index';
import { Status } from '../../../../interfaces/status';
import { render, screen } from '@testing-library/react';

describe('Card component', () => {
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

  it('should render card component correctly', () => {
    const title = 'todo title';
    render(
      <Card title={title} selected={selectedStatus} options={mockedStatus} />,
    );
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(selectedStatus.status)).toBeInTheDocument();
  });
});
