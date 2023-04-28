import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Left from './Left';
<<<<<<< HEAD
import Content from './Content';
import Header from '../components/Header';
=======
import Right from './Right';
>>>>>>> trends
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
      <Content/>
      </div>
      <div className={styles.right}>
      <Right/>
      </div>
    </div>
  );
}

export default Home;
