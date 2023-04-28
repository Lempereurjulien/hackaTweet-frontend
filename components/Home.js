import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Left from './Left';
import Tweet from './Tweet';
function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
      <Left/>
      </div>

      <div className={styles.header}>

      </div>
      <div className={styles.content}>
      <Tweet/>
      </div>
      <div className={styles.right}>

      </div>
    </div>
  );
}

export default Home;
