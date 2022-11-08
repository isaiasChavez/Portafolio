import styles from './styles.module.css'
interface SpinnerProps {
    
}
 
const Spinner: React.FC<SpinnerProps> = () => {
    return (  <span className={styles.loader}></span>);
}
 
export default Spinner;