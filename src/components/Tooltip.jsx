import React from 'react';

const Tooltip = ({ children, content, styles }) => {
  return (
    <div className="relative flex items-center">
      <div className="group relative flex items-center">
        {children}
        <div className={`${styles} absolute bottom-full mb-2 p-5 bg-neutral-700 border border-neutral-600/70 text-neutral-300 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform pointer-events-none`}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
