import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Workout } from "../App";
import { User } from "../App";

type Props={
  user:User |null
}
export function DetailedWorkout({user}:Props) {
  const [workout, setWorkout] = useState<Workout>({} as Workout);
  const [numberOfTicks, setNumberOfTicks] = useState(60);
  const [sets, setNumberOfSets] = useState(Number);
  const [intId, setIntId] = useState(Number);
  const [timeHandle, setTimeHandle] = useState(Number);

  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3456/workout/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setWorkout(data));
  }, []);
  console.log(workout);

  if (numberOfTicks == -1) {
    setNumberOfTicks(60);
    setNumberOfSets((set) => set - 1);
  }

  useEffect(() => {
    if (numberOfTicks == 0 && sets == 1)
      return () => {
        clearInterval(intId);
        setNumberOfTicks(0);
        setNumberOfSets(0);
      };
  }, [numberOfTicks]);

  const audio = new Audio("./src/audio/beep.mp3");
  const audio2 = new Audio("./src/audio/beep.mp3");

  function restart() {
    setNumberOfTicks(60);
    setNumberOfSets(workout.timeAmount);
  }
  // setNumberOfSets(workout.timeAmount)
  function pause() {
    clearInterval(timeHandle);
  }

  function updateWorkout(){
    audio.play();
    fetch(`http://localhost:3456/workout/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
        whenWasCompleted: Date(),
      }),
    });
  }

  if (numberOfTicks === 4) {
    audio2.play();
  }

  const isRestTime = numberOfTicks < 5;

  return (
    <div className="workout">
      <div
        className={
          numberOfTicks > 10 ? "workOutContainer green" : "workOutContainer red"
        }
      >
        <h1>{numberOfTicks}</h1>
        {isRestTime ? <h1>Rest</h1> : <h1>Work</h1>}
        <div className="workoutDtt">
          <p>{workout.name}</p>
          {numberOfTicks == 0 && sets == 0 ? <p>Finished</p> : ""}
          {`number of sets : ${sets}`}
        </div>
        <div className="btnContainer">
          <button
            className="workoutBtn"
            onClick={() => {
              setNumberOfSets(workout.timeAmount);
              const intID = setInterval(() => {
                setNumberOfTicks((nb) => nb - 1);
                console.log(intID);
              }, 1000);
              if (numberOfTicks === -1 && sets == 1) clearInterval(intId);
              setIntId(intID);
              setTimeHandle(intID);
              updateWorkout();
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
      </div>
    </div>
  );
}
