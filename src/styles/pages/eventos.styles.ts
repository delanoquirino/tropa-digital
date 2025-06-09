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

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const EventItem = styled.div`
  background: ${colors.background.white};
  border-radius: 15px;
  border: 1px solid ${colors.border.light};
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

export const DateSection = styled.div`
  background: ${colors.background.light};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  border-right: 1px solid ${colors.border.lighter};

  .month {
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .day {
    font-size: 24px;
    font-weight: bold;
    color: ${colors.text.primary};
    margin: 5px 0;
  }

  .year {
    color: ${colors.text.secondary};
    font-size: 14px;
  }
`;

export const EventContent = styled.div`
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

export const MainInfo = styled.div`
  flex: 1;
`;

export const EventTitle = styled.h3`
  margin: 0 0 10px 0;
  color: ${colors.text.primary};
  font-size: 18px;
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.text.tertiary};
  font-size: 14px;
  margin-bottom: 8px;

  svg {
    color: ${colors.primary};
    font-size: 20px;
  }
`;

export const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  border-left: 1px solid ${colors.border.lighter};
  min-width: 150px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${colors.text.tertiary};
  font-size: 14px;

  span {
    font-weight: 500;
    color: ${colors.text.primary};
  }
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
  margin-bottom: 10px;
  display: inline-block;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border: 1px solid
    ${(props) => (props.$active ? colors.primary : colors.border.lighter)};
  background: ${(props) =>
    props.$active ? colors.primary : colors.background.white};
  color: ${(props) =>
    props.$active ? colors.background.white : colors.text.primary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? colors.primaryHover : colors.background.light};
  }
`;
