import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";
import Nirjal from "../icons8-instagram.svg"
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  Person as UserIcon,
  Add as AddIcon,
  Alarm as AlarmIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Search as SearchIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Help as HelpIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Cloud as CloudIcon,
  CloudDownload as CloudDownloadIcon,
  CloudUpload as CloudUploadIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  ShoppingCart as ShoppingCartIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  AttachFile as AttachFileIcon,
  Attachment as AttachmentIcon,
  CameraAlt as CameraAltIcon,
  FileDownload as FileDownloadIcon,
  FileUpload as FileUploadIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  Print as PrintIcon,
  Save as SaveIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  MoreVert as MoreVertIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

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
interface TableComponentProps {
  item: DroppedItem;
}
interface ListComponentProps {
  item: DroppedItem;
}
interface CanvasProps {
  canvasWidth: number;
  canvasHeight: number;
  showGrid: boolean;
  droppedItems: DroppedItem[];
  setDroppedItems: React.Dispatch<React.SetStateAction<DroppedItem[]>>;
  setSelectedItem: (item: DroppedItem | null) => void;
}
const Canvas: React.FC<CanvasProps> = ({
  canvasWidth,
  canvasHeight,
  showGrid,
  droppedItems,
  setDroppedItems,
  setSelectedItem,
  
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [hasNavbar, sethasNavbar] = useState(false);
  const [hasFooter, setHasFooter] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);


  const getNavbarItem = () => {
    return droppedItems.find((item) => item.name === "Navbar");
  };
  const getFooterItem = () => {
    return droppedItems.find((item) => item.name === "Footer");
  };
  useEffect(() => {
    const navbar = getNavbarItem();
    const footer = getFooterItem();
    setNavbarHeight(navbar ? 65 : 0); 
    setFooterHeight(footer ? 95 : 0); 
  }, [droppedItems]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    
    const drawLines = (x: number, y: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (isHovered && showGrid) {
        context.strokeStyle = "red";
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = Math.round(event.clientX - rect.left);
      const y = Math.round(event.clientY - rect.top);

      const boundedX = Math.max(0, Math.min(x, canvasWidth));
      const boundedY = Math.max(0, Math.min(y, canvasHeight));

      setCoords({ x: boundedX, y: boundedY });
      drawLines(boundedX, boundedY);

      if (draggedItemIndex !== null) {
        const newItems = [...droppedItems];
        const draggedItem = newItems[draggedItemIndex];
        
        if (draggedItem.name !== "Navbar" && draggedItem.name !== "Footer") {
          draggedItem.y = Math.max(navbarHeight, Math.min(boundedY, canvasHeight - footerHeight - 100)); 
        }
        
        newItems[draggedItemIndex] = {
          ...draggedItem,
          x: boundedX,
          y: draggedItem.y,
        };
        setDroppedItems(newItems);
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleClick = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const canvasX = event.clientX - rect.left;
      const canvasY = event.clientY - rect.top;

      // Check if the click was on any dropped item
      let clickedOnItem = false;

      // Check navbar separately
      const navbarItem = getNavbarItem();
      if (navbarItem) {
        const navbarRight = navbarItem.x + canvasWidth; // Adjust width based on navbar size
        const navbarBottom = navbarItem.y + 40; // Adjust height based on navbar size
        if (
          canvasX >= navbarItem.x &&
          canvasX <= navbarRight &&
          canvasY >= navbarItem.y &&
          canvasY <= navbarBottom
        ) {
          setSelectedItem(navbarItem);
          setSelectedItemIndex(droppedItems.indexOf(navbarItem));
          clickedOnItem = true;
        }
      }

      // Check other dropped items
      if (!clickedOnItem) {
        const clickedItem = droppedItems.find((item) => {
          const itemRight = item.x + 200; // Adjust width based on item size
          const itemBottom = item.y + 100; // Adjust height based on item size
          return (
            canvasX >= item.x &&
            canvasX <= itemRight &&
            canvasY >= item.y &&
            canvasY <= itemBottom
          );
        });

        if (clickedItem) {
          setSelectedItem(clickedItem);
          setSelectedItemIndex(droppedItems.indexOf(clickedItem));
        } else {
          setSelectedItem(null);
          setSelectedItemIndex(null);
        }
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [
    isHovered,
    draggedItemIndex,
    droppedItems,
    canvasWidth,
    canvasHeight,
    showGrid,
    setSelectedItem,
    setSelectedItemIndex,
  ]);
  
 

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    try {
      const data = event.dataTransfer.getData("tool");
      if (!data) {
        console.error("No data found in dataTransfer");
        return;
      }

      let tool;
      try {
        tool = JSON.parse(data) as Omit<
          DroppedItem,
          | "id"
        >;
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        return;
      }
      if (
        (tool.name === "Navbar" && hasNavbar) ||
        (tool.name === "Footer" && hasFooter)
      ) {
        return; 
      }
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newItem: DroppedItem = {
        ...tool,
        id: `${droppedItems.length + 1}`,
        x,
        y,
      };

      if (newItem.name === "Navbar") {
        newItem.x = 0;
        newItem.y = 0;
        sethasNavbar(true);
      }
      if (newItem.name === "Footer") {
        newItem.x = 0;
        newItem.y = canvasHeight-95  ;
        setHasFooter(true);
      }else {
        newItem.y = Math.max(navbarHeight, Math.min(newItem.y, canvasHeight - footerHeight )); 
      }
      setDroppedItems([...droppedItems, newItem]);
      setSelectedItem(newItem);
      setSelectedItemIndex(droppedItems.length);
    } catch (error) {
      console.error("Error in handleDrop:", error);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleMouseDown = (item: DroppedItem, index: number) => {
    setDraggedItemIndex(index);
    setSelectedItem(item);
    setSelectedItemIndex(index);
  };

  const handleMouseUp = () => {
    setDraggedItemIndex(null);
  };

  const renderDroppedItem = (item: DroppedItem, _isSelected: boolean) => {
    const textStyle = {
      fontFamily: item.fontFamily,
      fontSize: `${item.fontSize}px`,
      fontWeight: item.fontWeight,
      textDecoration: item.underline ? "underline" : "none",
      fontStyle: item.italic ? "italic" : "normal",
      color: item.fontColor,
      backgroundColor: item.backgroundColor,
      backgroundImage: `url(${item.backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: item.border_pixel
        ? `${item.border_pixel}px ${item.border_style} ${item.border_color}`
        : "none",
      borderRadius: `${item.border_radius}px`,
    };

    const imgStyle = {
      width: item.img_width ? `${item.img_width}px` : "auto",
      height: item.img_height ? `${item.img_height}px` : "auto",
      border: item.border_pixel
        ? `${item.border_pixel}px ${item.border_style} ${item.border_color}`
        : "none",
      filter: item.img_blur ? `blur(${item.img_blur}px)` : "none",
      borderRadius: `${item.border_radius}px`,
    };

    const linkStyle = {
      border: item.border_pixel
        ? `${item.border_pixel}px ${item.border_style} ${item.border_color}`
        : "none",
      color: item.link_fontColor,
      textDecoration: item.link_decoration,
      fontSize: `${item.fontSize}px`,
      borderRadius: `${item.border_radius}px`,
    };

    const buttonStyle = {
      border: item.border_pixel
        ? `${item.border_pixel}px ${item.border_style} ${item.border_color}`
        : "none",
      borderRadius: `${item.border_radius}px`,
      backgroundColor: item.backgroundColor,
      fontSize: `${item.fontSize}px`,
      color: item.fontColor,
    };
    const iconStyle = {
      fontSize: `${item.fontSize}px`,
      color: item.icon_color,
    };
    const navbarStyle = {
      width: `${canvasWidth}px`,
      border: item.border_pixel
        ? `${item.border_pixel}px ${item.border_style} ${item.border_color}`
        : "none",
      borderRadius: `${item.border_radius}px`,
      backgroundColor: item.backgroundColor,
    };
    const checkboxStyle = {
      backgroundColor: item.backgroundColor,
      fontSize: `${item.fontSize}px`,
    };
    const radioStyle = {
      backgroundColor: item.backgroundColor,
      fontSize: `${item.fontSize}px`,
    };
    const dropdownStyle = {
      backgroundColor: item.backgroundColor,
      fontSize: `${item.fontSize}px`,
    };
    const footerStyle: React.CSSProperties = {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: `${canvasWidth}px`,
      backgroundColor: item.backgroundColor || "#f0f0f0",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "fit-content",
      color:item.fontColor|| "#000000"
    };
    const iconStyle_footer: React.CSSProperties = {
      fontSize: "24px",
      marginRight: "15px",
      color: item.iconColor || "#000000",
    };

    const getIconComponent = (type: string) => {
      switch (type) {
        case "home":
          return <HomeIcon style={iconStyle} />;
        case "settings":
          return <SettingsIcon style={iconStyle} />;
        case "star":
          return <StarIcon style={iconStyle} />;
        case "user":
          return <UserIcon style={iconStyle} />;
        case "add":
          return <AddIcon style={iconStyle} />;
        case "alarm":
          return <AlarmIcon style={iconStyle} />;
        case "delete":
          return <DeleteIcon style={iconStyle} />;
        case "edit":
          return <EditIcon style={iconStyle} />;
        case "favorite":
          return <FavoriteIcon style={iconStyle} />;
        case "search":
          return <SearchIcon style={iconStyle} />;
        case "info":
          return <InfoIcon style={iconStyle} />;
        case "warning":
          return <WarningIcon style={iconStyle} />;
        case "error":
          return <ErrorIcon style={iconStyle} />;
        case "check_circle":
          return <CheckCircleIcon style={iconStyle} />;
        case "help":
          return <HelpIcon style={iconStyle} />;
        case "visibility":
          return <VisibilityIcon style={iconStyle} />;
        case "visibility_off":
          return <VisibilityOffIcon style={iconStyle} />;
        case "cloud":
          return <CloudIcon style={iconStyle} />;
        case "cloud_download":
          return <CloudDownloadIcon style={iconStyle} />;
        case "cloud_upload":
          return <CloudUploadIcon style={iconStyle} />;
        case "lock":
          return <LockIcon style={iconStyle} />;
        case "lock_open":
          return <LockOpenIcon style={iconStyle} />;
        case "shopping_cart":
          return <ShoppingCartIcon style={iconStyle} />;
        case "thumb_up":
          return <ThumbUpIcon style={iconStyle} />;
        case "thumb_down":
          return <ThumbDownIcon style={iconStyle} />;
        case "attach_file":
          return <AttachFileIcon style={iconStyle} />;
        case "attachment":
          return <AttachmentIcon style={iconStyle} />;
        case "camera_alt":
          return <CameraAltIcon style={iconStyle} />;
        case "file_download":
          return <FileDownloadIcon style={iconStyle} />;
        case "file_upload":
          return <FileUploadIcon style={iconStyle} />;
        case "folder":
          return <FolderIcon style={iconStyle} />;
        case "folder_open":
          return <FolderOpenIcon style={iconStyle} />;
        case "print":
          return <PrintIcon style={iconStyle} />;
        case "save":
          return <SaveIcon style={iconStyle} />;
        case "check":
          return <CheckIcon style={iconStyle} />;
        case "close":
          return <CloseIcon style={iconStyle} />;
        case "menu":
          return <MenuIcon style={iconStyle} />;
        case "arrow_back":
          return <ArrowBackIcon style={iconStyle} />;
        case "arrow_forward":
          return <ArrowForwardIcon style={iconStyle} />;
        case "arrow_upward":
          return <ArrowUpwardIcon style={iconStyle} />;
        case "arrow_downward":
          return <ArrowDownwardIcon style={iconStyle} />;
        case "expand_more":
          return <ExpandMoreIcon style={iconStyle} />;
        case "expand_less":
          return <ExpandLessIcon style={iconStyle} />;
        case "chevron_left":
          return <ChevronLeftIcon style={iconStyle} />;
        case "chevron_right":
          return <ChevronRightIcon style={iconStyle} />;
        case "keyboard_arrow_left":
          return <KeyboardArrowLeftIcon style={iconStyle} />;
        case "keyboard_arrow_right":
          return <KeyboardArrowRightIcon style={iconStyle} />;
        case "keyboard_arrow_up":
          return <KeyboardArrowUpIcon style={iconStyle} />;
        case "keyboard_arrow_down":
          return <KeyboardArrowDownIcon style={iconStyle} />;
        case "more_vert":
          return <MoreVertIcon style={iconStyle} />;
        case "more_horiz":
          return <MoreHorizIcon style={iconStyle} />;
        default:
          return <HomeIcon style={iconStyle} />;
      }
    };

    const TableComponent: React.FC<TableComponentProps> = ({ item }) => {
      const tableStyle: React.CSSProperties = {
        borderCollapse: "collapse",
        border: item.borderStyle
          ? `1px ${item.borderStyle} ${item.borderColor || "#000"}`
          : "none",
        textAlign: item.textAlign || "left",
      };

      const headerStyle: React.CSSProperties = {
        backgroundColor: item.headerBgColor || "#f1f1f1",
        color: item.headerTextColor || "#000",
        padding: `${item.cellPadding || 8}px`,
        border: item.borderStyle
          ? `1px ${item.borderStyle} ${item.borderColor || "#000"}`
          : "none",
      };

      const cellStyle: React.CSSProperties = {
        backgroundColor: item.backgroundColor || "#fff",
        color: item.fontColor || "#000",
        padding: `${item.cellPadding || 8}px`,
        margin: `${item.cellMargin || 0}px`,
        border: item.borderStyle
          ? `1px ${item.borderStyle} ${item.borderColor || "#000"}`
          : "none",
      };

      const headers_row: string[] = item.headers_row
        ? item.headers_row.split(",")
        : [];
      const headersColumn: string[] = item.headers_column
        ? item.headers_column.split(",")
        : [];
      const data: string[][] = item.data
        ? item.data.split(";").map((row) => row.split(","))
        : [];

      return (
        <table style={tableStyle}>
          <thead>
            <tr>
              {headersColumn.length > 0 && <th style={headerStyle}></th>}
              {headers_row.map((header, index) => (
                <th key={index} style={headerStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headersColumn.length > 0 && (
                  <th style={headerStyle}>{headersColumn[rowIndex]}</th>
                )}
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={cellStyle}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
    const ListComponent: React.FC<ListComponentProps> = ({ item }) => {
      const listItems = item.items ? item.items.split(",") : [];
      const ListTag = item.listType === "ordered" ? "ol" : "ul";
      const listStyle = {
        textAlign: item.textAlign,
      };
      const itemStyle = {
        color: item.fontColor,
        backgroundColor: item.backgroundColor,
        fontSize: item.fontSize ? `${item.fontSize}px` : "16px",
        fontWeight: item.fontWeight,
      };

      return (
        <ListTag style={listStyle}>
          {listItems.map((listItem: string, index: number) => (
            <li key={index} style={itemStyle}>
              {listItem.trim()}
            </li>
          ))}
        </ListTag>
      );
    };
    const dropdownItems = item.drop_options ? item.drop_options.split(",") : [];

    switch (item.name) {
      case "Text":
        return <textarea style={textStyle} placeholder="Text Box" />;
      case "Image":
        return (
          <img
            src={item.img_src || item.imageUrl}
            style={imgStyle}
            className="dropped_box"
            alt="Image Box"
          />
        );
      case "Link":
        return (
          <a href={item.link_destination} style={linkStyle}>
            {item.link_name || "link"}
          </a>
        );
      case "Button":
        return (
          <button type={item.button_onClick} style={buttonStyle}>
            {item.button_text || "button"}
          </button>
        );
      case "Navbar":
        return (
          <div style={navbarStyle} className="navbar">
            <div className="navbar-left">
              <a href={item.logo_destination || "#"} className="navbar-link">
                  <img
                    width="40px"
                    height="40px"
                    src={item.logoImageSrc|| Nirjal}
                    alt="..."
                  />
              </a>
              <a href="#" className="navbar-link">
                {item.home_label || "Home"}
              </a>
            </div>
            <div className="navbar-right">
              <button className="navbar-button">
                {item.Search_label || "Search"}
              </button>
              <button className="navbar-button">
                {item.Login_label || "LogIn"}
              </button>
              <button className="navbar-button">
                {item.Signup_label || "SignUp"}
              </button>
            </div>
          </div>
        );
      case "Icon":
        return <div>{getIconComponent(item.icon_type)}</div>;
      case "Table":
        return <TableComponent item={item} />;
      case "List":
        return <ListComponent item={item} />;
      case "Dropdown":
        return (
          <select style={dropdownStyle}>
            {dropdownItems.map((option, index) => (
              <option key={index} value={option.trim()}>
                {option.trim()}
              </option>
            ))}
          </select>
        );
      case "Checkbox":
        return (
          <div>
            <label htmlFor="checkbox" style={checkboxStyle}>
              <input
                type="checkbox"
                disabled={item.checkbox_disabled}
                style={{ marginRight: "10px" }}
              />
              {item.checkbox_label}
            </label>
          </div>
        );
      case "Radio":
        return (
          <div>
            <label style={radioStyle}>
              <input
                type="radio"
                name={item.radio_group}
                value={item.radio_value}
                disabled={item.radio_disabled}
              />{" "}
              {item.radio_label}
            </label>
          </div>
        );
      case "Footer":
        return (
          <div style={footerStyle}>
            <footer>
              <div>
                <a href={item.logo_destination || "#"} className="navbar-link">
                  {item.logoImageSrc ? (
                    <img
                      width="40px"
                      height="40px"
                      src={item.logoImageSrc}
                      alt="Logo"
                    />
                  ) : (
                    "Logo"
                  )}
                </a>
              </div>
              <div>
                <a href={item.companyText_url}>{item.companyText}</a>
              </div>
              <div>
                <a
                  href={item.instagramUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} style={iconStyle_footer} />
                </a>
                <a
                  href={item.linkedinUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} style={iconStyle_footer} />
                </a>
                <a
                  href={item.twitterUrl || " #"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} style={iconStyle_footer} />
                </a>
                <a
                  href={item.pinterestUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faPinterest} style={iconStyle_footer} />
                </a>
                <a
                  href={item.whatsappUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={iconStyle_footer} />
                </a>
              </div>
            </footer>
          </div>
        );
      default:
        return null;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedItemIndex === null || selectedItemIndex === undefined) {
      return;
    }
    const newItems = [...droppedItems];
    const item = newItems[selectedItemIndex];
  
    switch (event.key) {
      case "ArrowUp":
        if (item.name !== "Navbar" && item.name !== "Footer") {
          item.y = Math.max(navbarHeight, item.y - 5);
        }
        break;
      case "ArrowDown":
        if (item.name !== "Navbar" && item.name !== "Footer") {
          item.y = Math.min(canvasHeight - footerHeight, item.y + 5);
        }
        break;
      case "ArrowLeft":
        if (item.name !== "Navbar" && item.name !== "Footer") {
          item.x = Math.max(0, item.x - 5);
        }
        break;
      case "ArrowRight":
        if (item.name !== "Navbar" && item.name !== "Footer") {
          item.x = Math.min(canvasWidth - 20, item.x + 5);
        }
        break;
        case "Delete":
        if (item.name === "Navbar") sethasNavbar(false);
        if (item.name === "Footer") setHasFooter(false);
        newItems.splice(selectedItemIndex, 1);
        setSelectedItem(null);
        setSelectedItemIndex(null);
        break;
      default:
        return;
    }
  
    setDroppedItems(newItems);
  };
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItemIndex, droppedItems]);
  


  return (
    <div
      className="canvas_area"
      ref={containerRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: canvasWidth, height: canvasHeight }}
    >
      <canvas ref={canvasRef}/>
      {/* {isHovered && (
        <div className="coordinates">
          x: {coords.x}px, y: {coords.y}px
        </div>
      )} */}

      {droppedItems.map((item, index) => {
        const itemstyle: React.CSSProperties = {
          position: "absolute",
          top: item.y ,
          left: item.x,
          zIndex: item.name === "Navbar" ? 1000 :(item.name==="Footer"?999:1),
          border: selectedItemIndex === index ? "2px solid black" : "none",
        };
        if (item.name === "Navbar") {
          itemstyle.top = 0;
          itemstyle.left = 0;
        }else if (item.name === "Footer") {
          itemstyle.bottom = 0;
          itemstyle.left = 0;
          itemstyle.width = "100%";
          itemstyle.position = "absolute";
        }
        return (
          <div
            key={item.id}
            className="dropped_item"
            style={itemstyle}
            onMouseDown={() => handleMouseDown(item, index)}
            onMouseUp={handleMouseUp}
          >
            {renderDroppedItem(item, selectedItemIndex === index)}
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;
