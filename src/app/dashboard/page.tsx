'use client';

import SearchInput from '@/components/SearchInput';
import {
  CreateButton,
  Header,
  PageButton,
  Pagination,
  SearchContainer,
  StatusBadge,
  Table,
  TableContainer,
  Td,
  Th,
  Title,
  WelcomeText
} from '@/styles/pages/dashboard.styles';

export default function Dashboard() {
  const mockEvents = [
    {
      name: 'Clube de Lago Conexão Pantaneiro',
      teams: 10,
      status: 'Ativo',
      date: '09 a 11 de Junho'
    },
    {
      name: 'Clube de Lago Conexão Pantaneiro',
      teams: 10,
      status: 'Ativo',
      date: '09 a 11 de Junho'
    }
  ];

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Header>
        <WelcomeText>
          <h1>Bem vindo de volta, <span>Kaique Steck</span></h1>
        </WelcomeText>
      </Header>

      <Title>Todos eventos</Title>
      <TableContainer>
        <SearchContainer>
          <SearchInput placeholder="Buscar eventos" onChange={(e) => handleSearch(e.target.value)} />
          <CreateButton>
            <span>+</span>
            Inserir novo
          </CreateButton>
        </SearchContainer>

        <Table>
          <thead>
            <tr>
              <Th>Nome do evento</Th>
              <Th>Total de equipes</Th>
              <Th>Status</Th>
              <Th>Data</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {mockEvents.map((event, index) => (
              <tr key={index}>
                <Td>{event.name}</Td>
                <Td>{event.teams}</Td>
                <Td>
                  <StatusBadge $isActive={event.status === 'Ativo'}>
                    {event.status}
                  </StatusBadge>
                </Td>
                <Td>{event.date}</Td>
                <Td style={{ textAlign: 'right' }}>⋮</Td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <PageButton>Anterior</PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>Próxima</PageButton>
        </Pagination>
      </TableContainer>
    </>
  );
}