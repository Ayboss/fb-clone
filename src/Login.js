import React from 'react';
import Button from '@material-ui/core/Button';
import fb from './assets/fb.png';
import fblogo from './assets/fblogo.png';
import './Login.css';
import {auth, provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login(){
  const [state, dispatch] = useStateValue();
  const signIn = ()=>{
    auth.signInWithPopup(provider).
    then(result=>{
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
      console.log(result);
    }).catch(error=>alert(error));

  }
  return(
    <div className="login">
      <div className="login__logo">
        <img src={fb} />
        <img src={fblogo} />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login;
