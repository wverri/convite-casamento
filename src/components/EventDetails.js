import React from 'react';
import styled from 'styled-components';
import { FaRing, FaGlassCheers, FaUtensils, FaHeart } from 'react-icons/fa';

const EventSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-color);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 50px;
  color: var(--dark-color);
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 20px;
`;

const MenuLink = styled.a`
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid var(--primary-color);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--dark-color);
    border-color: var(--dark-color);
  }
`;

const ImportantNote = styled.div`
  max-width: 700px;
  margin: 50px auto 0;
  padding: 20px;
  background-color: var(--accent-color);
  border-radius: 8px;
  text-align: center;
`;

const NoteTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const NoteText = styled.p`
  font-size: 1rem;
`;

const EventDetails = () => {
  return (
    <EventSection id="evento">
      <div className="container">
        <SectionTitle>Nosso Grande Dia</SectionTitle>
        <SectionSubtitle>
          Gostaríamos de convidá-lo para fazer parte desse momento tão especial em nossas vidas
        </SectionSubtitle>
        
        <EventGrid>
          <EventCard>
            <IconContainer>
              <FaRing />
            </IconContainer>
            <CardTitle>Cerimônia</CardTitle>
            <CardText>
              A cerimônia de casamento será realizada no cartório do Colorado às 16h do dia 30 de Abril de 2025.
              Devido à limitação de espaço, somente 20 convidados poderão participar.
            </CardText>
          </EventCard>
          
          <EventCard>
            <IconContainer>
              <FaGlassCheers />
            </IconContainer>
            <CardTitle>Comemoração</CardTitle>
            <CardText>
              Após a cerimônia, gostaríamos de celebrar este momento com uma pequena recepção
              no Restaurante Potiguar em Planaltina-DF, a partir das 17h.
            </CardText>
          </EventCard>
          
          <EventCard>
            <IconContainer>
              <FaUtensils />
            </IconContainer>
            <CardTitle>Happy Hour e Refeições</CardTitle>
            <CardText>
              O local oferece diversas promoções durante o happy hour. Confira o cardápio completo
              e as opções disponíveis.
            </CardText>
            <MenuLink href="https://drive.google.com/file/d/1jsaaXl7Bmic_hPSEiCjFXcKf72Mrx9RX/view" target="_blank" rel="noopener noreferrer">
              Ver Cardápio
            </MenuLink>
          </EventCard>
          
          <EventCard>
            <IconContainer>
              <FaHeart />
            </IconContainer>
            <CardTitle>Sobre as Comandas</CardTitle>
            <CardText>
              Para maior comodidade de todos, as comandas serão individualizadas.
              Cada convidado poderá escolher e pagar pelo que consumir.
            </CardText>
          </EventCard>
        </EventGrid>
        
        <ImportantNote>
          <NoteTitle>Nosso Presente</NoteTitle>
          <NoteText>
            Lembre-se, nosso presente neste dia tão especial é a sua presença!
          </NoteText>
        </ImportantNote>
      </div>
    </EventSection>
  );
};

export default EventDetails; 