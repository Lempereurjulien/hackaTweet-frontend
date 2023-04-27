import styles from '../styles/Button.module.css';
import stylesM from '../styles/Modal.module.css';
import Modal from '../components/Modal';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout} from '../reducers/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Button(props){

    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    const toogleModal = () =>{
        setModal(!modal)
   }
   console.log(modal);
/**Style */
    let butonSignIn = {'background-color' :'#161D28',
                        'color' : '#378FEE'
                        }
    let butonSignUp = {
        'background-color' : '#378FEE',
        'color': 'white',
        'border' : 'none'
}
let buttonStyle={};
    if(props.text === 'Sign in'){

         buttonStyle =butonSignIn;
    }
    else{
         buttonStyle =butonSignUp
    }

let content ={'background-color' : 'rgb(27 27 27)',
                'width' : '700px',
                'height' : '700px',
                'margin' : 'auto'
            };
        
let overlay ={'position' : 'fixed',
            'background-color' : 'rgb(0 0 0 / 75%)'}            
/**End Style */

/**FUNCTION */
const [signUpFirstrname, setSignUpFirstrname] = useState('');
const [signUpUsername, setSignUpUsername] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');

const [signInUsername,setSignInUsername ] = useState('');
const [signInPassword,setSignInPassword ] = useState('');


      const signUp = () =>{
        console.log('ça marche')
            fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname : signUpFirstrname,username: signUpUsername, password: signUpPassword }),
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                        // dispatch(login({firstname : signUpFirstrname, username : signUpUsername}))
                        dispatch(login({ firstname : signUpFirstrname,username: signUpUsername, token: data.token }));
                        setSignUpFirstrname('');
                        setSignUpUsername('');
                        setSignUpPassword('');
                        // setIsModalVisible(false)
                    }
                });
      }

      const signIn =() =>{
        fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
					// setIsModalVisible(false)

				}
			});
	};
      
            

      let iconStyle = {'color' : 'white'};
      let modalM ;
  if(props.text === 'Sign up'){
     modalM = <ReactModal isOpen={modal} style={{ overlay: {...overlay}, content: {...content}}} >
      <div className={stylesM.modal}>
      <FontAwesomeIcon onClick={toogleModal} className={styles.userSection} icon={faXmark} style={iconStyle}/>
      <div className={stylesM.modalInput}>
      <span className={stylesM.text}>Create your Hackatweet account</span>
      <input type="text" placeholder='Firstname' className={stylesM.input} onChange={(e) => setSignUpFirstrname(e.target.value)}></input>
      <input type="text" placeholder='Username' className={stylesM.input} onChange={(e) => setSignUpUsername(e.target.value)}></input>
      <input type="password" placeholder='Password' className={stylesM.input} onChange={(e) => setSignUpPassword(e.target.value)}></input>
      <button className={stylesM.inputB} onClick={signUp()}>Sign up</button>
      </div>
      </div>
  </ReactModal>
  }
  else{
    modalM = <ReactModal isOpen={modal} style={{ overlay: {...overlay}, content: {...content}}} >
      <div className={stylesM.modal}>
      <FontAwesomeIcon onClick={toogleModal} className={styles.userSection} icon={faXmark} style={iconStyle}/>
      <div className={stylesM.modalInput}>
      <span className={stylesM.text}>Connect to Hackatweet</span>
      <input type="text" placeholder='Username' className={stylesM.input} onChange={(e) => setSignInUsername(e.target.value)}></input>
      <input type="password" placeholder='Password' className={stylesM.input} onChange={(e) => setSignInUsername(e.target.value)}></input>
      <button className={stylesM.inputB} onClick={signUp()}>Sign In</button>
      </div>
      </div>
  </ReactModal>
  }
    return(
        <>
        <div>
        <button className={styles.button} style={buttonStyle} onClick={toogleModal}>{props.text}</button>
        {modalM}
        </div>
        </>
    )
}