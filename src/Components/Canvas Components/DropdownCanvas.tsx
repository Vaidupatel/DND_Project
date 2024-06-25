import React from 'react';

interface DropdownProperties {
  drop_options: string;
  backgroundColor:string;
  fontSize:number;
}

interface DropdownPropertiesProps {
  selectedItem: { name: string } | null;
  itemProperties: DropdownProperties;
  handleChange: (property: string, value: string) => void;
}

const DropdownCanvas: React.FC<DropdownPropertiesProps> = ({ selectedItem, itemProperties, handleChange }) => {
  return (
    <div>
      {selectedItem && selectedItem.name === "Dropdown" && (
        <div className="dropdown">
          <div className="input-group">
            <label>
              Option Items (comma-separated):
              <textarea
                value={itemProperties.drop_options || ""}
                onChange={(e) => handleChange("drop_options", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
          <label>
          DropDown Color:
            <input
              type="color"
              value={itemProperties.backgroundColor || "#000000"}
              onChange={(e) => handleChange("backgroundColor", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            DropDown Size:
            <input
              type="number"
              value={itemProperties.fontSize || 16}
              onChange={(e) => handleChange("fontSize", e.target.value)}
            />
          </label>
        </div>
        </div>
      )}
    </div>
  );
};

export default DropdownCanvas;
