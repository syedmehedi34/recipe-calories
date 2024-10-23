/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoStopwatchOutline } from "react-icons/io5";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

//

const Menu = ({ item, handleCookData }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = item;
  return (
    <div className="card min-w-full shadow-lg p-6  border border-border rounded-2xl">
      <figure className="h-56 rounded-2xl">
        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
      </figure>
      {/*  */}
      <div>
        <h1 className="text-dark2 font-semibold text-xl mt-6">{recipe_name}</h1>
        <p className="text-dark6">{short_description}</p>
        <div className="divider"></div>

        <div>
          <h3 className="text-dark2 font-[500] text-lg">
            Ingredients: {ingredients.length}
          </h3>
          {/*  */}
          <ul className="text-dark3 list-disc pl-5 mt-3">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          {/*  */}
        </div>
        <div className="divider"></div>

        <div className="text-[#282828CC] flex gap-5">
          <div className="flex items-center gap-1">
            <span className="text-2xl">
              <IoStopwatchOutline />
            </span>
            <p>{preparing_time} minutes</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl">
              <MdOutlineEnergySavingsLeaf />
            </span>
            <p>{calories}</p>
          </div>
        </div>
        <button
          onClick={() => handleCookData(item)}
          className="btn mt-5 rounded-[50px] bg-primary px-6 text-title text-lg"
        >
          Want to Cook
        </button>
      </div>
      {/*  */}
    </div>
  );
};

export default Menu;
