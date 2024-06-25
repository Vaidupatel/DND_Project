import React from "react";

interface NavbarProps {
  selectedItem: { name: string } | null;
  itemProperties: {
    logoImageFile: string;
    logoImageSrc: string;
    logo_destination: string;
    home_label: string;
    homeLink_destination: string;
    Search_label: string;
    Login_label: string;
    Signup_label: string;
    backgroundColor: string;
    border_pixel: number;
    border_style: string;
    border_color: string;
    border_radius: number;
  };
  handleChange: (key: string, value: any) => void;
}

const Navbar_Canvas: React.FC<NavbarProps> = ({
  selectedItem,
  itemProperties,
  handleChange,
}) => {
  return (
    selectedItem &&
    selectedItem.name === "Navbar" && (
      <div className="navbar_">
        <div className="input-group">
          <label>
            Upload Logo Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                handleChange("logoImageFile", file || null);
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    handleChange("logoImageSrc", event.target?.result);
                  };
                  reader.readAsDataURL(file);
                } else {
                  handleChange("logoImageSrc", null);
                }
              }}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Logo Destination:
            <input
              type="text"
              value={itemProperties.logo_destination || ""}
              onChange={(e) => handleChange("logo_destination", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Home button text:
            <input
              type="text"
              value={itemProperties.home_label || ""}
              onChange={(e) => handleChange("home_label", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Home destination:
            <input
              type="text"
              value={itemProperties.homeLink_destination || ""}
              onChange={(e) =>
                handleChange("homeLink_destination", e.target.value)
              }
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Search Button Text:
            <input
              type="text"
              value={itemProperties.Search_label || ""}
              onChange={(e) => handleChange("Search_label", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            LogIn button Text:
            <input
              type="text"
              value={itemProperties.Login_label || ""}
              onChange={(e) => handleChange("Login_label", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Signup button Text:
            <input
              type="text"
              value={itemProperties.Signup_label || ""}
              onChange={(e) => handleChange("Signup_label", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Navbar Background Color:
            <input
              type="color"
              value={itemProperties.backgroundColor || "#ffffff"}
              onChange={(e) => handleChange("backgroundColor", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Navbar Border pixel:
            <input
              type="number"
              value={itemProperties.border_pixel || 0}
              onChange={(e) =>
                handleChange("border_pixel", parseInt(e.target.value))
              }
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Navbar border Style:
            <select
              value={itemProperties.border_style || "solid"}
              onChange={(e) =>
                handleChange("border_style", e.target.value)
              }
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
            Navbar Border color:
            <input
              type="color"
              value={itemProperties.border_color || "#000000"}
              onChange={(e) =>
                handleChange("border_color", e.target.value)
              }
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Navbar Border Radius:
            <input
              type="number"
              value={itemProperties.border_radius || 0}
              onChange={(e) =>
                handleChange("border_radius", parseInt(e.target.value))
              }
            />
          </label>
        </div>
      </div>
    )
  );
};

export default Navbar_Canvas;
