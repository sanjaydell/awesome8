import { useCallback, useEffect } from "react";
import PullToRefresh from "react-pull-to-refresh";
import { useRecoilState } from "recoil";
import 'tailwindcss/tailwind.css';

// import "./App.css";
import { fetchDataFromServer, bookData } from "./api/api";
import BookCard from "./components/BookCard";
import { booksState, isLoadingState } from "./atom";

function App() {
  const [books, setBooks] = useRecoilState<bookData[]>(booksState);
  const [isLoading, setIsLoading] = useRecoilState<boolean>(isLoadingState);

  async function refresh() {
    setBooks([]);
    fetchData();
  }

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseData = await fetchDataFromServer(books.length);
      setBooks((prevData: bookData[]) => [...prevData, ...responseData]);
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
    <div className="flex bg-white flex-col text-center max-w-[700px] mx-auto min-w-[350px]">
      <PullToRefresh onRefresh={refresh}>
        <header className="w-full h-[48px] bg-white font-semibold flex items-center justify-center">Book Store</header>
        <div className="grid grid-cols-2 w-full">
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
