import React,{useState,useEffect} from 'react'
import fire from './fire'
import './App.css'
import { Route, Switch, useLocation,useHistory } from "react-router-dom";
import Login from './Components/Login'
import Hero from './Components/Hero'
import LoginAsResident from './Components/LoginAsResident'
import {motion} from 'framer-motion'



function Welcome() {
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(false);

  // making different useState variables to make a different auth database in future
  const [user1,setUser1]=useState('');
  const [email1,setEmail1]=useState('');
  const [password1,setPassword1]=useState('');
  const [emailError1,setEmailError1]=useState('');
  const [passwordError1,setPasswordError1]=useState('');
  const [hasAccount1,setHasAccount1]=useState(false);

  const history=useHistory()

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin=()=>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    // history.push('/hero')
    .then(()=>history.push('/guard'))
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;
      }
    })
  }
  const handleSignup=()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(()=>history.push('/guard'))
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;
      }
    })
  }
  const handleLogout=()=>{
    fire.auth().signOut();
  };

  const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("")
      }
    })
  }

  useEffect(()=>{
    authListener()
  },[])

  // making different functions to make a different auth database in future

  const clearInputs1=()=>{
    setEmail1('');
    setPassword1('');
  }
  const clearErrors1=()=>{
    setEmailError1('');
    setPasswordError1('');
  }

  const handleLogin1=()=>{
    clearErrors1();
    fire
    .auth()
    .signInWithEmailAndPassword(email1,password1)
    .then(()=>history.push('/resident'))
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError1(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError1(err.message)
          break;
      }
    })
  }
  const handleSignup1=()=>{
    clearErrors1();
    fire
    .auth()
    .createUserWithEmailAndPassword(email1,password1)
    .then(()=>history.push('/resident'))
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError1(err.message);
          break;
        case "auth/weak-password":
          setPasswordError1(err.message)
          break;
      }
    })
  }
  const handleLogout1=()=>{
    fire.auth().signOut();
  };

  const authListener1=()=>{
    fire.auth().onAuthStateChanged(user1=>{
      if(user1){
        clearInputs1();
        setUser1(user1);
      }else{
        setUser1("")
      }
    })
  }

  useEffect(()=>{
    authListener1()
  },[])

  return (
    <div className='welcomeScreen'>
        <Login 
          user={user}
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin} 
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
      />
        <LoginAsResident
          email1={email1} 
          setEmail1={setEmail1} 
          password1={password1} 
          setPassword1={setPassword1} 
          handleLogin1={handleLogin1} 
          handleSignup1={handleSignup1}
          hasAccount1={hasAccount1}
          setHasAccount1={setHasAccount1}
          emailError1={emailError1}
          passwordError1={passwordError1}
      />
      {/* {user?(
        <Hero
        handleLogout={handleLogout}
        />
      ):(
      console.log("No user exists right now")
      )} */}
      {/* {user1?(()=>{
        history.push('/')
      }
      ):(
      console.log("No user exists right now")
      )}
       */}
       {/* {user?<Hero handleLogout />:console.log("Lets")} */}
      
    </div>
  )
}

export default Welcome
