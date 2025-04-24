import React from 'react';
import { FaHome, FaCommentDots, FaEllipsisH } from 'react-icons/fa';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <FaHome className="nav-icon" />
      <FaCommentDots className="nav-icon" />
      <FaEllipsisH className="nav-icon" />
    </div>
  );
};

export default BottomNav;