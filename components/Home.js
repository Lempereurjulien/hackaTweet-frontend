import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Left from './Left';
import Right from './Right';
function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
      <Left/>
      </div>

      <div className={styles.header}>

      </div>
      <div className={styles.content}></div>
      <div className={styles.right}>
      <Right/>
      </div>
    </div>
  );
}

export default Home;
