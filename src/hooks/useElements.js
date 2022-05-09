import { useState, useEffect } from "react";
import calculatePositions from "../utils/calculatePositions";
import getPoints from "../utils/getPoints";

export default function useElements({ start, timestepInSeconds, totalSeconds }) {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [limit, setLimit] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      let rawData = await getPoints(10000);
      for (const element of rawData) {
        const [id, name, tl1, tl2, description] = element
        const res = await calculatePositions({ tl1, tl2, start, timestepInSeconds, totalSeconds })
        // console.log(res)
        const newData = {
          id,
          name,
          description,
          position: res
        }

        setPositions(data => data.concat(newData))
        setIsLoading(false);
      }

    })();
    // let newData = await rawData.map(([id, name, tl1, tl2, description]) => {
    //   const res = calculatePositions({ tl1, tl2, ...props });
    //   return {
    //     id,
    //     description,
    //     name,
    //     position: res,
    //   };
    // });
  }, [start, timestepInSeconds, totalSeconds]);

  return { positions, isLoading }
}