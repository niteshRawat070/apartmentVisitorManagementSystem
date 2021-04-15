import React,{useState} from 'react'
import logo from '../resourses/logo.svg'
import {motion} from 'framer-motion'
import fire from '../fire'
import 'bootstrap/dist/css/bootstrap.min.css'

function GuardHomePage() {
    let arr2=[];
    for(let i=0;i<=720;i++){
        arr2.push(i+10)
    }
    const logoVariant={
        start:{
            scale:0.2
        },
        end:{
            rotateY:arr2,
            transition:{
                delay:0.10,
                duration:3,
                type:'keyframes'
            },
        }

    }
    const [datas,setDatas]=useState(null)
    const [image,setImage]=useState(true);
    setTimeout(() => {
        setImage(!image)
    }, 3000);
    const db=fire.firestore();
    const auth=fire.auth();
    db.collection('appointments')
        .get()
        .then(snapshot=>{
            const datas=[]
            snapshot.forEach(doc=>{
                const data=doc.data()
                datas.push(data)
            })
            setDatas(datas)
            // console.log(snapshot)
        })
        .catch(error=>console.log(error))
    
    return (
        <>
        <motion.div
        variants={logoVariant}
        initial='start'
        animate='end'
        style={{position:'absolute',display:'flex',width:'100%',height:'100vh',alignItems:'center',justifyContent:'center',overflowX:'hidden'}}>
            {image?(
            <img src={logo} height='500px' width='500px' />

            ):null}
        </motion.div>
        <motion.div
        style={{display:'flex',height:'100%',width:'100%',alignItems:'flex-start',justifyContent:'center',flexDirection:'column'}}
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1
        }}
        transition={{
            delay:3,
            duration:1
        }}
        >
                <div className='startingText'>
                    <p style={{textAlign:'center',fontSize:'1.5rem',color:'white',letterSpacing: '3px',
  fontWeight: 200}}>Appointments and Delivery Data</p>
                </div>
                <div className='details'>
                    
                    <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Tower</th>
        <th>Message</th>
        <th>Entry-Time From</th>
        <th>Entry-Time To</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    {
                        datas&&
                        datas.map((data,id)=>{
                            return(
                                <tr key={id}>
                                    <td>{data.name}</td>
                                    <td>{data.tower}</td>
                                    <td>{data.appointment}</td>
                                    <td>{data.time}</td>
                                    <td>{data.time1}</td>
                                    <td>{data.startDate}</td>
                                    <td><button onClick={()=>
                                    db.collection('appointments').doc().delete()
                                
                                }>Delete</button></td>
                                {console.log(data)}
                                    {/* <p>{data.name}</p>
                                    <p>{data.tower}</p>
                                    <p>{data.appointment}</p>
                                    <p>{data.time}</p>
                                    <p>{data.time1}</p>
                                    <p>{data.startDate}</p> */}

                                    </tr>
                            )
                        })
                    }
    </tbody>
  </table>
                </div>
        </motion.div>
        </>
    )
}

export default GuardHomePage
