import { Link } from "react-router-dom"
import {  Workout } from "../App"

type Props={
   workouts: Workout[] 
}
export function Workouts({workouts}:Props){

    return (
    <div className="workoutsWholeContainer">
        <h2>A list of premade workouts</h2>
        <ul className="workoutsContainer">
          {workouts.map((workout) => (
            <Link to={`/workouts/${workout.id}`}><li>
              <h4>{workout.name}</h4>
              <h5>{workout.timeAmount} minutes</h5>
              <button className="trainBtn">Train</button>
            </li>
            </Link>
          ))}
        </ul>
    </div>
    );
}