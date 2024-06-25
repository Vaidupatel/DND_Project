import React from "react";

interface FooterCanvasProps {
  selectedItem: { name: string } | null;
  itemProperties: any;
  handleChange: (key: string, value: any) => void;
}



const FooterCanvas: React.FC<FooterCanvasProps> = ({
  selectedItem,
  itemProperties,
  handleChange,
}) => {


  return (
    selectedItem &&
    selectedItem.name === "Footer" && (
      <div className="footer-canvas">
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
            Company Text:
            <input
              type="text"
              value={itemProperties.companyText || ""}
              onChange={(e) => handleChange("companyText", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Company destination:
            <input
              type="text"
              value={itemProperties.companyText_url || ""}
              onChange={(e) =>
                handleChange("companyText_url", e.target.value)
              }
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Footer Background Color:
            <input
              type="color"
              value={itemProperties.footerBgColor || "#ffffff"}
              onChange={(e) => handleChange("footerBgColor", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Footer Text Color:
            <input
              type="color"
              value={itemProperties.footerTextColor || "#000000"}
              onChange={(e) => handleChange("footerTextColor", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Instagram url:
            <input
              type="text"
              value={itemProperties.instagramUrl || ""}
              onChange={(e) => handleChange("instagramUrl", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            LinkedIn url:
            <input
              type="text"
              value={itemProperties.linkedinUrl || ""}
              onChange={(e) => handleChange("linkedinUrl", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Twitter url:
            <input
              type="text"
              value={itemProperties.twitterUrl || ""}
              onChange={(e) => handleChange("twitterUrl", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Pinterest url:
            <input
              type="text"
              value={itemProperties.pinterestUrl || ""}
              onChange={(e) => handleChange("pinterestUrl", e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Whatsapp url:
            <input
              type="text"
              value={itemProperties.whatsappUrl || ""}
              onChange={(e) => handleChange("whatsappUrl", e.target.value)}
            />
          </label>
        </div>
      
      </div>
    )
  );
};

export default FooterCanvas;
