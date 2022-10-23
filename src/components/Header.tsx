
import { Link, useNavigate } from "react-router-dom";
import { User } from "../App";
type Props={
  user:User | null
  signOut:()=> void
}
export function Header({user,signOut}:Props){
  const navigate = useNavigate()
    return (
      <nav className={window.scrollY > 100 ? "nav active" : "nav"}>
        <div className="header__title">
          <span className="material-symbols-outlined">fitness_center</span>
          <p className="header__title__text">LifeCoach</p>
        </div>
        <div className="header__links">
          <Link to={"/home"}>
            <p>Home</p>
          </Link>
          <Link to={"/workouts"}>
            <p>Workouts</p>
          </Link>
          <Link to={"/subscription"}>
            <p>Pricing</p>
          </Link>
          <Link to={"/profile"}>
            <p>Profile</p>
          </Link>
          <button onClick={()=>navigate("/signin")} className="joinNow">
            JOIN NOW
          </button>
        </div>
      </nav>
    );
}