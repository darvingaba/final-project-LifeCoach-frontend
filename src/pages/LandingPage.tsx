import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Blog } from "../components/Blog";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { WorkoutCard } from "../components/WorkoutCard";

export function LandingPage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3456/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  const titleRef = useRef();

  function handleBackClick() {
    if (titleRef.current)
      titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="landingPageContainer">
        <div className="intro">
          <div className="introLeft">
            <div className="introLeftTitle">
              <h3 className="h3">THE COACH OF YOUR LIFE</h3>
              <h1 className="h1">THE RIGHT DIRECTION FOR YOUR HEALTH</h1>
              <button onClick={handleBackClick} className="joinNow getStarted">
                GET STARTED
              </button>
            </div>
          </div>

          <div className="introRight">
            <img src="src/images/muscle.png" alt="" />
            {/* <div className="circle1"></div> */}
          </div>
        </div>
        <div ref={titleRef} className="about">
          <div className="aboutLeft">
            <img
              className="imageWorkout"
              src="./src/images/girlWorkout.png"
              alt=""
            />
            <img className="fitness" src="./src/images/fitness.png" alt="" />
          </div>
          <div className="aboutRight">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">Welcome To LifeCoach</h2>
            <p className="section-text">
              LifeCoach is the ultimate gym website without the frills. We
              provide cutting-edge fitness technology that's backed by science
              and research. What you need is what we offer, so sign up today to
              get started on your fitness journey!
            </p>
            <Link to={"/subscription"}>
              <button className="btn joinNow">Explore More</button>
            </Link>
          </div>
        </div>

        <div className="workoutsCards">
          <p className="section-subtitle">Workouts</p>
          <h2 className="pAccTag">Our Detailed Workouts</h2>
          <WorkoutCard />
        </div>

        <div className="blog">
          <Blog />
        </div>
        <Footer />
      </div>
    </>
  );
}
