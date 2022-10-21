import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
type Subs = {
  name:string,
  price:number,
  id:number,
  booked:boolean
}

export function Subscription(){
  const [subscriptions, setSubscriptions] = useState<Subs[]>([] as Subs[]);

  useEffect(() => {
    fetch("http://localhost:3456/subscriptions")
      .then((res) => res.json())
      .then((resp) => setSubscriptions(resp));
  }, []);
  const params = useParams()
  console.log(params)

  
    return (
      <div className="subscriptionContainer">
        <h2>Choose your gym subscription</h2>
        <div className="subCardContainer">
          {subscriptions.map((sub) => (
            <div className=" subcard card1">
              <h3>{sub.name}</h3>
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
              <p>Price : ${sub.price}</p>
              <Link to={`/subscription/${sub.id}`}>
                <button className="joinNow">Subscribe</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}