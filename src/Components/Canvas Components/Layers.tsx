import React from 'react';

interface LayersProps {
  droppedItems: any[];
}

const Layers: React.FC<LayersProps> = ({ droppedItems }) => {
  return (
    <div className="layers">
      <h2>Layers</h2>
      <ul>
        {droppedItems.map((item, index) => (
          <li key={item.id}>
            {index + 1}. {item.name} - x: {item.x}, y: {item.y}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Layers;
