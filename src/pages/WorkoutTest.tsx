import { useEffect, useState } from "react";

export function WorkoutTest() {
  const [numberOfTicks, setNumberOfTicks] = useState(10);
  const [sets, setNumberOfSets] = useState(2);
  const [intId, setIntId] = useState(Number);

  if (numberOfTicks == -1) {
    setNumberOfTicks(10);
    setNumberOfSets((set) => set - 1);
  }

  useEffect(() => {
    if (numberOfTicks == 0 && sets == 1)
      return () => {
        clearInterval(intId);
        setNumberOfTicks(0);
        setNumberOfSets(0);
      };
  }, [numberOfTicks]);

  const isRestTime = numberOfTicks < 5;

  return (
    <>
      {isRestTime ? (
        <h1>Time to rest! {numberOfTicks}</h1>
      ) : (
        <h1>Time to work mofo! {numberOfTicks}</h1>
      )}
      {numberOfTicks == 0 && sets == 0 ? <p>Finished</p> : ""}
      {`number of sets ${sets}`}
      <button
        onClick={() => {
          const intID = setInterval(() => {
            setNumberOfTicks((nb) => nb - 1);
            console.log(intID);
          }, 1000);
          if (numberOfTicks === -1 && sets == 1) clearInterval(intId);
          setIntId(intID);
        }}
      >
        Start
      </button>
    </>
  );
}
