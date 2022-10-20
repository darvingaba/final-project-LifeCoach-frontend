import { Link } from "react-router-dom";


export function Subscription(){
    return (
      <div className="subscriptionContainer">
        <h2>Choose your gym subscription</h2>
        <div className="subCardContainer">
          <div className=" subcard card1">
            <h3>3 days/week</h3>
            <div className="detailsSub">
              <p>
                Included:
                <br />
                <p>Pool</p>
                <p>Jacuzzi</p>
                <p>Shower</p>
                <p>Yoga</p>
              </p>
            </div>
            <p>Price : $30</p>
            <button className="joinNow">Subscribe</button>
          </div>

          <div className="subcard card2">
            <h3>4 days/week</h3>
            <div className="detailsSub">
              <p>
                Included:
                <br />
                <p>Pool</p>
                <p>Jacuzzi</p>
                <p>Shower</p>
                <p>Yoga</p>
              </p>
            </div>
            <p>Price : $30</p>
            <button className="joinNow">Subscribe</button>
          </div>

          <div className="subcard card3">
            <h3>6 days/week</h3>
            <div className="detailsSub">
              <p>
                Included:
                <br />
                <p>Pool</p>
                <p>Jacuzzi</p>
                <p>Shower</p>
                <p>Yoga</p>
              </p>
            </div>
            <p>Price : $30</p>
            <button className="joinNow">Subscribe</button>
          </div>
        </div>
        <p>Or</p>
        <Link to={"/trainers"}>Pick a trainer</Link>
      </div>
    );
}