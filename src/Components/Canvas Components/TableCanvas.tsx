import React from "react";

interface TableProperties {
  headers_row: string;
  headers_column: string;
  data: string;
  cellPadding: number;
  cellMargin: number;
  textAlign: string;
  borderStyle: string;
  borderColor: string;
  headerBgColor: string;
  headerTextColor: string;
  backgroundColor: string;
  fontColor: string;
}

interface TablePropertiesProps {
  selectedItem: { name: string } | null;
  itemProperties: TableProperties;
  handleChange: (property: string, value: string | number) => void;
}

const TableCanvas: React.FC<TablePropertiesProps> = ({
  selectedItem,
  itemProperties,
  handleChange,
}) => {
  return (
    <div>
      {selectedItem && selectedItem.name === "Table" && (
        <div className="table">
          <div className="input-group">
            <label>
              Table Headers row (comma-separated):
              <input
                type="text"
                value={itemProperties.headers_row || ""}
                onChange={(e) => handleChange("headers_row", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Table Headers column (comma-separated):
              <input
                type="text"
                value={itemProperties.headers_column || ""}
                onChange={(e) => handleChange("headers_column", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Table Data (semicolon-separated rows; comma-separated columns):
              <textarea
                value={itemProperties.data || ""}
                onChange={(e) => handleChange("data", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Cell Padding:
              <input
                type="number"
                value={itemProperties.cellPadding || 8}
                onChange={(e) =>
                  handleChange("cellPadding", parseInt(e.target.value))
                }
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Cell Margin:
              <input
                type="number"
                value={itemProperties.cellMargin || 8}
                onChange={(e) =>
                  handleChange("cellMargin", parseInt(e.target.value))
                }
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Text Alignment:
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
          <div className="input-group">
            <label>
              Border Style:
              <select
                value={itemProperties.borderStyle || "solid"}
                onChange={(e) => handleChange("borderStyle", e.target.value)}
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </label>
          </div>
          <div className="input-group">
            <label>
              Border Color:
              <input
                type="color"
                value={itemProperties.borderColor || "#000000"}
                onChange={(e) => handleChange("borderColor", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Header Background Color:
              <input
                type="color"
                value={itemProperties.headerBgColor || "#ffffff"}
                onChange={(e) => handleChange("headerBgColor", e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Header Text Color:
              <input
                type="color"
                value={itemProperties.headerTextColor || "#000000"}
                onChange={(e) =>
                  handleChange("headerTextColor", e.target.value)
                }
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Cell Background Color:
              <input
                type="color"
                value={itemProperties.backgroundColor || "#ffffff"}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Cell Text Color:
              <input
                type="color"
                value={itemProperties.fontColor || "#000000"}
                onChange={(e) => handleChange("fontColor", e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableCanvas;
