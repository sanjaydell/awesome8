import React, { useEffect, useState } from "react";

import "./App.css";
import { fetchDataFromServer, bookData } from "./api/api";
import Card from "./Card";
import BookCard from "./BookCard";

function App() {
  const [books, setBooks] = useState<bookData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchDataFromServer();
        setBooks(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="header">Book Store</header>
      <div className="bookGrid">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}

export default App;
