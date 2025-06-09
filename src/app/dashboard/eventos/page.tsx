'use client';

import SearchInput from '@/components/SearchInput';
import {
  CreateButton,
  DateSection,
  EventContent,
  EventInfo,
  EventItem,
  EventList,
  EventTitle,
  MainInfo,
  SearchContainer,
  StatItem,
  StatsSection,
  StatusBadge,
  Title
} from '@/styles/pages/eventos.styles';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Eventos() {
  const mockEventos = [
    {
      id: 1,
      titulo: 'Clube de Lago Conexão Pantaneiro',
      data: {
        dia: '09',
        mes: 'Jun',
        ano: '2024'
      },
      duracao: '3 dias',
      local: 'Campo Grande, MS',
      status: 'Ativo',
      equipes: 10,
      vagas: 15,
      inscritos: 45
    },
    {
      id: 2,
      titulo: 'Torneio Regional de Pesca',
      data: {
        dia: '15',
        mes: 'Jul',
        ano: '2024'
      },
      duracao: '3 dias',
      local: 'Bonito, MS',
      status: 'Ativo',
      equipes: 8,
      vagas: 12,
      inscritos: 32
    },
    {
      id: 3,
      titulo: 'Campeonato de Pesca Esportiva',
      data: {
        dia: '22',
        mes: 'Ago',
        ano: '2024'
      },
      duracao: '3 dias',
      local: 'Corumbá, MS',
      status: 'Pendente',
      equipes: 5,
      vagas: 20,
      inscritos: 15
    }
  ];

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Title>Eventos</Title>

      <SearchContainer>
        <SearchInput
          placeholder="Buscar eventos"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <CreateButton>
          <AddIcon />
          Novo evento
        </CreateButton>
      </SearchContainer>

      <EventList>
        {mockEventos.map((evento) => (
          <EventItem key={evento.id}>
            <DateSection>
              <span className="month">{evento.data.mes}</span>
              <span className="day">{evento.data.dia}</span>
              <span className="year">{evento.data.ano}</span>
            </DateSection>

            <EventContent>
              <MainInfo>
                <StatusBadge $isActive={evento.status === 'Ativo'}>
                  {evento.status}
                </StatusBadge>
                <EventTitle>{evento.titulo}</EventTitle>

                <EventInfo>
                  <CalendarMonthOutlinedIcon />
                  {evento.duracao}
                </EventInfo>

                <EventInfo>
                  <LocationOnOutlinedIcon />
                  {evento.local}
                </EventInfo>
              </MainInfo>

              <StatsSection>
                <StatItem>
                  <GroupsOutlinedIcon />
                  <span>{evento.equipes}</span> equipes
                </StatItem>
                <StatItem>
                  <span>{evento.inscritos}/{evento.vagas}</span> inscritos
                </StatItem>
              </StatsSection>
            </EventContent>
          </EventItem>
        ))}
      </EventList>
    </>
  );
}

