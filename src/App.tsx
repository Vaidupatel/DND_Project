import React, { useState } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Navbar from './Components/Navbar';
import Left_sidebar from './Components/Left_sidebar';
import Right_sidebar from './Components/Right_sidebar';
import Layers from './Components/Layers';

const App: React.FC = () => {
  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(600);
  const [showGrid, setShowGrid] = useState(true);
  const [droppedItems, setDroppedItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const updateItem = (updatedItem: any) => {
    setDroppedItems((items) =>
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setSelectedItem(updatedItem);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <Left_sidebar />
        <Canvas
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          showGrid={showGrid}
          droppedItems={droppedItems}
          setDroppedItems={setDroppedItems}
          setSelectedItem={setSelectedItem}
        />
          <Right_sidebar
            selectedItem={selectedItem}
            updateItem={updateItem}
            canvasWidth={canvasWidth}
            setCanvasWidth={setCanvasWidth}
            canvasHeight={canvasHeight}
            setCanvasHeight={setCanvasHeight}
            showGrid={showGrid}
            setShowGrid={setShowGrid}
          />
      </div>
        {/* <Layers/> */}
    </>
  );
};

export default App;
