import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p><a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/mudeomundo/home">Doe o Troco via PagSeguro</a></p>
      
    </div>
  );
};

export default ExploreContainer;
