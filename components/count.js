import React, { useEffect, useState } from "react";


function components() {
const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
useEffect (() =>{
    const target = new Date("12/31/2021 23:59:59")
    const interval =setInterval(()=>{
    const now = new Date()
    const difference = target.getTime() - now.getTime();
    const d = Math.floor(difference/ (1000 * 60 * 60 *24));
    setDays(d);
    
    const h = Math.floor(
      (difference % (1000 * 60 * 60 *24 )) / (1000 *60 *60 )
    );
    setHours(h);
    const m =Math.floor(
      (difference % (1000 * 60 * 60 )) / (1000 *60  ));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60  )) / (1000  ));
      setSeconds(s);
    
    },1000);
    return () => clearInterval(interval);
    }, []);
    return (
        <div>
                <div className="time-wrapper">
      <div className="timer-inner">
        <div className="timer-segment">
          <span className="time">{days}</span>
          <span className="label">Days</span>
        </div>
        <div className="timer-segment">
          <span className="time">{hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="timer-segment">
          <span className="time">{minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="timer-segment">
          <span className="time">{seconds}</span>
          <span className="label">Seconds</span>
        </div>

        </div></div>
        </div>
    )
}

export default components;
