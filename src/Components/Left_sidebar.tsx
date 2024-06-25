import React from 'react';
import './Left_sidebar.css';

const tools = [
  { name: 'Text', type: 'textarea', id: '1' },
  { name: 'Image', type: 'div', id: '2' },
  { name: 'Link', type: 'div', id: '3' },
  { name: 'Button', type: 'button', id: '4' },
  { name: 'Navbar', type: 'Navbar', id: '5' },
  { name: 'Icon', type: 'Icon', id: '6' },
  { name: 'Table', type: 'Table', id: '7' },
  { name: 'List', type: 'List', id: '8' },
  { name: 'Dropdown', type: 'Dropdown', id: '9' },
  { name: 'Checkbox', type: 'Checkbox', id: '10' },
  { name: 'Radio', type: 'Radio', id: '11' },
  { name: 'Footer', type: 'Footer', id: '12' },
];

const Left_sidebar: React.FC = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, tool: any) => {
    event.dataTransfer.setData('tool', JSON.stringify(tool));
  };

  return (
    <div className="left_sidebar">
      <h2>Tools</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <div
              className="draggable_item"
              draggable
              onDragStart={(event) => handleDragStart(event, tool)}
            >
              {tool.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Left_sidebar;
