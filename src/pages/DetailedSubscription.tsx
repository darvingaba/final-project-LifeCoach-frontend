import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

type Subs = {
  name: string;
  price: number;
  id: number;
  booked: boolean;
};
export function DetailedSubscription(){
    const  [detailSub,setDetailSub]=useState<Subs>({}as Subs)
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:3456/subscriptions/${params.id}`)
          .then((resp) => resp.json())
          .then((data) => setDetailSub(data));
    },[])

    function updateSub() {
      fetch(`http://localhost:3456/subscriptions/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booked:true
        }),
      });
    }

    return(
    <div className="subscriptionContainer">
        <h2>Confirm your gym subscription</h2>
        <div className="subCardContainer">
          
            <div className=" subcard card1">
              <h3>{detailSub.name}</h3>
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
              <p>Price : ${detailSub.price}</p>
              <button
               onClick={()=>{
                updateSub()
               }}
              className="joinNow">Subscribe</button>
              {detailSub.booked?<p className="green">Subscription sucsessfull</p>:""}
            </div>
         </div>
    </div>
    )
}