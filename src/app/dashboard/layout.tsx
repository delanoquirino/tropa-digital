'use client';

import Sidebar from '@/components/Sidebar';
import { styled } from 'styled-components';

const LayoutContainer = styled.div`
 
  min-height: 100vh;
  background: #f5f5f5;
`;

const DashboardContainer = styled.div`
  padding: 40px 20px;
  background-color: #F6F6F6;
  
`;

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LayoutContainer>
            <Sidebar>
                <DashboardContainer>
                    {children}
                </DashboardContainer>


            </Sidebar>
        </LayoutContainer>
    );
} 