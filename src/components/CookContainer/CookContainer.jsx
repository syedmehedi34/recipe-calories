/* eslint-disable react/prop-types */

import { useState } from "react";
import CurrentCook from "../CurrentCook/CurrentCook";
import WantCook from "../WantCook/WantCook";

const CookContainer = ({ cook }) => {
  //----------------Current cooking---------
  const [cookingTime, setCookingTime] = useState(0); // set total cooking time
  const [calories, setCalories] = useState(0);
  const [cooking, setCooking] = useState([]); // current cooking list
  const handleCurrentCooking = (item) => {
    if (cooking.includes(item)) {
      alert("Already Cooking");
    } else {
      setCooking([...cooking, item]);

      // adding function
      setCookingTime(cookingTime + item.preparing_time);
      setCalories(calories + item.calories);
    }
  };
  //--------------------------------------
  return (
    <div className="border border-border rounded-2xl h-fit col-span-2">
      <h1 className="text-dark2 text-2xl font-semibold mt-8 mb-4 text-center">
        Want to Cock : {cook.length}
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
      {cook.length > 0 ? (
        cook.map((item, i) => (
          <WantCook
            key={i}
            item={item}
            handleCurrentCooking={handleCurrentCooking}
            index={i + 1}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center my-5">
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=GEeyWNWvx7oa&format=png&color=000000"
              alt=""
            />
          </div>
          <p className="text-title font-semibold text-xl">
            No item in cooking list
          </p>
        </div>
      )}

      {/*  */}

      {/*     Currently cooking    */}
      <h1 className="text-dark2 text-2xl font-semibold mt-10 mb-4 text-center">
        Currently cooking: {cooking.length}
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
      {cooking.length > 0 ? (
        cooking.map((item, i) => (
          <CurrentCook key={i} item={item} index={i + 1}></CurrentCook>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center my-5">
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=rwjfashjpGRv&format=png&color=000000"
              alt=""
            />
          </div>
          <p className="text-title font-semibold text-xl">
            Nothing for cooking
          </p>
        </div>
      )}

      <section className="grid grid-cols-10 px-6 mt-4 mb-8 text-sm">
        <div className="w-full h-full flex item-center col-span-5"></div>
        <div className="w-full h-full flex item-center col-span-2 text-c70 font-[500]">
          Total time: {cookingTime}
        </div>
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-2 text-c70 font-[500]">
          Total calories: {calories}
        </div>
      </section>
    </div>
  );
};

export default CookContainer;
