import React from 'react';

interface ButtonProps {
  itemProperties: {
    button_text: string;
    border_pixel: number;
    border_style: string;
    border_color: string;
    border_radius: number;
    backgroundColor: string;
    fontColor: string;
    fontSize: number;
    button_onClick: string;
  };
  handleChange: (key: string, value: any) => void;
  selectedItem: { name: string } | null;

}

const ButtonCanvas: React.FC<ButtonProps> = ({ itemProperties, handleChange }) => {
  return (
    <div className="button">
      <div className="input-group">
        <label>
          Button Text:
          <input
            type="text"
            value={itemProperties.button_text || ""}
            onChange={(e) => handleChange("button_text", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Width:
          <input
            type="number"
            value={itemProperties.border_pixel || 0}
            onChange={(e) => handleChange("border_pixel", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Style:
          <select
            value={itemProperties.border_style || "solid"}
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
            value={itemProperties.border_color || "#000000"}
            onChange={(e) => handleChange("border_color", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Border Radius:
          <input
            type="number"
            value={itemProperties.border_radius || 0}
            onChange={(e) => handleChange("border_radius", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Background Color:
          <input
            type="color"
            value={itemProperties.backgroundColor || "#000000"}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Text Color:
          <input
            type="color"
            value={itemProperties.fontColor || "#000000"}
            onChange={(e) => handleChange("fontColor", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Font Size:
          <input
            type="number"
            value={itemProperties.fontSize || 12}
            onChange={(e) => handleChange("fontSize", parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          onClick:
          <select
            value={itemProperties.button_onClick || "none"}
            onChange={(e) => handleChange("button_onClick", e.target.value)}
          >
            <option value="none">None</option>
            <option value="submit">Submit</option>
            <option value="reset">Reset</option>
            <option value="alert">Alert</option>
            <option value="log">Log</option>
            <option value="navigate">Navigate</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ButtonCanvas;
