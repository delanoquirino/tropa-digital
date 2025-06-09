'use client';

import SearchInput from '@/components/SearchInput';
import { styled } from 'styled-components';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    gap: 10px;
  }
`;

const Title = styled.h2`
  color: #CC6237E5;
  font-size: 24px;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #d5dfec;
  padding: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  color: #2D3748;
  font-size: 18px;
  margin: 0;
`;

const CardMenu = styled.button`
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  
  &:hover {
    color: #2D3748;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #718096;
  font-size: 14px;
`;

const StatusBadge = styled.span<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? '#e6f4ea' : '#fce8e8'};
  color: ${props => props.$isActive ? '#34a853' : '#ea4335'};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

const PageButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${props => props.$active ? '#CC6237' : '#ddd'};
  background: ${props => props.$active ? '#CC6237' : 'white'};
  color: ${props => props.$active ? 'white' : '#333'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$active ? '#b55530' : '#f5f5f5'};
  }
`;

export default function Inscricoes() {
    const mockInscricoes = [
        {
            nome: 'João Silva',
            equipe: 'Equipe Alpha',
            evento: 'Clube de Lago Conexão Pantaneiro',
            status: 'Aprovado',
            dataInscricao: '15/03/2024'
        },
        {
            nome: 'Maria Santos',
            equipe: 'Equipe Beta',
            evento: 'Clube de Lago Conexão Pantaneiro',
            status: 'Pendente',
            dataInscricao: '16/03/2024'
        },
        {
            nome: 'Pedro Oliveira',
            equipe: 'Equipe Gamma',
            evento: 'Clube de Lago Conexão Pantaneiro',
            status: 'Aprovado',
            dataInscricao: '14/03/2024'
        }
    ];

    const handleSearch = (value: string) => {
        console.log(value);
    };

    return (
        <>
            <PageHeader>
                <Title>Inscrições</Title>
                <SearchContainer>
                    <SearchInput
                        placeholder="Buscar inscrições"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </SearchContainer>
            </PageHeader>

            <CardsGrid>
                {mockInscricoes.map((inscricao, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{inscricao.nome}</CardTitle>
                            <CardMenu>⋮</CardMenu>
                        </CardHeader>
                        <CardContent>
                            <CardInfo>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="#718096" />
                                    <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="#718096" />
                                </svg>
                                {inscricao.equipe}
                            </CardInfo>
                            <CardInfo>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V5" stroke="#718096" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 2V5" stroke="#718096" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 9.09H20.5" stroke="#718096" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#718096" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {inscricao.dataInscricao}
                            </CardInfo>
                            <CardInfo>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 12H14.5" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.5 15L15.5 12L12.5 9" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {inscricao.evento}
                            </CardInfo>
                            <StatusBadge $isActive={inscricao.status === 'Aprovado'}>
                                {inscricao.status}
                            </StatusBadge>
                        </CardContent>
                    </Card>
                ))}
            </CardsGrid>

            <Pagination>
                <PageButton>Anterior</PageButton>
                <PageButton $active>1</PageButton>
                <PageButton>2</PageButton>
                <PageButton>3</PageButton>
                <PageButton>Próxima</PageButton>
            </Pagination>
        </>
    );
}