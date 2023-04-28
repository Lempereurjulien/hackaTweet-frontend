import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHashtag, removeHashtag } from "../reducers/hashtag";
import { addLike, removeLike } from "../reducers/likes";
export default function Tweet(props) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.value);
  const tweet = useSelector((state)=> state.tweets.value);

  const [like, setLike] = useState(false);

  let trashStyle = { color: "white" };

  const pattern = /#[a-z]*/gi;

  /**AJOUTER HASHTAG DANS REDUCER*/
  // const hastag = props.tweet.match(pattern);
  // if(hastag){
  //     dispatch(addHashtag(hastag));
  // }


  /**Ajouter tras pour supprimer tweet */
    const deleteTweets = () =>{
        fetch(`http://localhost:3000/tweets/${props.id}`)
         .then(response => response.json())
    }

  let deleteTweet = [];
  if (props.token === users.token) {
    deleteTweet = (
      <FontAwesomeIcon
        className={styles.userSection}
        icon={faTrash}
        style={trashStyle}
        onClick={() => deleteTweets()}
      />
    );
  }

  const trash =() =>{

  }

  let heartStyle = {};
  let number = {};

  /**AJOUTER LIKE DANS REDUCER + STYLE */
  if (like) {
    heartStyle = { color: "red" };
    number = { display: "", color: "red" };
    // dispatch(addLike(users))
  } else {
    (heartStyle = { color: "white" }), (number = { display: "none" });
  }

  /**STYLE TEXTE */
  let textStyle = { color: "white", margin: "15px" };
  return (
    <div className={styles.globalTweet}>
      <div className={styles.headerTweet}>
        <img src="user-icon-svgrepo-com.svg" className={styles.img}></img>
        <span style={textStyle}>{props.username}</span>
        <span className={styles.username}>@{props.firstname}</span>
      </div>
      <div className={styles.contentTweet}>
        <span style={textStyle} className={styles.tweet}>
          {props.tweet}
        </span>
      </div>
      <div className={styles.actionTweet}>
        <FontAwesomeIcon
          onClick={() => setLike(!like)}
          className={styles.userSection}
          icon={faHeart}
          style={heartStyle}
        />
        <span style={number}>1</span>
        {deleteTweet}
        {tweet}
      </div>
    </div>
  );
}
