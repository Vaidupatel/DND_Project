import React from "react";

interface ItemProperties {
  icon_type: string;
  fontSize: number;
  icon_color: string;
}

interface IconPropertiesProps {
  selectedItem: { name: string } | null;
  itemProperties: ItemProperties;
  handleChange: (property: string, value: string | number) => void;
}

const IconCanvas: React.FC<IconPropertiesProps> = ({
  itemProperties,
  handleChange,
}) => {
  return (
    <div className="icon">
      <div className="input-group">
        <label>
          Icon Type:
          <select
            value={itemProperties.icon_type || "home"}
            onChange={(e) => handleChange("icon_type", e.target.value)}
          >
            <option value="home">Home</option>
            <option value="settings">Settings</option>
            <option value="star">Star</option>
            <option value="user">User</option>
            <option value="add">Add</option>
            <option value="alarm">Alarm</option>
            <option value="delete">Delete</option>
            <option value="edit">Edit</option>
            <option value="favorite">Favorite</option>
            <option value="search">Search</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="check_circle">Check Circle</option>
            <option value="help">Help</option>
            <option value="visibility">Visibility</option>
            <option value="visibility_off">Visibility Off</option>
            <option value="cloud">Cloud</option>
            <option value="cloud_download">Cloud Download</option>
            <option value="cloud_upload">Cloud Upload</option>
            <option value="lock">Lock</option>
            <option value="lock_open">Lock Open</option>
            <option value="shopping_cart">Shopping Cart</option>
            <option value="thumb_up">Thumb Up</option>
            <option value="thumb_down">Thumb Down</option>
            <option value="attach_file">Attach File</option>
            <option value="attachment">Attachment</option>
            <option value="camera_alt">Camera Alt</option>
            <option value="file_download">File Download</option>
            <option value="file_upload">File Upload</option>
            <option value="folder">Folder</option>
            <option value="folder_open">Folder Open</option>
            <option value="print">Print</option>
            <option value="save">Save</option>
            <option value="check">Check</option>
            <option value="close">Close</option>
            <option value="menu">Menu</option>
            <option value="arrow_back">Arrow Back</option>
            <option value="arrow_forward">Arrow Forward</option>
            <option value="arrow_upward">Arrow Upward</option>
            <option value="arrow_downward">Arrow Downward</option>
            <option value="expand_more">Expand More</option>
            <option value="expand_less">Expand Less</option>
            <option value="chevron_left">Chevron Left</option>
            <option value="chevron_right">Chevron Right</option>
            <option value="chevron_up">Chevron Up</option>
            <option value="chevron_down">Chevron Down</option>
            <option value="keyboard_arrow_left">Keyboard Arrow Left</option>
            <option value="keyboard_arrow_right">Keyboard Arrow Right</option>
            <option value="keyboard_arrow_up">Keyboard Arrow Up</option>
            <option value="keyboard_arrow_down">Keyboard Arrow Down</option>
            <option value="more_vert">More Vert</option>
            <option value="more_horiz">More Horiz</option>
          </select>
        </label>
      </div>

      <div className="input-group">
        <label>
          Icon Size:
          <input
            type="number"
            value={itemProperties.fontSize || 24}
            onChange={(e) =>
              handleChange("fontSize", parseInt(e.target.value))
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Icon Color:
          <input
            type="color"
            value={itemProperties.icon_color || "#000000"}
            onChange={(e) => handleChange("icon_color", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default IconCanvas;
