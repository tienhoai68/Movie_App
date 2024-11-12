import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization:
    "Bearer " +
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWIzOTE3OWE5YTkzODU4NWY3MTJmYTNlZTAwZDkxNiIsIm5iZiI6MTczMTAzNTE4Ny4wNDIzOTY4LCJzdWIiOiI2NzJkN2YwZjI2YjYwNWJjMTllNWUyMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iG5_xTSwVEi41DLZF_w__azbq6g-mmAmdNJhp_7bzWc",
};
export default function useFetch({ url = "", method = "GET", headers = {} }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
      method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, method, JSON.stringify(headers)]);

  return { isLoading, data };
}
