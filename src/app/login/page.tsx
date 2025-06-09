'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: white;
`;

const LoginCard = styled.div`
  display: flex;
  background: white;
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

const LoginForm = styled.div`
  flex: 1;
 padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.div`
  margin-bottom: 30px;
  img {
    height: 40px;
    width: auto;
  }
`;

const Title = styled.h1`
  color: #CC6237;
  font-size: 26px;
  margin-bottom: 2px;
`;

const Subtitle = styled.p`
  color: #95a6c7;
  font-size: 0.875rem;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #CC6237;
  font-size: 13px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 12px;
  background: #F6F6F6;
  

  &:focus {
    outline: none;
    border-color: #CC6237;
  }
`;

const Button = styled.button`
  background: #CC6237;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #A54425;
  }
`;

const ContainerImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const IllustrationContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #CC6237;
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

export default function Login() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/dashboard');
    };

    return (
        <LoginContainer>
            <LoginCard>
                <LoginForm>
                    <Logo>
                        <Image src="/logo.svg" alt="Tropa Digital Logo" width={161} height={25} priority />
                    </Logo>
                    <Title>Bem-vindo de volta</Title>
                    <Subtitle>Entre com o painel para acessar o painel.</Subtitle>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="seunome@seuemail.com"
                                required
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Digite aqui"
                                required
                            />
                        </InputGroup>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </LoginForm>
                <ContainerImage>
                    <IllustrationContainer>
                        <div>
                            <Image
                                src="/monitoring.png"
                                alt="monitoring"
                                width={357}
                                height={316}
                                priority
                            />
                        </div>
                    </IllustrationContainer>
                </ContainerImage>
            </LoginCard>
        </LoginContainer>
    );
} 