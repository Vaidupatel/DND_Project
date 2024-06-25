import React from 'react';

interface TextProps {
  itemProperties: {
    fontFamily: string;
    fontSize: number;
    fontWeight: 'normal' | 'bold';
    underline: boolean;
    italic: boolean;
    fontColor: string;
    backgroundColor: string;
    backgroundImage: string;
    border_pixel: number;
    border_style: string;
    border_color: string;
    border_radius: number;
  };
  handleChange: (key: string, value: any) => void;
  selectedItem: { name: string } | null;

}

const TextCanvas: React.FC<TextProps> = ({ itemProperties, handleChange }) => {
  const handleBackgroundImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleChange("backgroundImage", event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="control-panel">
      <div className="input-group">
        <label>
          Font Style:
          <select
            value={itemProperties.fontFamily}
            onChange={(e) => handleChange("fontFamily", e.target.value)}
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
      </div>
      <div className="input-group">
        <label>
          Font Size:
          <input
            type="number"
            value={itemProperties.fontSize}
            onChange={(e) => handleChange("fontSize", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Bold:
          <input
            type="checkbox"
            checked={itemProperties.fontWeight === 'bold'}
            onChange={(e) => handleChange("fontWeight", e.target.checked ? 'bold' : 'normal')}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Underline:
          <input
            type="checkbox"
            checked={itemProperties.underline}
            onChange={(e) => handleChange("underline", e.target.checked)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Italic:
          <input
            type="checkbox"
            checked={itemProperties.italic}
            onChange={(e) => handleChange("italic", e.target.checked)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Font Color:
          <input
            type="color"
            value={itemProperties.fontColor}
            onChange={(e) => handleChange("fontColor", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Background Color:
          <input
            type="color"
            value={itemProperties.backgroundColor}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Background Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageUpload}
          />
          <input
            type="text"
            placeholder="or enter image URL"
            value={itemProperties.backgroundImage}
            onChange={(e) => handleChange("backgroundImage", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Text Border Pixel:
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
            <option value="none">None</option>
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
            <option value="groove">Groove</option>
            <option value="ridge">Ridge</option>
            <option value="inset">Inset</option>
            <option value="outset">Outset</option>
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

export default TextCanvas;
