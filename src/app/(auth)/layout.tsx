import React from "react";
type props = { children: React.ReactNode };
const Layout = ({ children }: props) => {
  return (
    <div className="flex item-center justify-center h-screen w-full">
      {children}
    </div>
  );
};

export default Layout;
