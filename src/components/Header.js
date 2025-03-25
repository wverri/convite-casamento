import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
  background-color: ${({ scrolled }) => scrolled ? 'rgba(254, 250, 224, 0.9)' : 'transparent'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-color);
  display: flex;
  align-items: center;
  
  span {
    margin: 0 10px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  
  @media (max-width: 768px) {
    margin: 5px 10px;
  }
`;

const NavLink = styled.a`
  color: var(--dark-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo>
          Andréia <span>&</span> Willian
        </Logo>
        <NavLinks>
          <NavItem><NavLink href="#inicio">Início</NavLink></NavItem>
          <NavItem><NavLink href="#evento">O Evento</NavLink></NavItem>
          <NavItem><NavLink href="#local">Local</NavLink></NavItem>
          <NavItem><NavLink href="#galeria">Galeria</NavLink></NavItem>
          <NavItem><NavLink href="#confirmacao">Confirmação</NavLink></NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 