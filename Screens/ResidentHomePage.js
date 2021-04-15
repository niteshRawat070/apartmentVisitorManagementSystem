import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fire from '../fire'
import {motion} from 'framer-motion'
// import db from 'firebase'

function ResidentHomePage() {
    const buttonVariants={
        hover:{
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:" 0px 0px 8px rgba(219, 68, 68, 0.904)" ,
          transition:{
            duration:0.5,
            yoyo:Infinity
          }      
        }
      }
      const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { 
          y: "200px", 
          opacity: 1,
          transition: { delay: 0.5 }
        },
      }
    const [name,setName]=useState('');
    const [tower,setTower]=useState('');
    const [appointment,setAppointment]=useState('')
    const [time,setTime]=useState('')
    const [time1,setTime1]=useState('')
    const [startDate, setStartDate] = useState('');
    const [dropDown,setDropDown]=useState(false)
    // const [amPm,setAmPm]=useState('')
    const handleSubmit=(e)=>{
        if(name.length>1&&tower.length>0&&appointment.length>1&&time.length>1&&time1.length>1&&startDate.length>=10){
            e.preventDefault();
            const db=fire.firestore();
            // db.settings({
            //     timeStampsInSnapshots:true
            // })
            const appointmentsRef=db.collection('appointments').add({
                name:name,
                tower:tower,
                appointment:appointment,
                time:time,
                time1:time1,
                startDate:startDate
            })
        console.log(name,tower,appointment,time,time1,startDate.toString())
        setName('');
        setTower('');
        setAppointment('');
        setTime('');
        setTime1('');
        setStartDate('');
        setDropDown(!dropDown)
    }else{
        alert("Please fill all the details correctly")
    }
    }
    return (
        <div className='residentMainContainer'>
            <div className='residentDetails'>
                <p style={{textAlign:'center',fontSize:'1.5rem',color:'white',letterSpacing: '3px',
  fontWeight: 200}}>Welcome, Create your upcoming Appointment or any upcoming Delivery Details</p>
            </div>
            <div className='userInputs'>
                <label>Name</label>
                <input
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <label>Tower Name</label>
                <input
                type='text'
                placeholder='e.g. T/D/A'
                value={tower}
                onChange={(e)=>setTower(e.target.value)}
                maxLength='1'
                autoCapitalize='characters'
                 />
                <label>Message About Appointment</label>
                <input 
                type='text'
                placeholder='Any important message'
                value={appointment}
                onChange={(e)=>setAppointment(e.target.value)}
                />
                <label>Time-Start</label>
                <input
                placeholder='Use AM/PM e.g. 9AM'
                type='text'
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                />
                <label>Time-End</label>
                <input
                placeholder='Use AM/PM e.g. 1PM'
                type='text'
                value={time1}
                onChange={(e)=>setTime1(e.target.value)}
                />
                <label>Date</label>
                <input
                placeholder='DD/MM/YYYY'
                type='text'
                value={startDate}
                onChange={(e)=>setStartDate(e.target.value)}
                />
                {/* <label>Set AM/PM</label>
                <input
                type='text'
                value={amPm}
                onChange={(e)=>setAmPm(e.target.value)}
                /> */}
                <motion.button
                variants={buttonVariants}
                whileHover='hover'
                style={{width:'60%',marginBottom:'40px',borderRadius:'20px'}} onClick={handleSubmit}>Submit Appointment</motion.button>
            </div>
            {dropDown?(
                <motion.div
                variants={modal}
                initial='hidden'
                animate='visible'
                className='dropDown'>
                <div className='dropDownText'>
                <p>Your appointment/delivery details is succesfully created 😊 </p>
                <button onClick={()=>setDropDown(!dropDown)}>OK</button>
                </div>
            </motion.div>
            ):null}
            
        </div>
    )
}

export default ResidentHomePage
