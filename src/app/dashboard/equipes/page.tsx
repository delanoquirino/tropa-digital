'use client';

import SearchInput from '@/components/SearchInput';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
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

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #d5dfec;
  transition: all 0.2s;
  cursor: pointer;
 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

const TeamLogo = styled.div`
  width: 60px;
  height: 60px;
  background: #F6F6F6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #CC6237;
`;

const TeamInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    color: #333;
    font-size: 16px;
  }

  p {
    margin: 5px 0 0;
    color: #666;
    font-size: 14px;
  }
`;

const TeamStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StatItem = styled.div`
  background: #F6F6F6;
  padding: 10px;
  border-radius: 10px;
  text-align: center;

  .value {
    font-size: 20px;
    font-weight: bold;
    color: #CC6237;
    margin-bottom: 5px;
  }

  .label {
    font-size: 12px;
    color: #666;
  }
`;

const TeamMembers = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MemberAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  margin-left: -8px;
  
  &:first-child {
    margin-left: 0;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const MoreMembers = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #CC6237;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: -8px;
`;

const StatusBadge = styled.span<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? '#e6f4ea' : '#fce8e8'};
  color: ${props => props.$isActive ? '#34a853' : '#ea4335'};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: fit-content;

  @media (max-width: 768px) {
    width: 100%;
  }

 
`;

export default function Equipes() {
    const mockEquipes = [
        {
            nome: 'Equipe Alpha',
            lider: 'João Silva',
            membros: 8,
            eventos: 3,
            status: 'Ativo',
            ultimoEvento: '15/03/2024',
            membrosAvatars: ['/user.svg', '/user.svg', '/user.svg']
        },
        {
            nome: 'Equipe Beta',
            lider: 'Maria Santos',
            membros: 12,
            eventos: 5,
            status: 'Ativo',
            ultimoEvento: '16/03/2024',
            membrosAvatars: ['/user.svg', '/user.svg', '/user.svg', '/user.svg']
        },
        {
            nome: 'Equipe Gamma',
            lider: 'Pedro Oliveira',
            membros: 6,
            eventos: 2,
            status: 'Inativo',
            ultimoEvento: '14/03/2024',
            membrosAvatars: ['/user.svg', '/user.svg']
        }
    ];

    const handleSearch = (value: string) => {
        console.log(value);
    };

    return (
        <>

            <Title>Equipes</Title>

            <SearchContainer>
                <SearchInput
                    placeholder="Buscar equipes"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <CreateButton>
                    <GroupAddIcon />
                    Nova equipe
                </CreateButton>
            </SearchContainer>

            <TeamsGrid>
                {mockEquipes.map((equipe, index) => (
                    <TeamCard key={index}>
                        <StatusBadge $isActive={equipe.status === 'Ativo'}>
                            {equipe.status}
                        </StatusBadge>

                        <TeamHeader>
                            <TeamLogo>
                                <PersonIcon style={{ fontSize: 30 }} />
                            </TeamLogo>
                            <TeamInfo>
                                <h3>{equipe.nome}</h3>
                                <p>Líder: {equipe.lider}</p>
                            </TeamInfo>
                        </TeamHeader>

                        <TeamStats>
                            <StatItem>
                                <div className="value">{equipe.membros}</div>
                                <div className="label">Membros</div>
                            </StatItem>
                            <StatItem>
                                <div className="value">{equipe.eventos}</div>
                                <div className="label">Eventos</div>
                            </StatItem>
                        </TeamStats>

                        <TeamMembers>
                            {equipe.membrosAvatars.map((avatar, i) => (
                                <MemberAvatar key={i}>
                                    <Image src={avatar} alt="Membro" width={30} height={30} />
                                </MemberAvatar>
                            ))}
                            {equipe.membros > equipe.membrosAvatars.length && (
                                <MoreMembers>
                                    +{equipe.membros - equipe.membrosAvatars.length}
                                </MoreMembers>
                            )}
                        </TeamMembers>
                    </TeamCard>
                ))}
            </TeamsGrid>
        </>
    );
}