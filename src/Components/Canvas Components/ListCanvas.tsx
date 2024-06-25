
import React from 'react';

interface ListProperties {
  listType: string;
  items: string;
  fontColor: string;
  backgroundColor: string;
  fontSize: number;
  fontWeight: string;
  textAlign: string;
}

interface ListPropertiesProps {
  selectedItem: { name: string } | null;
  itemProperties: ListProperties;
  handleChange: (property: string, value: string | number) => void;
}

const ListCanvas: React.FC<ListPropertiesProps> = ({ selectedItem, itemProperties, handleChange }) => {
  return (
    <div>
      {selectedItem && selectedItem.name === "List" && (
        <div className="list">
          <div className="input-group">
            <label>
              List Type:
              <select
                value={itemProperties.listType || "unordered"}
                onChange={(e) => handleChange("listType", e.target.value)}
              >
                <option value="unordered">Unordered</option>
                <option value="ordered">Ordered</option>
              </select>
            </label>
          </div>
          <div className="input-group">
            <label>
              List Items (comma-separated):
              <textarea
                value={itemProperties.items || ""}
                onChange={(e) => handleChange("items", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Item Text Color:
              <input
                type="color"
                value={itemProperties.fontColor || "#000000"}
                onChange={(e) => handleChange("fontColor", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Item Background Color:
              <input
                type="color"
                value={itemProperties.backgroundColor || "#ffffff"}
                onChange={(e) => handleChange("backgroundColor", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Item Font Size:
              <input
                type="number"
                value={itemProperties.fontSize || 16}
                onChange={(e) =>
                  handleChange("fontSize", parseInt(e.target.value))
                }
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Item Font Weight:
              <select
                value={itemProperties.fontWeight || "normal"}
                onChange={(e) => handleChange("fontWeight", e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
              </select>
            </label>
          </div>
          <div className="input-group">
            <label>
              Item Text Alignment:
              <select
                value={itemProperties.textAlign || "left"}
                onChange={(e) => handleChange("textAlign", e.target.value)}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCanvas;
