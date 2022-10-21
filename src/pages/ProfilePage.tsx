import { useEffect, useState } from "react"
import { User, Workout } from "../App"
type Props = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type Subs = {
  name: string;
  price: number;
  id: number;
  booked: boolean;
};

export function ProfilePage({user,setUser}:Props){
  const [workoutsDone,setWorkoutsDone]= useState<Workout[]>([])
  const [subs,setSubs]= useState<Subs>({}as Subs)

  useEffect(()=>{
    fetch("http://localhost:3456/workoutsDone")
    .then(res=>res.json())
    .then(resp=>setWorkoutsDone(resp))
  },[])
  useEffect(()=>{
    fetch("http://localhost:3456/subscriptionDone")
    .then(res=>res.json())
    .then(resp=>setSubs(resp))
  },[])


    return (
      <div className="profileContainer">
        <div className="profileNameImg">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
          <h2>{user?.name}</h2>
          <h3>{user?.email}</h3>

          <div className="updateInfo">
            <h2>Update your profile</h2>
            <form
              className="upd"
              onSubmit={(e) => {
                e.preventDefault();
                fetch(`http://localhost:3456/usersnew/${user?.id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value,
                  }),
                })
                  .then((res) => res.json())
                  .then((userData) => setUser(userData));
              }}
            >
              <input type="text" name="email" id="1" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="2"
                placeholder="Password"
              />
              <button className="joinNow">Update</button>
            </form>
          </div>
        </div>

        <div className="workoutsDone">
          <div className="subdetail">
            <h3>Your gym subscription : {subs.name}</h3>
          </div>
          {workoutsDone == null ? (
            <p>No workouts done</p>
          ) : (
            <ul>
              <h3>
                <strong>Your workouts</strong>
              </h3>
              {workoutsDone.map((workout) => (
                <li key={workout.id}>
                  <h4>{workout.name}</h4>
                  <p>{workout.timeAmount}</p>
                  <p>{workout.whenWasCompleted}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
}