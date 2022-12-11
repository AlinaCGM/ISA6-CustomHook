import { useEffect, useState } from "react";

const useCustomHookObj = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    };

    getData();
  }, [url]);

  return { data, error, loading };
};
export default useCustomHookObj;
