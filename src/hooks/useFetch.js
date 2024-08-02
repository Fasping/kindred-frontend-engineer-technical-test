import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=c2da535b";

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_ENDPOINT}${params}`);
        const result = await response.json();

        if (result.Response === "True") {
          setData(result.Search || result);
        } else {
          setError(result.Error || "An unknown error occurred");
        }
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [params]);

  return { isLoading, error, data };
};
