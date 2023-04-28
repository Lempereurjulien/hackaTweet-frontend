import styles from "../styles/Header.module.css";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const [postTweet, setPostTweet] = useState([]);
  const [postUser, setPostUser] = useState("");
  const [postToken, setPostToken] = useState("");

  const user = useSelector((state) => state.users.value);
  console.log(user);

  const postingTweet = () => {
    fetch("http://localhost:3000/tweets/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweet: postTweet,
        user: postUser,
        token: user.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "C LA DATA UEUE");
        if (data.token) {
          dispatch();
        }
      });
  };
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <textarea
          maxLength={250}
          name="postContent"
          resize="none"
          rows={5}
          cols={75}
          placeholder="Write something..."
        ></textarea>
      </div>
    </div>
  );
}
