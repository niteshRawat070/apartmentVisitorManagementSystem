import React from 'react'
import {motion} from 'framer-motion'

function LoginAsResident(props) {
    const buttonVariants={
        hover:{
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:" 0px 0px 8px rgba(219, 68, 68, 0.904)" ,
          transition:{
            duration:0.3,
            yoyo:Infinity
          }      
        }
      }
    const {email1,setEmail1,password1,setPassword1,handleLogin1,handleSignup1,hasAccount1,setHasAccount1,emailError1,passwordError1}=props;
    return (
        <div className='login1'>
            <motion.div
            whileHover={{
                scale:0.95
            }}className='loginContainer1'>
            <label style={{letterSpacing:'2px',lineHeight:1.5,fontSize:'4rem'}}>Resident</label>
                <label style={{letterSpacing:'2px'}}>Email</label>
                <input 
                    type='text' 
                    autoFocus 
                    required 
                    value={email1} 
                    onChange={e=>setEmail1(e.target.value)}
                 />
                 <p className='errorMsg1'>{emailError1}</p>
                 <label style={{letterSpacing:'2px'}}>Password</label>
                <input 
                    type='password' 
                    autoFocus 
                    required 
                    value={password1} 
                    onChange={e=>setPassword1(e.target.value)}
                 />
                 <p className='errorMsg1'>{passwordError1}</p>
                 <div className="btnContainer">
                     {hasAccount1?(
                         <>
                         <motion.button
                         variants={buttonVariants}
                         whileHover='hover'
                         className='btn1' onClick={handleLogin1}>Sign In</motion.button>
                         <p>Don't have an account? <span onClick={()=>setHasAccount1(!hasAccount1)}>Sign Up</span></p>
                         </>

                     ):(
                        <>
                        <motion.button
                         variants={buttonVariants}
                         whileHover='hover'
                         className='btn1' onClick={handleSignup1}>Sign Up</motion.button>
                        <p>Already have an account? <span onClick={()=>setHasAccount1(!hasAccount1)}>Sign In</span></p>
                        </>
                     )}
                 </div>
            </motion.div>
        </div>
    )
}

export default LoginAsResident
