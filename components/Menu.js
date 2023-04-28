import styles from '../styles/Menu.module.css';
import Button from '../components/Button';
import ReactModal from 'react-modal';
import { useState } from 'react';
import Modal from '../components/Modal';


export default function Menu(){
   

    return(
        <div className={styles.menu}>

            <div className={styles.image}>
                <div className={styles.placement}>
            <img src="Logo_of_Twitter.svg" className={styles.logo}></img>
                </div>
            </div>
            <div className={styles.connection}>
                <div className={styles.textConnection}>
            <img src="Logo_of_Twitter.svg" className={styles.twit}></img>
            <span className={styles.h1}>See what's happening</span>

            <h2 className={styles.h2} >Join Hackatweet today.</h2>
            <Button text={'Sign up'}></Button>
            <span className={styles.text} >Already have an account ?</span>
            <Button text={'Sign in'}></Button>
                </div>
            </div>
        </div>
    )
}