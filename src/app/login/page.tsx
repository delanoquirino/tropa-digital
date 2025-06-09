'use client';
import {
  Button,
  ContainerImage,
  Form,
  IllustrationContainer,
  Input,
  InputGroup,
  Label,
  LoginCard,
  LoginContainer,
  LoginForm,
  Logo,
  Subtitle,
  Title
} from '@/styles/pages/login.styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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