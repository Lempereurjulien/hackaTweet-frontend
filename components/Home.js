import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Left from "./Left";
import Content from "./Content";
import Header from "./Header";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>

      <div className={styles.left}>
        <Left />
      </div>

      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Home;
