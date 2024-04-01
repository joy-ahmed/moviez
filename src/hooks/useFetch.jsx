import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/apiCall";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending("pending...");
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
