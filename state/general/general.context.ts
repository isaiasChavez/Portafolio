import { createContext } from "react";

interface GeneralContextInterface {
    setScrollPercentage:(percentage:number)=>void,
    scrollPercentage:number
}

const GeneralContext = createContext<GeneralContextInterface | null>(null);

export default GeneralContext;