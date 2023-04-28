import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Tweet(props){

    const [like, setLike] = useState(false);
    
    let iconStyle = {}
    
    like ? iconStyle = {'color' : 'red'} :  iconStyle = {'color' : 'white'}
    return (
        <div className={styles.globalTweet}>
            <div className={styles.headerTweet}>
            <img src="user-icon-svgrepo-com.svg" className={styles.img}></img>
            <span>{props.user}</span>
            </div>
            <div className={styles.contentTweet}>
            <span>{props.tweet}</span>
            </div>
            <div className={styles.actionTweet}>
            <FontAwesomeIcon onClick={() => setLike(!like)} className={styles.userSection} icon={faHeart} style={iconStyle}/>

            </div>
        </div>
    )
}

