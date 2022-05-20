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
      if (window.Worker) {
        const myWorker = new Worker("worker.js");
        myWorker.postMessage(props);
        myWorker.onmessage = (e) => {
          setPositions(data => data.concat(e.data))
        }

      } else {
        console.log('Your browser doesn\'t support web workers.');
      }
      setIsLoading(false);


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
  }, [props]);

  return { positions, isLoading }
}