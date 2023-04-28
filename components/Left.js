import styles from '../styles/Left.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/users';
import {useRouter} from 'next/router';

export default function Left(){

    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.users.value);
    console.log(user);

    const logoutM =() =>{
        dispatch(logout());
        router.push("/");
    }
    return (
        <div className={styles.global}>
            <div>
            <img src="Logo_of_Twitter.svg" className={styles.twit}></img>
            </div>
            <div>
            <div className={styles.text}>
                <img src="user-icon-svgrepo-com.svg" className={styles.users} id="user"></img>
                <label for="user" className={styles.label}>{user.firstname}</label>
                <label for="user" className={styles.label}><span className={styles.username}>@{user.username}</span></label>
            </div>
            <button className={styles.button} onClick={logoutM}>Logout</button>
            </div>
        </div>
    )
}