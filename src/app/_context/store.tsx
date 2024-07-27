"use client";
import { IHumanRoot } from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";
import {
  SetStateAction,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  useState,
  Context,
} from "react";

interface ContextProps {
  hoverContent: ReactNode;
  setHoverContent: Dispatch<SetStateAction<any>>;
  currentUserDetails: IHumanRoot | null;
  setCurrentUserDetails: Dispatch<SetStateAction<any>>;
}

const GlobalContext: Context<ContextProps> = createContext<ContextProps>({
  hoverContent: null,
  setHoverContent: (): any => null,
  currentUserDetails: null,
  setCurrentUserDetails: (): any => null,
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [hoverContent, setHoverContent] = useState(null);
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        hoverContent,
        setHoverContent,
        currentUserDetails,
        setCurrentUserDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
