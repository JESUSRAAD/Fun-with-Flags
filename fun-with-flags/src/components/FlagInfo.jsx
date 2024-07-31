import React, { useContext, useEffect, useState } from "react";
import { FlagContext } from "../context/FlagsContext";
import { Link } from "react-router-dom";

const FlagInfo = () => {
  const { flagNameInfo, setFlagNameInfo, isThemeDark, setIsThemeDark } =
    useContext(FlagContext);

  const [flag, setFlag] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFlagInfo = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${flagNameInfo}`
        );

        const data = await response.json();

        console.log(data);
        setFlag(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getFlagInfo();
  }, [flagNameInfo]);

  let cssClassBoddy = "";
  let cssClassFronter = "";
  let cssClassBtnBack=""
  if (isThemeDark === false) {
    cssClassBoddy = "flex flex-col h-screen  gap-[15px]";
    cssClassFronter = " bg-[#EDF2F7] p-4 w-fit rounded scale-75";
    cssClassBtnBack="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 "
  } else {
    cssClassBoddy = "flex flex-col h-screen text-white bg-[#1A202C] gap-[15px]";
    cssClassFronter = "bg-[#2C313D] p-4 w-fit rounded scale-75";
    cssClassBtnBack="inline-block  py-2 px-6 rounded shadow mt-8 bg-gray-800 hover:bg-gray-700 text-gray-400"

  }

  console.log(flag);

  return (
    <div className={`${cssClassBoddy}  items-center`}>
      {loading ? (
        <p>Cargando</p>
      ) : (
        flag?.map((country, i) => {
          return (
            <div key={i} className="flex w-[80%] gap-5">
              <div className="w-fit flex items-center justify-center">
                <img
                  src={country.flags.png}
                  alt={`Bandera de ${country.name.common}`}
                />
              </div>
              <div className=" flex flex-col  items-center">
                <div>
                  <ul >
                    <p className="text-gray-900 font-bold text-lg">{country.name.common}</p>
                    <li className>
                      Native Name: {country.name.nativeName?.spa?.official || "N/A"}
                    </li>
                    <br></br>
                    <li>Population: {country.population}</li>
                    <br></br>
                    <li>Currencies: {country.currencies[0]}</li>
                    <br></br>
                    <li>Region: {country.region}</li>
                    <br></br>
                    <li>Languages: {country.languages?.spa}</li>
                    <br></br>
                    <li>Subregion: {country.subregion}</li>
                    <br></br>
                    <li>Capital: {country.capital?.[0]}</li>
                    <br></br>
                    <li>Top Level Domain: {country.tld?.[0]}</li>
                  </ul>
                </div>
                <div>
                  <ul className="flex gap-3 ">
                    Borders:{" "}
                    {country.borders?.map((fronter, i) => {
                      //   const handleNameFlag=()=>{
                      //     setFlagNameInfo(fronter)
                      // }
                      // onClick={()=>handleNameFlag()}
                      return (
                        <div key={i} className={cssClassFronter}>
                          {fronter}
                        </div>
                      );
                    }) || "N/A"}
                  </ul>
                </div>
                <Link to="/" className={cssClassBtnBack}>Back</Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FlagInfo;
