import React from 'react'
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'

function Login(props) {
    const history=useHistory()
    const {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}=props;
    const buttonVariants={
        hover:{
          textShadow:"0px 0px 8px rgba(219, 68, 68, 0.904)",
          boxShadow:" 0px 0px 8px rgb(255,255,255)" ,
          transition:{
            duration:0.3,
            yoyo:Infinity
          }      
        }
      }
    return (
        <div 
        className='login'>
            <motion.div
            whileHover={{
                scale:0.95
            }}
            className='loginContainer'>
            <label style={{letterSpacing:'2px',lineHeight:1.5,fontSize:'4rem'}}>Guard</label>
                <label style={{letterSpacing:'2px'}}>Username</label>
                <input 
                    type='text' 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}
                 />
                 <p className='errorMsg'>{emailError}</p>
                 <label style={{letterSpacing:'2px'}}>Password</label>
                <input 
                    type='password' 
                    autoFocus 
                    required 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                 />
                 <p className='errorMsg'>{passwordError}</p>
                 <div className="btnContainer">
                     {hasAccount?(
                         <>
                         <motion.button
                         style={{borderRadius:'20px'}}
                         variants={buttonVariants}
                         whileHover='hover'
                         onClick={handleLogin}>Sign In</motion.button>
                         <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                         </>

                     ):(
                        <>
                        <motion.button
                         style={{borderRadius:'20px'}}
                         variants={buttonVariants}
                         whileHover='hover'
                         onClick={handleSignup}>Sign Up</motion.button>
                        <p>Already have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                     )}
                 </div>
            </motion.div>
        </div>
    )
}

export default Login
