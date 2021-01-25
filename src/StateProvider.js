//setup data layer
//we need this to track the basket
import React, {createContext, useContext, useReducer} from "react";

//THIS IS THE DATA LAYER
export const StateContext=createContext();

//BUILD A PROVIDER
export const StateProvider=({ reducer, initialState, children })=>( 
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

// Pull information from the data layer
//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);