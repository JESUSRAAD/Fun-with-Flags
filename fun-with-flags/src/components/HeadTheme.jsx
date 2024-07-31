import React, { useContext } from "react";
import { FlagContext } from "../context/FlagsContext";
import { Moon, Sun } from "lucide-react";

const HeadTheme = () => {
  const { isThemeDark, setIsThemeDark } = useContext(FlagContext);

  const handleTheme = () => {
    if (isThemeDark === false) {
      setIsThemeDark(true);
    } else {
      setIsThemeDark(false);
    }
    return isThemeDark;
  };

  let cssClassHead = "";
  let moonSunIcon=""

  if (isThemeDark === false) {
    moonSunIcon = <Moon color="#000000" />;
    cssClassHead = " bg-[#EDF2F7] text-black h-[64px]";
  } else {
    moonSunIcon = <Sun color="#ffffff" />;

    cssClassHead = " bg-[#171923] text-white h-[64px]";
  }

  return (
    <div className={cssClassHead}>
      <div className=" flex  items-center justify-between">
        <p className="p-5">Where in the world?</p>
        <div onClick={() => handleTheme()} className="p-5 ">
          {moonSunIcon}
        </div>
      </div>
    </div>
  );
};

export default HeadTheme;
