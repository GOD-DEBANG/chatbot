// "use client"
// import { Children, createContext, useContext } from "react"
// import {useUser} from "@clerk/nextjs";

// export const AppContext = createContext();
// export const useAppContext = ()=>{
//     return useContext(AppContext)
// }
// export const AppContextProvider = ({Children})=>{
//     const  {user} = useUser()

//     const value = {
//         user
//     }
//     return <AppContext.Provider value={value}>
//         {Children}
//     </AppContext.Provider>

// }
"use client";
import React, { createContext, useContext } from "react";
import { useUser } from "@clerk/nextjs";

// Create context
const AppContext = createContext(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return context;
};

// Provider component
export const AppContextProvider = ({ children }) => {
  const { user } = useUser();

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
};
