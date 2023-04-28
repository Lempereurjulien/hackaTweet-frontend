import styles from "../styles/Header.module.css";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "../reducers/tweets";

export default function Header() {
  const [postTweet, setPostTweet] = useState("");
  //const [postUser, setPostUser] = useState("");
  const [postToken, setPostToken] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.value);

  const postingTweet = () => {
    fetch("http://localhost:3000/tweets/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweet: postTweet,
        token: user.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "C LA DATA UEUE");
        if (data.token) {
          dispatch(addTweet({ tweet: postTweet, token: user.token }));
          setPostTweet("");
        }
      });
  };

  const counter = () => {
    postTweet.length;
  };
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <input
          type="text"
          maxLength={280}
          name="postContent"
          resize="none"
          rows={10}
          cols={75}
          placeholder="Write something..."
          onChange={(e) => setPostTweet(e.target.value)}
        ></input>
        <button
          className={styles.tweetButton}
          onClick={() => {
            postingTweet();
          }}
        >
          Tweet
        </button>
        <span className={styles.counter}>{postTweet.length}/280</span>
      </div>
    </div>
  );
}
