import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-white grid place-items-center max-w-full">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 border-b-4 border-black/70 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
