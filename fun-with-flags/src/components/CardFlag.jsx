import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FlagContext } from "../context/FlagsContext";

const CardFlag = ({ img, name, population, region, capital }) => {

    const{flagNameInfo,setFlagNameInfo}=useContext(FlagContext)

const handleNameFlag=()=>{
    setFlagNameInfo(name)
}

  return (
    <div className=" h-fit   border rounded-xl border-[#E2E8F0]">
      <div className="my-5 flex flex-col justify-between   gap-3">
        <div className="   flex  items-center">
          <img className="scale-95 rounded-xl" src={img} alt={name + "flag"} />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <p>{name}</p>
          <p>POPULATION:{population}</p>
          <p>REGION:{region}</p>
          <p>CAPITAL:{capital}</p>
          <Link to="/country" onClick={()=>handleNameFlag()} className="border border-[#E2E8F0] p-2 rounded-xl">
          More Info
        </Link>
          
          
          {/* <button className="border border-[#E2E8F0] p-2 rounded-xl">More Info</button> */}
        </div>
      
        
      </div>
    </div>
  );
};

export default CardFlag;
