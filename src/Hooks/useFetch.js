import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setLoading(false);
        setData(data);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Veri çekme iptal edildi");
        } else {
          setLoading(false);
          setError("Veri çekme başarısız");
        }
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
