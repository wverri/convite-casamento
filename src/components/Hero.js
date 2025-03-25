import React from 'react';
import styled from 'styled-components';
// Corrigindo o nome do arquivo para o que realmente existe na pasta assets
import heroBg from '../assets/hero-gb.jpg';

const HeroSection = styled.section`
  height: 100vh;
  /* Alterando o gradiente de roxo para tons de bege */
  background: linear-gradient(rgba(210, 190, 160, 0.5), rgba(245, 235, 220, 0.6)), url(${heroBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #614b32; /* Tom marrom escuro para textos */
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url('https://www.transparenttextures.com/patterns/clean-gray-paper.png');
    opacity: 0.1;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  background: rgba(245, 235, 220, 0.4);
  backdrop-filter: blur(5px);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(210, 190, 160, 0.3);
`;

const Ampersand = styled.span`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 4.5rem;
  display: inline-block;
  margin: 0 10px;
  vertical-align: middle;
  color: #8B7355; /* Cor mais escura para o & */
`;

const Names = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
  color: #614b32;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const DateDisplay = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  color: #614b32;
  
  &::before, &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 60px;
    background: rgba(150, 120, 90, 0.7);
    top: 50%;
  }
  
  &::before {
    left: -80px;
  }
  
  &::after {
    right: -80px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    &::before, &::after {
      width: 30px;
    }
    
    &::before {
      left: -40px;
    }
    
    &::after {
      right: -40px;
    }
  }
`;

const Invitation = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  color: #614b32;
`;

const ScrollDown = styled.a`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #614b32;
  animation: bounce 2s infinite;
  cursor: pointer;
  z-index: 10;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-30px) translateX(-50%);
    }
    60% {
      transform: translateY(-15px) translateX(-50%);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="inicio">
      <ContentWrapper>
        <Names>Andréia <Ampersand>&</Ampersand> Willian</Names>
        <DateDisplay>30 de Abril de 2025</DateDisplay>
        <Invitation>
          Temos a alegria de convidar você para celebrar nosso casamento!
        </Invitation>
      </ContentWrapper>
      <ScrollDown href="#evento">
        ↓
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero; 