import React from 'react';

interface radioprops {
  itemProperties: {
    radio_group:string;
    radio_value:string;
    radio_label:string;
    radio_disabled:boolean;
    backgroundColor:string;
    fontSize:number;
  };
  handleChange: (key: string, value: any) => void;
  selectedItem: { name: string } | null;
}
const RadioCanvas: React.FC<radioprops> = ({ itemProperties, handleChange }) => {
    return (
      <div className="radio">
        <div className="input-group">
          <label>
            radio Label:
            <input
              type="text"
              value={itemProperties.radio_label || ""}
              onChange={(e) => handleChange("radio_label", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            radio Group name: (get more buttons and group them for selection handling)
            <input
              type="text"
              value={itemProperties.radio_group || ""}
              onChange={(e) => handleChange("radio_group", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            radio value:
            <input
              type="text"
              value={itemProperties.radio_value || ""}
              onChange={(e) => handleChange("radio_value", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Disabled:
            <input
              type="checkbox"
              checked={itemProperties.radio_disabled || false}
              onChange={(e) => handleChange("radio_disabled", e.target.checked)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            radio Color:
            <input
              type="color"
              value={itemProperties.backgroundColor || "#000000"}
              onChange={(e) => handleChange("backgroundColor", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            radio Size:
            <input
              type="number"
              value={itemProperties.fontSize || 16}
              onChange={(e) => handleChange("fontSize", parseInt(e.target.value))}
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default RadioCanvas;
  