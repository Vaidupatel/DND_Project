import React from 'react';

interface ImageProps {
  itemProperties: {
    imageUrl: string;
    img_width: number;
    img_height: number;
    img_blur: number;
    border_pixel: number;
    border_style: string;
    border_color: string;
    border_radius: number;
  };
  handleChange: (key: string, value: any) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUrlChange: () => void;
  selectedItem: { name: string } | null;

  
}

const ImageCanvas: React.FC<ImageProps> = ({
  itemProperties,
  handleChange,
  handleFileChange,
  handleUrlChange,
}) => {
  return (
    <div className="image">
      <div className="input-group">
        <label>
          Image Source:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Image URL:
          <input
            type="text"
            value={itemProperties.imageUrl}
            onChange={(e) => handleChange("imageUrl", e.target.value)}
          />
          <button onClick={handleUrlChange}>Set URL</button>
        </label>
      </div>
      <div className="input-group">
        <label>
          Image Width:
          <input
            type="number"
            value={itemProperties.img_width}
            onChange={(e) => handleChange("img_width", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Image Height:
          <input
            type="number"
            value={itemProperties.img_height}
            onChange={(e) => handleChange("img_height", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Image Blur:
          <input
            type="number"
            value={itemProperties.img_blur}
            onChange={(e) => handleChange("img_blur", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Width:
          <input
            type="number"
            value={itemProperties.border_pixel}
            onChange={(e) => handleChange("border_pixel", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Style:
          <select
            value={itemProperties.border_style}
            onChange={(e) => handleChange("border_style", e.target.value)}
          >
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
            <option value="groove">Groove</option>
            <option value="ridge">Ridge</option>
            <option value="inset">Inset</option>
            <option value="outset">Outset</option>
            <option value="none">None</option>
            <option value="hidden">Hidden</option>
          </select>
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Color:
          <input
            type="color"
            value={itemProperties.border_color}
            onChange={(e) => handleChange("border_color", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Radius:
          <input
            type="number"
            value={itemProperties.border_radius}
            onChange={(e) => handleChange("border_radius", parseInt(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageCanvas;
