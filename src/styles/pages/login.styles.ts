import { styled } from "styled-components";
import { colors } from "../themes/colors";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: ${colors.background.white};
`;

export const LoginCard = styled.div`
  display: flex;
  background: ${colors.background.white};
  gap: 50px;
  border-radius: 15px;
  width: 100%;
  max-width: 800px;
  height: 500px;
  overflow: hidden;
  box-shadow: 0 100px 200px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginForm = styled.div`
  flex: 1;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Logo = styled.div`
  margin-bottom: 30px;
  img {
    height: 40px;
    width: auto;
  }
`;

export const Title = styled.h1`
  color: ${colors.primary};
  font-size: 26px;
  margin-bottom: 2px;
`;

export const Subtitle = styled.p`
  color: ${colors.text.tertiary};
  font-size: 0.875rem;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${colors.primary};
  font-size: 13px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 12px;
  background: ${colors.background.light};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  background: ${colors.primary};
  color: ${colors.background.white};
  padding: 12px;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const IllustrationContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  @media (max-width: 768px) {
    display: none;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 20%;
  }
`;
