import React, { useContext, useEffect, useState } from "react";
import CardFlag from "./CardFlag";
import { Moon, Sun } from "lucide-react";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import { FlagContext } from "../context/FlagsContext";
import FlagInfo from "./FlagInfo";

const FlagsList = () => {
  const [listFlags, setListFlags] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const { isThemeDark, setIsThemeDark } = useContext(FlagContext);

  const getFlags = async () => {
    const res = await fetch(` https://restcountries.com/v3.1/all `);
    const data = await res.json();
    setListFlags(data);
  };

  useEffect(() => {
    getFlags();
  }, []);

  useEffect(() => {
    if (selectedRegion === "All") {
      getFlags();
    } else {
      filterByRegion(selectedRegion);
    }
  }, [selectedRegion]);





  console.log(listFlags);

  let cssClassInputText = "";
  let cssClassInputSelect = "";
  let cssClassBoddy = "";

  if (isThemeDark === false) {
    cssClassInputText = "rounded-xl border-[#E2E8F0] border h-[40px]";
    cssClassInputSelect =
      "w-[140px] h-[40px] border border-[#E0E3E5] rounded-xl";

    cssClassBoddy = "flex flex-col  gap-[15px]";
  } else {
    cssClassInputText =
      "rounded-xl  bg-[#1A202C] border-[#E2E8F0] border h-[40px]";
    cssClassInputSelect =
      "w-[140px] h-[40px] bg-[#1A202C]  border border-[#E0E3E5] rounded-xl";

    cssClassBoddy = "flex flex-col  text-white bg-[#1A202C] gap-[15px]";
  }

  const searchContry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setListFlags(data)
    } catch (error) {
      console.log(error);
    }
  };
  const filterByRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setListFlags(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchContry = (event) => {
    event.preventDefault();

    searchContry();
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className={cssClassBoddy}>
      <div className="m-3 flex  items-center justify-between">
        <form
          onSubmit={ handleSearchContry}
          autoComplete="off"
          className="max-w-4xl md:flex-1"
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for name"
            required
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className={cssClassInputText}
          />
        </form>
        
          <select
            className={cssClassInputSelect}
            id="continents"
            name="continents"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
      
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {listFlags.map((flag) => {
          return (
            <CardFlag
              img={flag.flags.png}
              name={flag.name.common}
              population={flag.population}
              region={flag.continents}
              capital={flag.capital}
            />
          );
        })}
      </div>
      {/* <div><FlagInfo/></div> */}
    </div>
  );
};

export default FlagsList;
