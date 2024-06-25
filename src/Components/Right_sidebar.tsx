import React, { useEffect, useState } from "react";
import "./Right_sidebar.css";
import Navbar_Canvas from "./Canvas Components/Navabar_Canvas";
import TextCanvas from "./Canvas Components/TextCanvas";
import ImageCanvas from "./Canvas Components/ImageCanvas";
import LinkCanvas from "./Canvas Components/LinkCanvas";
import ButtonCanvas from "./Canvas Components/ButtonCanvas";
import IconCanvas from "./Canvas Components/IconCanvas";
import TableCanvas from "./Canvas Components/TableCanvas";
import ListCanvas from "./Canvas Components/ListCanvas";
import DropdownCanvas from "./Canvas Components/DropdownCanvas";
import CheckboxCanvas from "./Canvas Components/CheckboxCanvas";
import RadioCanvas from "./Canvas Components/RadioCanvas";
import CustomCanvas from "./Canvas Components/CustomCanvas";
import FooterCanvas from "./Canvas Components/FooterCanvas";

interface RightSidebarProps {
  selectedItem: any;
  updateItem: (updatedItem: any) => void;
  canvasWidth: number;
  setCanvasWidth: (width: number) => void;
  canvasHeight: number;
  setCanvasHeight: (height: number) => void;
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
}

const Right_sidebar: React.FC<RightSidebarProps> = ({
  selectedItem,
  updateItem,
  canvasWidth,
  setCanvasWidth,
  canvasHeight,
  setCanvasHeight,
  showGrid,
  setShowGrid,
}) => {
  const [itemProperties, setItemProperties] = useState(
    selectedItem || {
      fontFamily: "",
      fontSize: 0,
      fontWeight: "",
      underline: false,
      italic: false,
      fontColor: "",
      backgroundColor: "",
      backgroundImage: "",
    }
  );
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setItemProperties(selectedItem);
    setImageUrl("");
  }, [selectedItem]);
  useEffect(() => {
    setItemProperties(
      selectedItem || {
        fontFamily: "",
        fontSize: 0,
        fontWeight: "",
        underline: false,
        italic: false,
        fontColor: "",
        backgroundColor: "",
        backgroundImage: "",
      }
    );
  }, [selectedItem]);

  const handleChange = (property: string, value: any) => {
    const updatedItem = { ...itemProperties, [property]: value };
    setItemProperties(updatedItem);
    updateItem(updatedItem);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleChange("img_src", e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = () => {
    handleChange("img_src", imageUrl);
    setImageUrl("");
  };

  return (
    <div className="right_sidebar">
      <h1>Settings</h1>
      <div className="control-panel">
        <CustomCanvas
          canvasWidth={canvasWidth}
          setCanvasWidth={setCanvasWidth}
          canvasHeight={canvasHeight}
          setCanvasHeight={setCanvasHeight}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
        />
      </div>
      <h2>Selected Item Settings</h2>
      <br />

      {selectedItem !== null && selectedItem.name === "Text" && (
        <TextCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Image" && (
        <ImageCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleUrlChange={handleUrlChange}
        />
      )}

      {selectedItem && selectedItem.name === "Link" && (
        <LinkCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Button" && (
        <ButtonCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Navbar" && (
        <Navbar_Canvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Icon" && (
        <IconCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Table" && (
        <TableCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "List" && (
        <ListCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Dropdown" && (
        <DropdownCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}
      {selectedItem && selectedItem.name === "Checkbox" && (
        <CheckboxCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}
      {selectedItem && selectedItem.name === "Radio" && (
        <RadioCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}

      {selectedItem && selectedItem.name === "Footer" && (
        <FooterCanvas
          selectedItem={selectedItem}
          itemProperties={itemProperties}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Right_sidebar;
