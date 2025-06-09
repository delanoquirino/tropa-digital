import { styled } from "styled-components";
import { colors } from "../themes/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const WelcomeText = styled.div`
  h1 {
    color: ${colors.text.secondary};
    font-size: 16px;
    margin: 0;
  }

  span {
    color: ${colors.text.primary};
    font-weight: bold;
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

  th {
    background: transparent !important;
  }
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
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 6px 12px;
  border: 1px solid
    ${(props) => (props.active ? colors.primary : colors.border.lighter)};
  background: ${(props) =>
    props.active ? colors.primary : colors.background.white};
  color: ${(props) =>
    props.active ? colors.background.white : colors.text.primary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.active ? colors.primaryHover : colors.background.light};
  }
`;

export const TableContainer = styled.div`
  background-color: ${colors.background.white};
  border-radius: 10px;
  border: 1px solid ${colors.border.light};
  padding: 20px;
`;
