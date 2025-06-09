
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyle } from './globals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tropa Digital',
  description: 'Sistema de Gestão de Eventos',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} cz-shortcut-listen="true">
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
