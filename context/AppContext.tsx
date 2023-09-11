import { createContext, useContext } from "react";

interface AppContextType{
    showBookCallModal: boolean;
    setShowBookCallModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error('useAppContext must be used within an AppContextProvider')
    }
    return context;
}

export default AppContext;
