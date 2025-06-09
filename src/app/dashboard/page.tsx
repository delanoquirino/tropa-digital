'use client';

import SearchInput from '@/components/SearchInput';
import { styled } from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const WelcomeText = styled.div`
  h1 {
    color: #636363;
    font-size: 16px;
    margin: 0;
  }
  
  span {
    color: #101010;
    font-weight: bold;
  }
`;

const Title = styled.h2`
  color: #CC6237E5;
  font-size: 20px;
  margin: 0 0 20px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const CreateButton = styled.button`
  background-color: #CC6237;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #b55530;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;

 
    th {
      background: transparent !important;
    }
 `;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f5f5f5;
  color: #CC623780;
  font-weight: 500;
  border-bottom: 1px solid #eee;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #657593;
`;

const StatusBadge = styled.span<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? '#e6f4ea' : '#fce8e8'};
  color: ${props => props.$isActive ? '#34a853' : '#ea4335'};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  padding: 6px 12px;
  border: 1px solid ${props => props.active ? '#CC6237' : '#ddd'};
  background: ${props => props.active ? '#CC6237' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active ? '#b55530' : '#f5f5f5'};
  }
`;

const TableContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 1px solid #d5dfec;
  padding: 20px;
`;

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