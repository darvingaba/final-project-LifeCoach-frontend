import { Link } from "react-router-dom";

export function Cardio(){
    return (
      <div className="cardioContainer">
        <div className="cardioTitle">
          <h1>Cardio Workout Program for Weight Loss</h1>
        </div>
        <div className="cardioContext">
          <img src="./src/images/girlRunning.webp" alt="" />
          <p>
            Setting up an effective cardio program for weight loss can be
            confusing. The guidelines of the American College of Sports Medicine
            (ACSM) suggest moderate-intensity exercise for 30 minutes of five
            days a week or 20 minutes of vigorous cardio exercise three days a
            week to reap the health benefits.1 In order to lose weight, the ACSM
            recommends working up to 60 to 90 minutes of activity several days a
            week. What the guidelines don't explain in detail is how to set up a
            routine that incorporates a variety of workout intensities,
            activities, and durations. If you only do slow workouts, you not
            only risk boredom, you may experience slower weight loss. Working
            harder forces your body to adapt by building more stamina while also
            burning more calories. But too many high-intensity workouts can lead
            to burnout, overtraining, or even injuries. The key to a
            well-rounded cardio program is to include all levels of intensity
            each week so that your workouts don't get stale and your body isn't
            always doing the same thing all the time.
          </p>

          <Link className="joinNow" to={"/workout"}>Train Now</Link>
          <h2 className="strong">
            <strong>Here is a weekly workout plan:</strong>
          </h2>

          <img src="./src/images/workoutplan.PNG" alt="" />
        </div>
      </div>
    );
}