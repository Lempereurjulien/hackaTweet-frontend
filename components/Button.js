import styles from '../styles/Button.module.css';

export default function Button(props){


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

    console.log(props.text)
    // props.text ==='Sign in' ? buttonStyle ={} : buttonStyle ={};

    return(
        <button className={styles.button} style={buttonStyle}>{props.text}</button>
    )
}