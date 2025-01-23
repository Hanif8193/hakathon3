"use clint";
import React,{ReactNode} from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";

interface ProviderProps {
    children: ReactNode;
}
const AppProvider: React.FC<ProviderProps> = ({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
export default AppProvider;