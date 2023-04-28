import styles from '../styles/Right.module.css';
import Trends from "../components/Trends";


export default function Right(){
    return (
        <div>
        <h1 className={styles.title}>Trends</h1>
        <Trends></Trends>
        </div>
        
    )
}