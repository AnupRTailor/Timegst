// TabNavItem.js
import React from 'react';

const TabNavItem = ({ title, id, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li className={activeTab === id ? 'active' : ''} onClick={handleClick}>
      {title}
    </li>
  );
};

export default TabNavItem;
