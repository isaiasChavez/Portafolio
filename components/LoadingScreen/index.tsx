import LayoutEmpty from "../shared/layout/empty";
import Spinner from "../shared/Spinner";

interface LoadingScreenProps {
    
}
 
const LoadingScreen: React.FC<LoadingScreenProps> = () => {
    return (
        <LayoutEmpty className="flex items-center justify-center">
<Spinner/>
        </LayoutEmpty>
    );
}
 
export default LoadingScreen;