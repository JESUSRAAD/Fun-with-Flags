import React, { useContext } from 'react'
import { FlagContext } from '../context/FlagsContext'

const InputText = () => {
    const {isThemeDark,setIsThemeDark}=useContext(FlagContext)

let cssClassInputText=""
    if (isThemeDark===false) {
        cssClassInputText="rounded-xl border-[#E2E8F0] border h-[40px]" 
      } else {
        cssClassInputText="rounded-xl  bg-[#1A202C] border-[#E2E8F0] border h-[40px]" 

      }
      
  return (
    <input type="text" placeholder="Search for a country " className={cssClassInputText}></input>
  )
}

export default InputText