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
    // const articles = articleFilter.map((data, i) => { 
    //     const isBookmarked = bookmarks.some(bookmark => bookmark.title === data.title);
    //     return <Article key={i} {...data} isBookmarked={isBookmarked} />;
    //   });
    console.log(tweet);
    const allTweet = tweet.map(data => {
        console.log(data);
        return <Tweet id={data._id} token={data.user.token} username ={data.user.username} firstname={data.user.firstname} tweet = {data.tweet} date={data.date} ></Tweet>
    })

    return(
        <div>
       {allTweet}
        </div>
    )
}

