/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import CurrentCook from "../CurrentCook/CurrentCook";
import WantCook from "../WantCook/WantCook";

const CookContainer = ({ cook }) => {
  //--------------------------------------
  const [cooking, setCooking] = useState([]);
  const handleCurrentCooking = (item) => {
    setCooking([...cooking, item]);
  };
  //--------------------------------------
  return (
    <div className="border border-border rounded-2xl h-fit col-span-2">
      <h1 className="text-dark2 text-2xl font-semibold mt-8 mb-4 text-center">
        Want to Cock : {}
      </h1>
      <div className="divider w-3/4 mx-auto bg-border h-[1px]"></div>
      {/*  */}

      <section className="grid gap-y-4 grid-cols-[repeat(21,1fr)] px-6 mb-2">
        <div className="w-full h-full"></div>
        <div className="w-full h-full col-span-5 text-dark6 font-[500] flex items-center">
          Name
        </div>
        <div className="w-full h-full col-span-2"></div>
        <div className="w-full h-full col-span-3 text-dark6 font-[500] flex items-center">
          Time
        </div>
        <div className="w-full h-full col-span-2"></div>
        <div className="w-full h-full col-span-3 text-dark6 font-[500] flex items-center">
          Calories
        </div>
        <div className="w-full h-full col-span-5"></div>
      </section>

      {/* WantCook section  */}
      {cook.map((item, i) => (
        <WantCook
          key={i}
          item={item}
          handleCurrentCooking={handleCurrentCooking}
        ></WantCook>
      ))}
      {/*  */}

      {/*     Currently cooking    */}
      <h1 className="text-dark2 text-2xl font-semibold mt-10 mb-4 text-center">
        Currently cooking: {}
      </h1>
      <div className="divider w-3/4 mx-auto bg-border h-[1px]"></div>

      <section className="grid grid-cols-10 px-6 mb-2">
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-3 text-dark6 font-[500]">
          Name
        </div>
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-2 text-dark6 font-[500]">
          Time
        </div>
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-2 text-dark6 font-[500]">
          Calories
        </div>
      </section>

      {/*CurrentCook section  */}
      {cooking.map((item, i) => (
        <CurrentCook key={i} item={item}></CurrentCook>
      ))}
      <section className="grid grid-cols-10 px-6 mt-4 mb-8 text-sm">
        <div className="w-full h-full flex item-center col-span-5"></div>
        <div className="w-full h-full flex item-center col-span-2 text-c70 font-[500]">
          Time
        </div>
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-2 text-c70 font-[500]">
          Calories
        </div>
      </section>
    </div>
  );
};

export default CookContainer;
