import React from 'react';

interface DroppedItem {
    id: string;
    name: string;
    type: string;
    x: number;
    y: number;
    // commun.......
    border_pixel: number;
    border_style: string;
    border_color: string;
    border_radius: number;
    fontColor: string;
    fontSize: number;
    backgroundColor: string;
    backgroundImage: string;
    textAlign?: "left" | "center" | "right";
    fontWeight: "normal" | "bold";
    // .......................
  
    fontFamily: string;
    underline: boolean;
    italic: boolean;
    
    imageUrl:string;
    img_src: string;
    img_width: number;
    img_height: number;
    img_blur: number;
  
    link_name?: string;
    link_destination?: string;
    link_decoration: string;
    link_fontColor:string;
  
    button_text: string;
    button_onClick: any;
  
    icon_type: string;
    icon_color: string;
  
    headers_row?: string;
    headers_column?: string;
    data?: string;
    cellPadding?: number;
    cellMargin?: number;
    borderStyle?: "solid" | "dashed" | "dotted";
    borderColor?: string;
    headerBgColor?: string;
    headerTextColor?: string;
  
    listType?: "unordered" | "ordered";
    items?: string;
  
    logoImageFile: string;
    logoImageSrc: string;
    logo_destination: string;
    home_label: string;
    homeLink_destination: string;
    Search_label: string;
    Login_label: string;
    Signup_label: string;
  
    drop_options: string;
  
    checkbox_label: string;
    checkbox_disabled: boolean;
  
    radio_group: string;
    radio_value: string;
    radio_label: string;
    radio_disabled: boolean;
  
    companyText: string;
    companyText_url: string;
    iconColor: string;
    logoUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
    pinterestUrl: string;
    whatsappUrl: string;
  }
interface HtmlCodeGeneratorProps {
  droppedItems: DroppedItem[];
}

const HtmlCodeGenerator: React.FC<HtmlCodeGeneratorProps> = ({ droppedItems }) => {
  const generateHtmlCode = (item: DroppedItem): string => {
    switch (item.name) {
      case 'Text':
        return `<textarea style="position:absolute;left:${item.x}px;top:${item.y}px;" placeholder="text Here!">}</textarea>`;
      case 'Image':
        return `<img src="${item.img_src}" style="position:absolute;left:${item.x}px;top:${item.y}px;width:${item.img_width}px;height:${item.img_height}px;" alt="Image" />`;
      case 'Link':
        return `<a href="${item.link_destination}" style="position:absolute;left:${item.x}px;top:${item.y}px;">${item.link_name || 'Link'}</a>`;
      case 'Button':
        return `<button style="position:absolute;left:${item.x}px;top:${item.y}px;">${item.button_text || 'Button'}</button>`;
      case 'Navbar':
        return `<nav style="position:absolute;left:${item.x}px;top:${item.y}px;width:100%;">
          <a href="${item.logo_destination}"><img src="${item.logoImageSrc}" alt="Logo" /></a>
          <a href="#">${item.home_label || 'Home'}</a>
          <button>${item.Search_label || 'Search'}</button>
          <button>${item.Login_label || 'Login'}</button>
          <button>${item.Signup_label || 'Signup'}</button>
        </nav>`;
      case 'Icon':
        return `<i class="material-icons" style="position:absolute;left:${item.x}px;top:${item.y}px;">${item.icon_type}</i>`;
      case 'Table':
        return `<table style="position:absolute;left:${item.x}px;top:${item.y}px;">
          ${generateTableContent(item)}
        </table>`;
      case 'List':
        return `<${item.listType === 'ordered' ? 'ol' : 'ul'} style="position:absolute;left:${item.x}px;top:${item.y}px;">
          ${(item.items || '').split(',').map(listItem => `<li>${listItem.trim()}</li>`).join('')}
        </${item.listType === 'ordered' ? 'ol' : 'ul'}>`;
      case 'Dropdown':
        return `<select style="position:absolute;left:${item.x}px;top:${item.y}px;">
          ${(item.drop_options || '').split(',').map(option => `<option>${option.trim()}</option>`).join('')}
        </select>`;
      case 'Checkbox':
        return `<label style="position:absolute;left:${item.x}px;top:${item.y}px;">
          <input type="checkbox" ${item.checkbox_disabled ? 'disabled' : ''} />
          ${item.checkbox_label}
        </label>`;
      case 'Radio':
        return `<label style="position:absolute;left:${item.x}px;top:${item.y}px;">
          <input type="radio" name="${item.radio_group}" value="${item.radio_value}" ${item.radio_disabled ? 'disabled' : ''} />
          ${item.radio_label}
        </label>`;
      case 'Footer':
        return `<footer style="position:absolute;left:${item.x}px;bottom:0;width:100%;">
          <a href="${item.logo_destination}"><img src="${item.logoImageSrc}" style="width="10vw"" alt="Logo" /></a>
          <a href="${item.companyText_url}">${item.companyText}</a>
          <div>
            <a href="${item.instagramUrl}"><i class="fab fa-instagram"></i></a>
            <a href="${item.linkedinUrl}"><i class="fab fa-linkedin"></i></a>
            <a href="${item.twitterUrl}"><i class="fab fa-twitter"></i></a>
            <a href="${item.pinterestUrl}"><i class="fab fa-pinterest"></i></a>
            <a href="${item.whatsappUrl}"><i class="fab fa-whatsapp"></i></a>
          </div>
        </footer>`;
      default:
        return '';
    }
  };

  const generateTableContent = (item: DroppedItem): string => {
    const headers_row = item.headers_row ? item.headers_row.split(',') : [];
    const headers_column = item.headers_column ? item.headers_column.split(',') : [];
    const data = item.data ? item.data.split(';').map(row => row.split(',')) : [];

    let tableContent = '';
    if (headers_row.length > 0) {
      tableContent += '<thead><tr>';
      if (headers_column.length > 0) tableContent += '<th></th>';
      headers_row.forEach(header => {
        tableContent += `<th>${header}</th>`;
      });
      tableContent += '</tr></thead>';
    }

    tableContent += '<tbody>';
    data.forEach((row, rowIndex) => {
      tableContent += '<tr>';
      if (headers_column.length > 0) {
        tableContent += `<th>${headers_column[rowIndex]}</th>`;
      }
      row.forEach(cell => {
        tableContent += `<td>${cell}</td>`;
      });
      tableContent += '</tr>';
    });
    tableContent += '</tbody>';

    return tableContent;
  };

  const fullHtmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Component</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
      body { position: relative; width: 100%; margin: 0; padding: 0; }
    </style>
</head>
<body>
    ${droppedItems.map(item => generateHtmlCode(item)).join('\n')}
</body>
</html>
  `;

  return (
    <div>
      <h2>Generated HTML Code</h2>
      <pre>
        <code>{fullHtmlCode}</code>
      </pre>
    </div>
  );
};

export default HtmlCodeGenerator;