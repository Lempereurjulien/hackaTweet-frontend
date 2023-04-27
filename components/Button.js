import styles from '../styles/Button.module.css';

export default Button(props){

    return(
        <button className={styles.button}>props.text</button>
    )
}