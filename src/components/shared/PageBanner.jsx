import React from "react";

const PageBanner = ({ children }) => {
  return (
    <section className="bg-black min-h-80 lg:min-h-100 overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto min-h-80 lg:min-h-100 flex items-center justify-center px-5">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
            {children}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
