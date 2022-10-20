import { Link } from "react-router-dom"


export function WorkoutCard(){
    return (
      <div className="workoutsCardsContainer">
        <Link to={"/cardio"}>
          <div className="cardContainer">
            <div className="upperside">
              <img
                className="cardImg"
                src="https://olimpsport.com/media/mageplaza/blog/post/image//w/y/wyprobuj-5-najlepszych-cwiczen-cardio-na-silowni_5.jpg"
                alt=""
              />
            </div>

            <div className="lowerside">
              <h3 className="cardTitle">Cardio & Strength</h3>
              <p>
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                imperdiet nisi.
              </p>
              <button className="seeMoreBtn">See More</button>
            </div>
          </div>
        </Link>

        <Link to={"/weights"}>
          <div className="cardContainer">
            <div className="upperside">
              <img
                className="cardImg"
                src="https://www.verywellfit.com/thmb/Ia3BypWyvtgz_iwju4193BQ-5eA=/2145x1207/smart/filters:no_upscale()/GettyImages-1288737452-4f16b16772e24cffba244e163afdd600.jpg"
                alt=""
              />
            </div>

            <div className="lowerside">
              <h3 className="cardTitle">Weight Lifting</h3>
              <p>
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                imperdiet nisi.
              </p>
              <button className="seeMoreBtn">See More</button>
            </div>
          </div>
        </Link>

        <Link to={"/yoga"}>
          <div className="cardContainer">
            <div className="upperside">
              <img
                className="cardImg"
                src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg?w=1155&h=2268"
                alt=""
              />
            </div>

            <div className="lowerside">
              <h3 className="cardTitle">Yoga</h3>
              <p>
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum
                imperdiet nisi.
              </p>
              <button className="seeMoreBtn">See More</button>
            </div>
          </div>
        </Link>
      </div>
    );
}