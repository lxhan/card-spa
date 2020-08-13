import { useEffect, useState } from "react";

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(endpoint).then(async (res) => {
      if (res.status !== 200) {
        console.log("HTTP error");
      }
      setData(await res.json());
    });
  }, [setData, endpoint]);

  return data;
};
