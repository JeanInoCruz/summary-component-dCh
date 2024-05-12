import React, { useEffect, useState } from "react";

export const ResultCard = ({ data, result }) => {

  
  return (
    <section className="text-whiteado bg-gradient-to-b from-slate-blue from-5% to-royal-blue flex flex-col justify-center items-center p-6 rounded-b-5xl">
      <h3 className="font-extrabold text-slate-300">Your Result</h3>
      <div className="rounded-full w-36 h-36 bg-gradient-to-b from-violet-blue to-persian-blue m-5 flex flex-col items-center justify-center">
        <span className="text-6xl pt-2 font-extrabold">{result}</span>
        <p className="text-slate-400 text-sm mt-2"> of 100</p>
      </div>
      <h1 className="text-2xl font-bold m-2"> Great</h1>
      <p className="text-center px-5 text-slate-300 mb-3">
        {" "}
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};
