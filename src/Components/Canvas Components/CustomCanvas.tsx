import React from "react";

interface CustomCanvasProps {
  canvasWidth: number;
  setCanvasWidth: (width: number) => void;
  canvasHeight: number;
  setCanvasHeight: (height: number) => void;
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
}

const CustomCanvas: React.FC<CustomCanvasProps> = ({
  canvasWidth,
  setCanvasWidth,
  canvasHeight,
  setCanvasHeight,
  showGrid,
  setShowGrid,
}) => {
  return (
    <div className="custom-canvas">
      <h3>Custom Canvas Settings</h3>
      <div className="width">
        <label htmlFor="width">Canvas Width</label>
        <input
          type="number"
          id="width"
          min={0}
          max={1000}
          value={canvasWidth}
          onChange={(e) => setCanvasWidth(parseInt(e.target.value))}
        />
      </div>
      <div className="height">
        <label htmlFor="height">Canvas Height</label>
        <input
          type="number"
          id="height"
          min={0}
          max={1000}
          value={canvasHeight}
          onChange={(e) => setCanvasHeight(parseInt(e.target.value))}
        />
      </div>
      <div className="grid">
        <label htmlFor="grid">Show Grid</label>
        <input
          type="checkbox"
          id="grid"
          checked={showGrid}
          onChange={(e) => setShowGrid(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default CustomCanvas;
