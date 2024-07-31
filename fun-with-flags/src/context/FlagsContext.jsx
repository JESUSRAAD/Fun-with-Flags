import React, { createContext, useState } from "react";

export const FlagContext = createContext(null);

export default function FlagContextProvider({children}) {

    const [isThemeDark,setIsThemeDark]=useState(false)
const [flagNameInfo,setFlagNameInfo]=useState("venezuela")


	return(
		<FlagContext.Provider value={{isThemeDark,setIsThemeDark,flagNameInfo,setFlagNameInfo}}>
			{children}
		</FlagContext.Provider>
	)
}