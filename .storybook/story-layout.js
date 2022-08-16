import React from 'react';

const StoryLayout = ({ children }) => {
  return (
    <div className="w-full h-max p-8 bg-white dark:bg-slate-800 ">
      {children}
    </div>
  );
};

export default StoryLayout;
