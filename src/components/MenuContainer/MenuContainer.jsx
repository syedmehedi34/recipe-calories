/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";

//

const MenuContainer = ({ items, handleCookData }) => {
  //   console.log(items);

  return (
    <div className=" h-full col-span-3">
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, idx) => (
          <Menu
            key={item.recipe_id}
            item={item}
            handleCookData={handleCookData}
          ></Menu>
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
