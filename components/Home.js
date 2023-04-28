<<<<<<< HEAD
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Left from "./Left";
import Header from "./Header";
=======
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Left from './Left';
import Content from './Content';
>>>>>>> content
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
<<<<<<< HEAD
      <div className={styles.content}></div>
      <div className={styles.right}></div>
=======
      <div className={styles.content}>
      <Content/>
      </div>
      <div className={styles.right}>

      </div>
>>>>>>> content
    </div>
  );
}

export default Home;
