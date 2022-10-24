import React,{useState,useEffect} from 'react'

const Clock = () => {

    const [day,setDay] = useState()
    const [hour,setHour] = useState()
    const [minute,setMinute] = useState()
    const [second,setSecond] = useState()

    let interval;
    const countDown = () =>{
        const countD = new Date('Oct 30,2022').getTime()
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different = countD - now
            const day = Math.floor(different / (1000 * 60 * 60 *24))
            const hour = Math.floor(different % (1000 * 60 * 60 *24)/(1000*60*60))
            const minute = Math.floor(different % (1000 * 60 * 60 )/(1000*60))
            const second = Math.floor(different % (1000 * 60 )/1000)

            if(countD<0) clearInterval(interval.current)
            else{
                setDay(day)
                setHour(hour)
                setMinute(minute)
                setSecond(second)
            }
           
        })
    }
    useEffect(()=>{
        countDown()
    })
  return <div className="clock_wr d-flex align-items-center gap-3">
    <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{day}</h1>
            <h5 className='text-white fs-6'>Day</h5>
        </div>
        <span className='text-white fs-3'>:</span>
    </div>
    <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{hour}</h1>
            <h5 className='text-white fs-6'>Hour</h5>
        </div>
        <span className='text-white fs-3'>:</span>
    </div>
    <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{minute}</h1>
            <h5 className='text-white fs-6'>Minutes</h5>
        </div>
        <span className='text-white fs-3'>:</span>
    </div>
    <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'>
            <h1 className='text-white fs-3 mb-2'>{second}</h1>
            <h5 className='text-white fs-6'>Second</h5>
        </div>
       
    </div>
  </div>
  
}

export default Clock