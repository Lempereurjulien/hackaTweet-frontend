import styles from "../styles/Header.module.css";
import React from "react";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <textarea namw="postContent" rows={4} cols={20}></textarea>
      </div>
    </div>
  );
}
