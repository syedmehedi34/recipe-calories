/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CurrentCook = ({ item }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = item;

  return (
    <div>
      <section className="grid grid-cols-10 px-6 bg-[#28282808] py-5">
        <div className="w-full h-full flex item-center text-[#282828CC] font-semibold">
          1
        </div>
        <div className="w-full h-full flex item-center col-span-3 text-c70 text-sm">
          {recipe_name}
        </div>
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-2 text-c70 text-sm">
          {preparing_time} minutes
        </div>
        <div className="w-full h-full flex item-center"></div>
        <div className="w-full h-full flex item-center col-span-2 text-c70 text-sm">
          {calories} calories
        </div>
      </section>
    </div>
  );
};

export default CurrentCook;
