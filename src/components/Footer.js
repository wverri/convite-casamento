import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 60px 0 30px;
  text-align: center;
`;

const CoupleNames = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WeddingDate = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Message = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.8;
`;

const Divider = styled.div`
  width: 100px;
  height: 2px;
  background-color: var(--primary-color);
  margin: 0 auto 40px;
`;

const Heart = styled(FaHeart)`
  color: var(--primary-color);
  margin: 0 5px;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-top: 40px;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <CoupleNames>Andréia & Willian</CoupleNames>
        <WeddingDate>30 de Abril de 2025</WeddingDate>
        <Message>
          Agradecemos por fazer parte deste momento tão especial em nossas vidas.
          Sua presença é o nosso maior presente.
        </Message>
        
        <Divider />
        
        <p>
          Com amor <Heart /> Andréia & Willian
        </p>
        
        <Copyright>
          © {new Date().getFullYear()} - Todos os direitos reservados
        </Copyright>
      </div>
    </FooterSection>
  );
};

export default Footer; 