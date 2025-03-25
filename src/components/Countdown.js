import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.section`
  background-color: var(--secondary-color);
  padding: 60px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--dark-color);
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const TimeBlock = styled.div`
  background-color: var(--light-color);
  border-radius: 8px;
  padding: 20px;
  min-width: 120px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    min-width: 100px;
    padding: 15px;
  }
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: var(--dark-color);
  text-transform: uppercase;
  margin-top: 5px;
`;

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-30T17:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownContainer>
      <div className="container">
        <Title>Contagem Regressiva para o Grande Dia</Title>
        <TimerWrapper>
          <TimeBlock>
            <Number>{timeLeft.days}</Number>
            <Label>Dias</Label>
          </TimeBlock>
          <TimeBlock>
            <Number>{timeLeft.hours}</Number>
            <Label>Horas</Label>
          </TimeBlock>
          <TimeBlock>
            <Number>{timeLeft.minutes}</Number>
            <Label>Minutos</Label>
          </TimeBlock>
          <TimeBlock>
            <Number>{timeLeft.seconds}</Number>
            <Label>Segundos</Label>
          </TimeBlock>
        </TimerWrapper>
      </div>
    </CountdownContainer>
  );
};

export default Countdown; 