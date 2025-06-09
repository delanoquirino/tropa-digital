'use client';

import SearchIcon from '@mui/icons-material/Search';
import { styled } from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 40px;
  
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  border: none;
  transition: all 0.2s;
 

  &::placeholder {
    color: #c5c5c5;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #c5c5c5;
  pointer-events: none;



`;

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export default function SearchInput({ placeholder = "Buscar...", ...props }: SearchInputProps) {
    return (
        <InputContainer>
            <IconWrapper>
                <SearchIcon />
            </IconWrapper>
            <Input placeholder={placeholder} {...props} />

        </InputContainer>
    );
} 