import { useEffect, useState } from "react";

export default function Count() {
  useEffect(() => {
    const target = new Date("12/31/2021 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setParty(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [partyTime, setParty] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <div className="time-wrapper">
        {partyTime ? (
          <div className="text-right inline-block  px-4 py-2 leading-none  text-white  mt-4 lg:mt-0 ">
            Happy New Year!
          </div>
        ) : (
          <div className="timer-inner">
            <div className="timer-segment">
              <span className="time text-black bg-white w-10">{days}</span>
              <span className="label px-1 text-white">Days</span>
            </div>

            <div className="timer-segment">
              <span className="time text-black bg-white w-10">{hours}</span>
              <span className="label px-1 text-white">Hour</span>
            </div>

            <div className="timer-segment">
              <span className="time text-black bg-white w-10  ">{minutes}</span>
              <span className="label px-1 text-white">Min</span>
            </div>

            <div className="timer-segment">
              <div className="time text-black bg-white w-10">{seconds}</div>
              <span className="label text-white ">Sec</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
