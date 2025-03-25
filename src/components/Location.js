import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt, FaClock, FaParking } from 'react-icons/fa';
import L from 'leaflet';

// Correção para o ícone do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationSection = styled.section`
  padding: 80px 0;
  background-color: var(--secondary-color);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
`;

const LocationContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const InfoPanel = styled.div`
  flex: 1;
  padding: 30px;
  background-color: white;
  border-radius: 8px 0 0 8px;
  
  @media (max-width: 992px) {
    border-radius: 8px 8px 0 0;
  }
`;

const MapPanel = styled.div`
  flex: 1;
  height: 400px;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  
  @media (max-width: 992px) {
    border-radius: 0 0 8px 8px;
  }
`;

const VenueTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

const AddressText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const InfoIcon = styled.div`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-right: 15px;
`;

const InfoText = styled.p`
  font-size: 1rem;
`;

const DirectionsButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 4px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--dark-color);
  }
`;

const StyledMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

const Location = () => {
  // Coordenadas do Restaurante Potiguar em Planaltina-DF (exemplo fictício)
  const position = [-15.602107, -47.654614]; //

  return (
    <LocationSection id="local">
      <div className="container">
        <SectionTitle>Localização</SectionTitle>
        
        <LocationContainer>
          <InfoPanel>
            <VenueTitle>Restaurante Potiguar</VenueTitle>
            <AddressText>Avenia Independência logo após a entrada da cidade, Planaltina - DF</AddressText>
            
            <InfoItem>
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              <InfoText>Localizado no centro de Planaltina, com fácil acesso.</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon><FaClock /></InfoIcon>
              <InfoText>A partir das 17h, após a cerimônia.</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon><FaParking /></InfoIcon>
              <InfoText>Estacionamento disponível no local.</InfoText>
            </InfoItem>
            
            <DirectionsButton 
              href="https://maps.app.goo.gl/ySGKdYQnvWF695GK7" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Como Chegar
            </DirectionsButton>
          </InfoPanel>
          
          <MapPanel>
            <StyledMap center={position} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Restaurante Potiguar <br /> Local da comemoração.
                </Popup>
              </Marker>
            </StyledMap>
          </MapPanel>
        </LocationContainer>
      </div>
    </LocationSection>
  );
};

export default Location; 