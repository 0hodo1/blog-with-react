import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState(null);

  const postData = (data) => {
    setOptions({
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
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

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST") {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, error, loading, postData };
};
