import React, { ReactNode } from 'react';

const SlideIn = ({ children }: { children: ReactNode }) => {
  return <div className="origin-top-left animate-scalein">{children}</div>;
};

export default SlideIn;
