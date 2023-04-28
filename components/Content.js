import styles from '../styles/Content.module.css'
import Tweet from '../components/Tweet';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Content(){

    const [tweet, setTweet] = useState([]);

const user = useSelector((state) => state.users.value);
    useEffect(() =>{
         fetch(`http://localhost:3000/tweets/tweet/${user.token}`)
         .then(response => response.json())
         .then(data => {
            const tweets = data.tweet;
            setTweet(tweets.map(data => data));
         })
    }, [])

    const allTweet = tweet.map(data => {
        <Tweet></Tweet>
    })
    console.log(allTweet)

    console.log('tweets', tweet);
    return(
        <div>
       {allTweet}
        </div>
    )
}

