// TabContent.js
import React from 'react';

const TabContent = ({ id, activeTab, children }) => {
  return (
    <div className={`tab-content ${activeTab === id ? 'active' : 'inactive'}`}>
      {activeTab === id && children}
    </div>
  );
};

export default TabContent;
