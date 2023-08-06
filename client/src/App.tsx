import { useCallback, useEffect, useState } from "react";
import PullToRefresh from "react-pull-to-refresh";

import "./App.css";
import { fetchDataFromServer, bookData } from "./api/api";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState<bookData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function refresh() {
    setBooks([]);
    fetchData();
  }

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseData = await fetchDataFromServer(books.length);
      setBooks((prevData) => [...prevData, ...responseData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  }, [books.length]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (scrollPercentage >= 80 && books.length < 18) {
      fetchData();
    }
  }, [fetchData, books.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="App">
      <PullToRefresh onRefresh={refresh}>
        <header className="header">Book Store</header>
        <div className="bookGrid">
          {books.map((book: bookData) => (
            <BookCard key={book.id} book={book} />
          ))}
          {isLoading && <div>Loading more results...</div>}
        </div>
      </PullToRefresh>
    </div>
  );
}

export default App;
