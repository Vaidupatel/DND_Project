import React from 'react';

interface CheckboxProps {
  itemProperties: {
    checkbox_label: string;
    checkbox_checked: boolean;
    checkbox_disabled: boolean;
    backgroundColor: string;
    fontSize: number;
  };
  handleChange: (key: string, value: any) => void;
  selectedItem: { name: string } | null;
}

const CheckboxCanvas: React.FC<CheckboxProps> = ({ itemProperties, handleChange }) => {
  return (
    <div className="checkbox">
      <div className="input-group">
        <label>
          Checkbox Label:
          <input
            type="text"
            value={itemProperties.checkbox_label || ""}
            onChange={(e) => handleChange("checkbox_label", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Disabled:
          <input
            type="checkbox"
            checked={itemProperties.checkbox_disabled || false}
            onChange={(e) => handleChange("checkbox_disabled", e.target.checked)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Checkbox Color:
          <input
            type="color"
            value={itemProperties.backgroundColor || "#000000"}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Checkbox Size:
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

export default CheckboxCanvas;
