import React from 'react'
import mainScreen from '../resourses/mainScreen.jpg'
import afterLogin from '../resourses/afterLogin.jpg'
import afterGuardLogin from '../resourses/afterGuardLogin.jpg'

function HowItWorks() {
    return (
        <div className='howItWorksContainer'>
            <div className='problem'>
                <p style={{fontSize:'30px',letterSpacing:'3px',color:'rgba(39, 39, 39, 0.904)',margin:'10px'}}>Problem:</p>
                <p style={{fontSize:'20px',letterSpacing:'2px',color:'gray',margin:'10px'}}>Whenever there is a visitor there are 2-3 time phone call is done by the guard for authentication, to authenticate that the resident actually called the visitor or not, it is difficult and lengthy task because we have to make call first at main gate entry and then the tower gate entry.</p>
            </div>
            <div className='solution'>
            <p style={{fontSize:'30px',letterSpacing:'3px',color:'rgba(39, 39, 39, 0.904)',margin:'10px'}}>Solution:</p>
            <p style={{fontSize:'20px',letterSpacing:'2px',color:'gray',margin:'10px'}}>To solve this issue I created a app where the resident and guard have a simple UI communication. At first the resident have to Sign Up or Log In through the App. After that the main gate guard also have to Sign Up or Login to the computer at the main gate place. </p>
            <img src={mainScreen} width='100%' height='100%' />
            <p style={{fontSize:'20px',letterSpacing:'2px',color:'gray',margin:'10px'}}>After successfully Log In, by the Guard and the Resident they have the different screens<br/>For the <b>Resident-</b> now he/she will able to make his upcoming appointments and any other delivery details </p>
            <img src={afterLogin} width='100%' height='100%' />
            <p style={{fontSize:'20px',letterSpacing:'2px',color:'gray',margin:'10px'}}>And now the Main gate entry guard can see if there is any resident made any appointment for today or tommorow, if there is an appointment then he will give a short slip to the visitor which he/she further use in Tower gate entry. That slip is the sign that the visitor is now authenticated and now can make a entry in the tower gate as well, because now the main gate guard has signed a slip so he/she can enter the particular Tower which is mentioned by the Resident.</p>
            <img src={afterGuardLogin} width='100%' height='100%' />
            <p style={{fontSize:'20px',letterSpacing:'2px',color:'gray',margin:'10px'}}>If by chance the resident forget about making an appointment data in the app, then he'll receive call only once by the guard like a reminder, then the resident will make the appointment after receiveing call, and because this application support real-time data. After the appointment made by the resident the guard will be able to see the appointment details.</p>

            </div>
        </div>
    )
}

export default HowItWorks
