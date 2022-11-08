import { createContext } from "react";
import { Espa } from "../../types/shared/Lang";




interface GeneralContextInterface {
    setScrollPercentage:(percentage:number)=>void,
    scrollPercentage: number,
    loading: boolean,
    language: Espa | null,
    getSpanish: () => Promise<void>,
    getEnglish: ()=> Promise<void>
}

const GeneralContext = createContext<GeneralContextInterface | null>(null);

export default GeneralContext;