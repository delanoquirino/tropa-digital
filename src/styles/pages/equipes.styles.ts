import { styled } from "styled-components";
import { colors } from "../themes/colors";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  color: ${colors.primaryLight};
  font-size: 20px;
  margin: 0 0 20px 0;
`;

export const SearchContainer = styled.div`
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

export const CreateButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.background.white};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${colors.background.white};
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: ${colors.background.light};
  color: ${colors.primaryLighter};
  font-weight: 500;
  border-bottom: 1px solid ${colors.border.lighter};
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${colors.border.lighter};
  color: ${colors.text.tertiary};
`;

export const StatusBadge = styled.span<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive
      ? colors.status.success.background
      : colors.status.error.background};
  color: ${(props) =>
    props.$isActive ? colors.status.success.text : colors.status.error.text};
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

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 6px 12px;
  border: 1px solid
    ${(props) => (props.$active ? colors.primary : colors.border.lighter)};
  background: ${(props) =>
    props.$active ? colors.primary : colors.background.white};
  color: ${(props) =>
    props.$active ? colors.background.white : colors.text.primary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.$active ? colors.primaryHover : colors.background.light};
  }
`;

export const TableContainer = styled.div`
  background-color: ${colors.background.white};
  border-radius: 10px;
  border: 1px solid ${colors.border.light};
  padding: 20px;
`;

export const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

export const TeamCard = styled.div`
  background: ${colors.background.white};
  border-radius: 15px;
  padding: 20px;
  border: 1px solid ${colors.border.light};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.border.lighter};
`;

export const TeamLogo = styled.div`
  width: 60px;
  height: 60px;
  background: ${colors.background.light};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
`;

export const TeamInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    color: ${colors.text.primary};
    font-size: 16px;
  }

  p {
    margin: 5px 0 0;
    color: ${colors.text.secondary};
    font-size: 14px;
  }
`;

export const TeamStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const StatItem = styled.div`
  background: ${colors.background.light};
  padding: 10px;
  border-radius: 10px;
  text-align: center;

  .value {
    font-size: 20px;
    font-weight: bold;
    color: ${colors.primary};
    margin-bottom: 5px;
  }

  .label {
    font-size: 12px;
    color: ${colors.text.secondary};
  }
`;

export const TeamMembers = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MemberAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.background.light};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.background.white};
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

export const MoreMembers = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.primary};
  color: ${colors.background.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: -8px;
`;
