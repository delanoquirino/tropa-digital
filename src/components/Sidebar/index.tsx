'use client';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseIcon from '@mui/icons-material/Close';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { styled } from 'styled-components';

const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  background: #CC6237;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: 250px;
  height: 100vh;
  background: white;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease;
  z-index: 100;
  @media (max-width: 768px) {
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  }
`;

const MainContentWrapper = styled.div<{ $isOpen: boolean }>`
  margin-left: 250px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Logo = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: contain;
  img {
     padding: 10px 20px;
     margin-top: 10px;
  }

`;

const MenuSection = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled(Link) <{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${props => props.$active ? '#FFFFFF' : '#252525'};
  border-radius: 20px;
  text-decoration: none;
  background: ${props => props.$active ? '#CC6237' : 'transparent'};
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background: ${props => props.$active ? '#CC6237' : '#f5f5f5'};
    color: ${props => props.$active ? '#FFFFFF' : '#252525'};
  }

  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const UserSection = styled.div`
   padding: 10px 20px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

 

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 1px;
    border: 1px solid #CC6237;
    }

  .user-info {
    flex: 1;
    
    .name {
      font-weight: 500;
      color: #333;
      font-size: 14px;
    }
    
    .role {
      color: #666;
      font-size: 12px;
    }
  }
`;

const UserMenuItem = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: #252525;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: #CC6237;
  }

  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;

const MenuTitle = styled.div`
  padding: 10px;
  font-size: 12px;
  
  font-weight: bold;
  color: #A3A3A3;
`;

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </ToggleButton>

      <SidebarContainer $isOpen={isOpen}>
        <Logo>
          <Image src="/logo.svg" alt="Tropa Digital" fill priority />
        </Logo>

        <MenuSection>
          <MenuTitle>
            Menu
          </MenuTitle>

          <MenuItem href="/dashboard/" $active={pathname === '/dashboard'}>
            <GridViewOutlinedIcon />
            Dashboard
          </MenuItem>
          <MenuItem href="/dashboard/eventos" $active={pathname === '/dashboard/eventos'}>
            <CalendarMonthOutlinedIcon />
            Eventos
          </MenuItem>
          <MenuItem href="/dashboard/equipes" $active={pathname === '/dashboard/equipes'}>
            <GroupsOutlinedIcon />
            Equipes
          </MenuItem>
          <MenuItem href="/dashboard/inscricoes" $active={pathname === '/dashboard/inscricoes'}>
            <GroupOutlinedIcon />
            Inscrições
          </MenuItem>
        </MenuSection>

        <UserSection>
          <UserProfile>
            <Image src="/user.svg" alt="Kaique Steck" width={40} height={40} />
            <div className="user-info">
              <div className="name">Kaique Steck</div>
              <div className="role">Administrador</div>
            </div>
          </UserProfile>

          <UserMenuItem href="/perfil">
            <Person2OutlinedIcon />
            Alterar dados
          </UserMenuItem>

          <UserMenuItem href="/">
            <LogoutOutlinedIcon />
            Sair
          </UserMenuItem>
        </UserSection>
      </SidebarContainer>

      <MainContentWrapper $isOpen={isOpen}>
        {children}
      </MainContentWrapper>
    </>
  );
} 