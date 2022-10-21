import { useEffect, useState } from "react";

export function Workout() {
  const [time, setTime] = useState(Number);
  const [timeHandle, setTimeHandle] = useState(Number);

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  useEffect(() => {
    return () => clearInterval(timeHandle);
  }, [timeHandle]);

  var audio = new Audio("./src/audio/beep.mp3");
  var audio2 = new Audio("./src/audio/3beep.mp3");

  function restart() {
    setTime(15);
  }

  function pause() {
    clearInterval(timeHandle);
  }

  if (time === 3) {
    audio2.play();
  }

  return (
    <div className="workout">
      <div
        className={
          time > 10 ? "workOutContainer green" : "workOutContainer red"
        }
      >
        <h1>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>

        {time > 0 ? <h2>Work</h2> : <h2>Rest</h2>}
        <div className="btnContainer">
          <button
            className="workoutBtn"
            onClick={() => {
              const newTimeHandle = setInterval(() => {
                setTime((time) => {
                  if (time > 0) return time - 1;
                  return time;
                });
              }, 1000);
              setTimeHandle(newTimeHandle);
              audio.play();
            }}
          >
            Start
          </button>
          <button className="workoutBtn" onClick={restart}>
            Restart
          </button>
          <button className="workoutBtn" onClick={pause}>
            Pause
          </button>
        </div>
        <form onSubmit={e=>{
          e.preventDefault()
          setTime(e.target.numberOfMinutes.value*60);
        }}
           className="input">
          <input className="numberOfMinutes" type="number" name="numberOfMinutes" />
          <button className="joinNow" placeholder="Workout time">Set Time</button>
        </form>
      </div>
    </div>
  );
}
