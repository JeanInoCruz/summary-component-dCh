import React, { useEffect, useState } from "react";

export const ItemCard = ({data}) => {
 
  const getColor = (category) => {
    switch (category) {
      case "Memory":
        return "orangey-yellow";
      case "Verbal":
        return "green-teal";
      case "Visual":
        return "cobalt-blue";
      case "Reaction":
        return "light-red";
      default:
        return "white";
    }
  };

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.score}
              className={`flex flex-row justify-between p-4 font-bold mb-3 bg-${getColor(
                item.category
              )} bg-opacity-5 rounded-xl `}
            >
              <div className="inline-flex gap-3  ">
                <img
                  src={`src/assets/images/icon-${item.category}.svg`}
                  alt={item.name}
                />
                <span className={`text-${getColor(item.category)}`}>
                  {item.category}
                </span>
              </div>
              <div>
                <span className="text-black font-bold"> {item.score}</span>
                <span className="text-slate-400 font-normal"> / 100</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

