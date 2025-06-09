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
    margin-bottom: 10px;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  color: ${colors.primaryLight};
  font-size: 24px;
  margin: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background: ${colors.background.white};
  border-radius: 12px;
  border: 1px solid ${colors.border.light};
  padding: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h3`
  color: #2d3748;
  font-size: 18px;
  margin: 0;
`;

export const CardMenu = styled.button`
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  font-size: 20px;
  padding: 0;

  &:hover {
    color: #2d3748;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #718096;
  font-size: 14px;
`;

export const StatusBadge = styled.span<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive
      ? colors.status.success.background
      : colors.status.error.background};
  color: ${(props) =>
    props.$isActive ? colors.status.success.text : colors.status.error.text};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
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
