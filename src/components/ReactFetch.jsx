import { useEffect, useState } from "react";

export default function ReactFetch() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();
      setNews(response);
      setLoading(false);
    }
    fetchData();
    // const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => console.log(response));
  }, []);
  return (
    <>
      <h1>React Fetching Data</h1>
      <ul>
        {loading ? (
          <p>Loading Data...</p>
        ) : (
          news.map((item) => <li key={item.id}>{item.title}</li>)
        )}
      </ul>
    </>
  );
}
