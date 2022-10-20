import { useEffect, useState } from "react"
type Trainer={
    name:string,
    image:string,
    id:number
}

export function Trainers(){

    let [trainers,setTrainers]= useState<Trainer[]>([])

    useEffect(()=>{
        fetch("http://localhost:3456/trainers")
        .then(res=>res.json())
        .then(data=>setTrainers(data))
    },[])
    return(
        <div className="trainersContainer">
            
            <h2>Pick a trainer</h2>
         <ul className="trainers">
            {
                trainers.map(trainer=>(
                    <li>
                        <h2>{trainer.name}</h2>
                        <img src={trainer.image} alt="" />
                        <button>Book</button>
                    </li>
                ))
            }
         </ul>
        </div>
    )
}