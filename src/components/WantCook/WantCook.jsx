/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const WantCook = ({ item, handleCurrentCooking }) => {
  //   console.log(item);

  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = item;

  return (
    <section className="grid gap-y-4 grid-cols-[repeat(21,1fr)] px-6 bg-[#28282808] py-3">
      <div className="w-full h-full text-[#282828CC] font-semibold flex items-center">
        1
      </div>
      <div className="w-full h-full col-span-5 text-c70 text-sm flex items-center">
        {recipe_name}
      </div>
      <div className="w-full h-full col-span-2"></div>
      <div className="w-full h-full col-span-3 text-c70 text-sm flex items-center">
        {preparing_time} minutes
      </div>
      <div className="w-full h-full col-span-2"></div>
      <div className="w-full h-full col-span-3 text-c70 text-sm flex items-center">
        <p>{calories} calories</p>
      </div>
      <div className="w-full h-full col-span-5  flex items-center">
        <button
          onClick={() => {
            handleCurrentCooking(item);
          }}
          className="btn text-center text-title bg-primary font-[500] px-6 py-2 rounded-full"
        >
          Preparing
        </button>
      </div>
    </section>
  );
};

export default WantCook;
