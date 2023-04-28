import styles from '../styles/Trends.module.css'
import { useSelector } from 'react-redux'

export default function Trends(){

    // const hashtag = useSelector((state) => state.hashtag.value);

    // const hashView = hashtag.map(data => {
        
    // })

    // if(number >1){
    //     tweetText = 'Tweets'
    // }
    return (
        <div>
            <h2 className={styles.title}>#hacka</h2>
            <label className={styles.nbTweet}>1 {tweetText}</label>
        </div>
    )
}