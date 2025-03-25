import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserPlus, FaUserMinus, FaCheck, FaTimes } from 'react-icons/fa';

const FormSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-color);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--dark-color);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 50px;
  color: var(--text-color);
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--dark-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 1rem;
  font-family: var(--font-body);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(177, 155, 119, 0.2);
  }
`;

const GuestItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  input {
    flex: 1;
    margin-right: 10px;
  }
`;

const ActionButton = styled.button`
  background-color: ${props => props.secondary ? 'white' : 'var(--primary-color)'};
  color: ${props => props.secondary ? 'var(--primary-color)' : 'white'};
  border: 1px solid var(--primary-color);
  padding: ${props => props.small ? '5px 10px' : '12px 25px'};
  border-radius: 5px;
  font-family: var(--font-body);
  font-size: ${props => props.small ? '0.8rem' : '1rem'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(177, 155, 119, 0.1)' : 'var(--primary-dark)'};
  }
  
  svg {
    margin-right: ${props => props.iconOnly ? '0' : '5px'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const GuestControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const AttendanceBtns = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const AttendanceBtn = styled.button`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.active ? 
    (props.confirm ? 'rgba(75, 181, 67, 0.1)' : 'rgba(220, 53, 69, 0.1)') : 
    'transparent'};
  border: 1px solid ${props => props.active ? 
    (props.confirm ? 'rgba(75, 181, 67, 0.5)' : 'rgba(220, 53, 69, 0.5)') : 
    'rgba(0, 0, 0, 0.1)'};
  border-radius: 5px;
  color: var(--dark-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => 
      props.confirm ? 'rgba(75, 181, 67, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
  }
  
  svg {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${props => props.confirm ? '#4BB543' : '#DC3545'};
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(75, 181, 67, 0.1);
  border: 1px solid rgba(75, 181, 67, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
  
  h3 {
    color: #4BB543;
    margin-bottom: 10px;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
  
  h3 {
    color: #DC3545;
    margin-bottom: 10px;
  }
`;

const ConfirmationForm = () => {
  const [mainGuest, setMainGuest] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalGuests, setAdditionalGuests] = useState(['']);
  const [attending, setAttending] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Adicionar campo para convidado adicional
  const addGuestField = () => {
    setAdditionalGuests([...additionalGuests, '']);
  };
  
  // Remover campo de convidado adicional
  const removeGuestField = (index) => {
    const newGuests = [...additionalGuests];
    newGuests.splice(index, 1);
    setAdditionalGuests(newGuests);
  };
  
  // Atualizar o nome de um convidado adicional
  const updateGuestName = (index, value) => {
    const newGuests = [...additionalGuests];
    newGuests[index] = value;
    setAdditionalGuests(newGuests);
  };
  
  // Formatação automática do telefone
  const formatPhoneNumber = (value) => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');
    
    if (!numericValue) return '';
    
    // Formato para celular (11 dígitos)
    if (numericValue.length > 10) {
      // Formato: (XX) XXXXX-XXXX
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`;
    } 
    // Formato para telefone fixo (10 dígitos ou menos)
    else if (numericValue.length > 6) {
      // Formato: (XX) XXXX-XXXX
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 6)}-${numericValue.slice(6, 10)}`;
    }
    else if (numericValue.length > 2) {
      // Formato parcial: (XX) XXXX
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
    }
    else if (numericValue.length > 0) {
      // Formato parcial: (X
      return `(${numericValue}`;
    }
    
    return numericValue;
  };
  
  // Lidar com mudanças no campo de telefone
  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };
  
  // Enviar dados para o Google Sheets
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!mainGuest || attending === null) {
      alert('Por favor, preencha seu nome e confirme sua presença.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Filtrar convidados adicionais vazios
    const validAdditionalGuests = additionalGuests.filter(guest => guest.trim() !== '');
    
    try {
      // Preparar dados para envio
      const formData = {
        mainGuest,
        phone,
        additionalGuests: validAdditionalGuests,
        attending,
        timestamp: new Date().toISOString()
      };
      
      // URL do seu script do Google Apps Script
      // Você precisará substituir pela URL obtida na implantação do Apps Script
      const scriptURL = 'https://script.google.com/macros/s/AKfycbx48Y08SGU13wCofNGKt5L91w3r8lTvLlpULcnAms1n1tvu3xyXoZh1ywuK2ujRsY8y-w/exec';
      
      // Enviar os dados para o Google Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        // Limpar o formulário após envio bem-sucedido
        setMainGuest('');
        setPhone('');
        setAdditionalGuests(['']);
        setAttending(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <FormSection id="confirmacao">
      <div className="container">
        <SectionTitle>Confirmação de Presença</SectionTitle>
        <SectionSubtitle>
          Por favor, confirme sua presença e a de seus acompanhantes até 15/04/2025
        </SectionSubtitle>
        
        <FormContainer>
          {submitStatus === 'success' ? (
            <SuccessMessage>
              <h3>Confirmação Recebida!</h3>
              <p>Agradecemos sua confirmação. Estamos muito felizes que você fará parte deste momento especial.</p>
            </SuccessMessage>
          ) : submitStatus === 'error' ? (
            <ErrorMessage>
              <h3>Ops! Algo deu errado.</h3>
              <p>Houve um problema ao enviar sua confirmação. Por favor, tente novamente ou entre em contato diretamente conosco.</p>
            </ErrorMessage>
          ) : (
            <form onSubmit={handleSubmit}>
              <AttendanceBtns>
                <AttendanceBtn 
                  type="button"
                  onClick={() => setAttending(true)}
                  active={attending === true}
                  confirm={true}
                >
                  <FaCheck />
                  Confirmar Presença
                </AttendanceBtn>
                <AttendanceBtn 
                  type="button"
                  onClick={() => setAttending(false)}
                  active={attending === false}
                  confirm={false}
                >
                  <FaTimes />
                  Não Poderei Comparecer
                </AttendanceBtn>
              </AttendanceBtns>
              
              <FormGroup>
                <Label htmlFor="mainGuest">Seu Nome Completo</Label>
                <Input 
                  type="text" 
                  id="mainGuest" 
                  value={mainGuest}
                  onChange={(e) => setMainGuest(e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Seu Telefone</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  maxLength={16}
                />
              </FormGroup>
              
              {attending && (
                <>
                  <GuestControls>
                    <Label>Acompanhantes</Label>
                    <ActionButton 
                      type="button" 
                      small 
                      onClick={addGuestField}
                    >
                      <FaUserPlus style={{ marginRight: '5px' }} />
                      Adicionar Acompanhante
                    </ActionButton>
                  </GuestControls>
                
                  {additionalGuests.map((guest, index) => (
                    <GuestItem key={index}>
                      <Input
                        type="text"
                        value={guest}
                        onChange={(e) => updateGuestName(index, e.target.value)}
                        placeholder={`Nome do acompanhante ${index + 1}`}
                      />
                      {index > 0 && (
                        <ActionButton 
                          type="button" 
                          secondary 
                          small 
                          iconOnly
                          onClick={() => removeGuestField(index)}
                        >
                          <FaUserMinus />
                        </ActionButton>
                      )}
                    </GuestItem>
                  ))}
                </>
              )}
              
              <ButtonGroup>
                <ActionButton 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Confirmação'}
                </ActionButton>
              </ButtonGroup>
            </form>
          )}
        </FormContainer>
      </div>
    </FormSection>
  );
};

export default ConfirmationForm; 