import React from 'react';

const Card = ({ children, className = '', title, icon }) => {
  return (
    <div className={`card ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-4">
          {icon && <span className="text-2xl">{icon}</span>}
          {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
