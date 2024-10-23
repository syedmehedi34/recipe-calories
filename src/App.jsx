import { useEffect, useState } from "react";
import "./App.css";
import CookContainer from "./components/CookContainer/CookContainer";
import Hero from "./components/Hero/Hero";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import Navbar from "./components/Navbar/Navbar";
import OurRecipes from "./components/OurRecipes/OurRecipes";
// import data from "./../public/menu.json";

//--------------------------------------------------------
function App() {
  // fetch the Menu items [ start ]
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // fetch the Menu items [ ends ]

  // Cook button click data [ start ]
  const [cook, setCook] = useState([]);
  const handleCookData = (item) => {
    if (cook.includes(item)) {
      alert("Already added");
    } else {
      setCook([...cook, item]);
    }
  };
  // Cook button click data [ start ]

  return (
    <div>
      <header className="w-11/12 mx-auto mt-2 ">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className="w-11/12 mx-auto">
        <OurRecipes></OurRecipes>

        {/* main section  */}
        <section className="grid grid-cols-5 gap-5">
          <MenuContainer
            items={items}
            handleCookData={handleCookData}
          ></MenuContainer>
          <CookContainer cook={cook}></CookContainer>
        </section>
      </main>
    </div>
  );
}

export default App;
