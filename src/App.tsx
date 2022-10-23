import { useEffect, useState } from "react";
import "./App.css";
import "./components/Cardio.css";
import "./pages/Subscription.css";
import "./pages/Profile.css";
import "./pages/Workouts.css";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { Workout } from "./pages/Workout";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Cardio } from "./components/Cardio";
import { Weights } from "./components/Weights";
import { Yoga } from "./components/Yoga";
import { ProfilePage } from "./pages/ProfilePage";
import { Subscription } from "./pages/Subscription";
import { WorkoutTest } from "./pages/WorkoutTest";
import { Workouts } from "./pages/Workouts";
import { DetailedWorkout } from "./pages/DetailedWorkout";
import { DetailedSubscription } from "./pages/DetailedSubscription";

export type Workout ={
  id:number,
  name:string,
  timeAmount:number,
  completed:boolean,
  whenWasCompleted:string,
  type:string
 
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  workouId: number;
  workouts:Workout[];
};
function App() {
  const [user, setUser] = useState<null | User>(null);
  const [workouts, setWorkouts] = useState<Workout[]>([] as Workout[]);
  // console.log("this is app", user);

  useEffect(()=>{
    fetch("http://localhost:3456/workouts")
      .then((resp) => resp.json())
      .then((resp) => setWorkouts(resp));
  },[])

  let navigate = useNavigate();
  function signIn(data: any) {
    setUser(data.user);
    localStorage.token = data.token;
    navigate("/home");
  }

  function signOut() {
    setUser(null);
    navigate("/signin");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:3456/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((info) => {
          if (info.error) {
            alert(info.error);
          } else {
            setUser(info.user);
            localStorage.token = info.token;
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Header user={user} signOut={signOut} />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={"/home"} element={<LandingPage />} />
        <Route path={"/workout"} element={<Workout />} />
        <Route
          path={"/signup"}
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route
          path={"/signin"}
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route path={"/cardio"} element={<Cardio />} />
        <Route path={"/weights"} element={<Weights />} />
        <Route path={"/yoga"} element={<Yoga />} />
        <Route path={"/profile"} element={<ProfilePage user={user} setUser={setUser} signOut={signOut}/>} />
        <Route path={"/subscription"} element={<Subscription />} />
        <Route path={"/workoutTest"} element={<WorkoutTest />} />
        <Route path={"/workouts"} element={<Workouts workouts={workouts}/>} />
        <Route path={"/workouts/:id"} element={<DetailedWorkout user={user}/>} />
        <Route path={"/subscription/:id"} element={<DetailedSubscription />} />
      </Routes>
    </div>
  );
}

export default App;
