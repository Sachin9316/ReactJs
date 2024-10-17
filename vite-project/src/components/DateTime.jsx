import { useState } from "react";

const DateTime = () => {
  const  [date, setDate] = useState(new Date());

  setInterval(()=> {
    const date = new Date();
    setDate(date.toLocaleTimeString());
  },1000)

  return (
    <div>
      <p className="text-xl font-semibold text-white">This is the clock that shows the time in bharat at all times</p>
      <p className="text-xl font-semibold text-white">This is the current time: <span className="text-3xl font-semibold text-green-500">{date}</span> </p>
    </div>
  )
}

export default DateTime