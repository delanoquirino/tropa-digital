'use client';

import SearchInput from '@/components/SearchInput';
import {
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  CardMenu,
  CardsGrid,
  CardTitle,
  PageButton,
  PageHeader,
  Pagination,
  SearchContainer,
  StatusBadge,
  Title
} from '@/styles/pages/inscricoes.styles';

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