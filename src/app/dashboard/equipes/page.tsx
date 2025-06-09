'use client';

import SearchInput from '@/components/SearchInput';
import {
  CreateButton,
  MemberAvatar,
  MoreMembers,
  SearchContainer,
  StatItem,
  StatusBadge,
  TeamCard,
  TeamHeader,
  TeamInfo,
  TeamLogo,
  TeamMembers,
  TeamsGrid,
  TeamStats,
  Title
} from '@/styles/pages/equipes.styles';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

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