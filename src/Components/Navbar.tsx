import  { useState, useEffect } from 'react';
import "./Navbar.css";

export default function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const hide = document.getElementById('container1');
    if (hide) {
      hide.style.display = isSidebarVisible ? 'block' : 'none';
    }
  }, [isSidebarVisible]);

  return (
    <>
      <div className="nav_back">
        <div className="Left">
          <button onClick={toggleSidebar}>menu</button>
          <a href="#">LOGO</a>
          <a href="#">Home</a>
        </div>
        <div className="Right">
          <button>LogIn</button>
          <button>Signup</button>
        </div>
      </div>
    </>
  );
}
