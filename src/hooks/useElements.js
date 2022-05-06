import { useState, useEffect } from "react";
import calculatePositions from "../utils/calculatePositions";
import getPoints from "../utils/getPoints";

export default function useElements(props) {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [limit, setLimit] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      let rawData = await getPoints();

      rawData.forEach(([id, name, tl1, tl2, description]) => {
        const res = calculatePositions({tl1, tl2, ...props});
        const newPoint = {
          id,
          description,
          name,
          position: res
        }
        setPositions(data => data.concat(newPoint));

      })
      // let newData = await rawData.map(([id, name, tl1, tl2, description]) => {
      //   const res = calculatePositions({ tl1, tl2, ...props });
      //   return {
      //     id,
      //     description,
      //     name,
      //     position: res,
      //   };
      // });
      setIsLoading(false);
    })();
  }, [props]);

  return { positions, isLoading };
}
