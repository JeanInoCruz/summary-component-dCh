import React from "react";

export const SummaryCard = ( {children }) => {
  return (
    <div className="p-8 py-5 flex flex-col ">
      <h2 className="text-lg font-bold mb-4">Summary</h2>
      {children}
      <button className="bg-dark-gray text-white h-full py-3 rounded-5xl mt-2 text-lg"> Continue</button>
    </div>
  );
};
