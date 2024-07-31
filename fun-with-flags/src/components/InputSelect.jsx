import React, { useContext } from 'react'
import { FlagContext } from '../context/FlagsContext'

const InputSelect = () => {

    const {isThemeDark,setIsThemeDark}=useContext(FlagContext)

    let cssClassInputSelect=""
    if (isThemeDark===false) {
        cssClassInputSelect='w-[140px] h-[40px] border border-[#E0E3E5] rounded-xl' 
      } else {
        cssClassInputSelect='w-[140px] h-[40px] bg-[#1A202C]  border border-[#E0E3E5] rounded-xl' 

      }

  return (
    <select className={cssClassInputSelect} id="continents" name="continents">
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>  
  )
}

export default InputSelect