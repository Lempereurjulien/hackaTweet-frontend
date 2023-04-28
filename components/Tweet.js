import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function Tweet(props){

    const users = useSelector((state) => state.users.value)

    console.log(users)
    const [like, setLike] = useState(false);
    let trashStyle = {'color' : 'white'};

    
    let deleteTweet = [];
    // if(props.username === users.username){
    //     deleteTweet = <FontAwesomeIcon  className={styles.userSection} icon={faTrash} style={trashStyle}/>;
    // }

    let heartStyle = {}
    
    like ? heartStyle = {'color' : 'red'} :  heartStyle = {'color' : 'white'}
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
            <FontAwesomeIcon onClick={() => setLike(!like)} className={styles.userSection} icon={faHeart} style={heartStyle}/>
            {deleteTweet}
            </div>
        </div>
    )
}

