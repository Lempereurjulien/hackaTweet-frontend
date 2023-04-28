<<<<<<< HEAD
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Left from "./Left";
import Content from "./Content";
import Header from "./Header";
=======
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Left from './Left';
import Content from './Content';
import Header from '../components/Header';
import Right from './Right';
>>>>>>> 50501e9f105b14a8c729b05fef123e1f97402cb4
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
<<<<<<< HEAD
      <div className={styles.right}></div>
=======
      <div className={styles.right}>
      <Right/>
      </div>
>>>>>>> 50501e9f105b14a8c729b05fef123e1f97402cb4
    </div>
  );
}

export default Home;
