import { createContext, useContext } from "react";
import { data } from "./Requests";

export const ApiContext = createContext()

export const ApiProvider = ({children}) => {
    return (
        <ApiContext.Provider
            value={data}
        >
            {children}
        </ApiContext.Provider>
    )
}