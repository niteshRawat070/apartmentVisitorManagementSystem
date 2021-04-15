import React from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'

function FirstScreen() {
    const theVariant={
        start1:{
            y:'100vh'
        },
        end1:{
            y:0,
            transition:{
                delay:0.25,
                duration:1.5
            }
        },
        hover1:{
            scale:1.2,
            transition:{
                delay:0.01,
                duration:0.25
            }
        },
        start2:{
            y:'-100vh'
        },
        end2:{
            y:0,
            transition:{
                delay:0.25,
                duration:1.5
            }
        },
        hover2:{
            scale:1.2,
            transition:{
                delay:0.01,
                duration:0.25
            }
        }
    }
const history=useHistory();
    return (
        <div className='firstScreenContainer'>
            <motion.div
            variants={theVariant}
            initial='start1'
            animate='end1'
            whileHover='hover1'
            className='start'>
                <button onClick={()=>history.push('/welcome')} style={{textAlign:'center',color:'#c52d2dd2',fontSize:'3rem',backgroundColor:'transparent'}}>Start The App</button>
            </motion.div>
            <motion.div
            variants={theVariant}
            initial='start2'
            animate='end2'
            whileHover='hover2'
            className='how'>
                <button onClick={()=>history.push('/about')} style={{textAlign:'center',color:'white',fontSize:'3rem',backgroundColor:'transparent'}}>How It Works?</button>
            </motion.div>
        </div>
    )
}

export default FirstScreen
