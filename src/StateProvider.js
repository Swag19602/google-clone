import React, {createContext, useContext, useReducer} from 'react';

export const StateContext=createContext();//Data Layer

export const StateProvider=({
    reducer, initialState, children
})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Higher Order Componenet
// Hooks which helps us to pull information from the data layer
export const useStateValue=()=> useContext(StateContext);