import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 1;
  });

  const [article, setArticle] = useState("");

  function nextPage() {
    setCount(count + 1);
  }
  function prevPage() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  }

  useEffect(() => {
    localStorage.setItem("count", count);

    fetch("https://dummyjson.com/posts/" + count)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <Button onClick={prevPage} label="Prev Page" />
        <Button onClick={nextPage} label="Next Page" />
      </div>
      <article>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </article>
    </>
  );
}

export default App;
