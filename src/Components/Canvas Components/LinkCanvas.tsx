import React from 'react';

interface LinkProps {
  itemProperties: {
    link_destination: string;
    link_name: string;
    link_decoration: string;
    fontColor: string;
    link_font_size: number;
    border_pixel: number;
    border_style: string;
    border_color: string;
    border_radius: number;
  };
  handleChange: (key: string, value: any) => void;
  selectedItem: { name: string } | null;

}

const LinkCanvas: React.FC<LinkProps> = ({ itemProperties, handleChange }) => {
  return (
    <div className="link">
      <div className="input-group">
        <label>
          Link Destination:
          <input
            type="text"
            value={itemProperties.link_destination || ""}
            onChange={(e) => handleChange("link_destination", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Link Name:
          <input
            type="text"
            value={itemProperties.link_name || ""}
            onChange={(e) => handleChange("link_name", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Link Decoration:
          <select
            value={itemProperties.link_decoration || ""}
            onChange={(e) => handleChange("link_decoration", e.target.value)}
          >
            <option value="underline">Underline</option>
            <option value="none">None</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
            <option value="line-through">Line-through</option>
            <option value="overline">Overline</option>
            <option value="solid">Solid</option>
            <option value="wavy">Wavy</option>
          </select>
        </label>
      </div>
      <div className="input-group">
        <label>
          Link Color:
          <input
            type="color"
            value={itemProperties.fontColor || "#000000"}
            onChange={(e) => handleChange("fontColor ", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Link Font Size:
          <input
            type="number"
            value={itemProperties.link_font_size || 12}
            onChange={(e) => handleChange("link_font_size", parseInt(e.target.value))}
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

export default LinkCanvas;
