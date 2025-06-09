'use client';

import SearchInput from '@/components/SearchInput';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { styled } from 'styled-components';

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

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
    gap: 10px;
  }
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

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

 
`;

const EventItem = styled.div`
  background: white;
  border-radius: 15px;
  border: 1px solid #d5dfec;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const DateSection = styled.div`
  background: #F6F6F6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  border-right: 1px solid #eee;

  .month {
    color: #CC6237;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .day {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 5px 0;
  }

  .year {
    color: #666;
    font-size: 14px;
  }
`;

const EventContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  gap: 20px;

   @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const MainInfo = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 18px;
`;

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #657593;
  font-size: 14px;
  margin-bottom: 8px;

  svg {
    color: #CC6237;
    font-size: 20px;
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  border-left: 1px solid #eee;
  min-width: 150px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #657593;
  font-size: 14px;

  span {
    font-weight: 500;
    color: #333;
  }
`;

const StatusBadge = styled.span<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? '#e6f4ea' : '#fce8e8'};
  color: ${props => props.$isActive ? '#34a853' : '#ea4335'};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 10px;
  display: inline-block;
`;

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

