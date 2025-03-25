import React, { useState } from 'react';
import styled from 'styled-components';

// Importando as imagens do casal
import img1 from '../assets/couple1.jpg';
import img2 from '../assets/couple2.jpg';
import img3 from '../assets/couple3.jpg';
import img4 from '../assets/couple4.jpg';
import img5 from '../assets/couple5.jpg';
import img6 from '../assets/couple6.jpg';
import img7 from '../assets/couple7.jpg';
import img8 from '../assets/couple8.jpg';
import img9 from '../assets/couple9.jpg';
import img10 from '../assets/couple10.jpg';
import img11 from '../assets/couple11.jpg';
import img12 from '../assets/couple12.jpg';


const GallerySection = styled.section`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 30px;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &.prev {
    left: -60px;
  }
  
  &.next {
    right: -60px;
  }
  
  @media (max-width: 768px) {
    &.prev {
      left: -40px;
    }
    
    &.next {
      right: -40px;
    }
  }
`;

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Usando as imagens importadas agora
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  
  const openModal = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <GallerySection id="galeria">
      <div className="container">
        <SectionTitle>Nossa História</SectionTitle>
        <SectionSubtitle>
          Uma coleção de momentos especiais da nossa jornada juntos
        </SectionSubtitle>
        
        <GalleryGrid>
          {images.map((img, index) => (
            <GalleryItem key={index} onClick={() => openModal(index)}>
              <GalleryImage src={img} alt={`Andréia e Willian - Momento ${index + 1}`} />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </div>
      
      {modalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <NavButton className="prev" onClick={prevImage}>&#10094;</NavButton>
            <ModalImage 
              src={images[currentImage]} 
              alt={`Andréia e Willian - Momento ${currentImage + 1}`} 
            />
            <NavButton className="next" onClick={nextImage}>&#10095;</NavButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </GallerySection>
  );
};

export default Gallery; 