import { ReactNode, useState } from "react";
import AppContext from "./AppContext";

interface AppContextProviderProps{
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({children}) => {
    const [showBookCallModal,setShowBookCallModal] = useState(false);

    return (
        <AppContext.Provider value={{showBookCallModal,setShowBookCallModal}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;