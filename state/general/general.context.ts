import { createContext } from "react";
import { Espa } from "../../types/shared/Lang";
import { Langs } from "./types";




interface GeneralContextInterface {
    setScrollPercentage:(percentage:number)=>void,
    scrollPercentage: number,
    lan: Langs,
    loading: boolean,
    language: Espa | null,
    getSpanish: () => Promise<void>,
    getEnglish: ()=> Promise<void>
}

const GeneralContext = createContext<GeneralContextInterface | null>(null);

export default GeneralContext;