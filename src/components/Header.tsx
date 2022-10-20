
import { Link } from "react-router-dom";
import { User } from "../App";
type Props={
  user:User | null
  signOut:()=> void
}
export function Header({user,signOut}:Props){
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
          <p>About Us</p>
          <Link to={"/workouts"}>
            <p>Workouts</p>
          </Link>
          <Link to={"/subscription"}>
            <p>Pricing</p>
          </Link>
          <p>Contact</p>
          <button onClick={signOut} className="joinNow">
            {user ? "LOGOUT" : "JOIN NOW"}
          </button>
        </div>
      </nav>
    );
}