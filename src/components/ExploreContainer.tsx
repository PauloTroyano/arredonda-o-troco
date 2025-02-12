import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/mudeomundo/home">Ajude a StartUp Mude o Mundo</a></p>
      
    </div>
  );
};

export default ExploreContainer;
