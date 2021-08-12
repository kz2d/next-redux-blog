import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Container } from './container';
import Link from 'next/link';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header>
        <Container>
          <Nav>
            <Logo src="/images/logo.svg" />
            <div>
              <Link href="/">
                <NavItem>home</NavItem>
              </Link>
              <Link href="/posts/new">
                <NavItem>add item</NavItem>
              </Link>
            </div>
          </Nav>
        </Container>
      </Header>
      {children}
    </div>
  );
};

const Header = styled.header`
  background-color: var(--primary);
  padding: 16px 18px;
  font-size: 1.6rem;
  width: 100%;
  z-index: 10;
  height: 64px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  fill: white;
`;

const NavItem = styled.a`
  width: 200px;
  height: 100%;
  margin-left: 40px;
  cursor: pointer;
`;
