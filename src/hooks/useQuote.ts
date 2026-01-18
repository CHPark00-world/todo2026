import { useEffect, useState } from "react";

interface Quote {
  message: string;
  author: string;
}

export const useQuote = () => {
  const [quote, setQuote] = useState<Quote>({
    message: "티끌 모아 태산!",
    author: "한국 속담",
  });
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    fetch("https://korean-advice-open-api.vercel.app/api/advice")
      .then((res) => res.json())
      .then((data) => {
        setQuote({
          message: data.message,
          author: data.author,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("명언 로딩 실패:", error);
        setQuote({
          message: "티끌 모아 태산!",
          author: "한국 속담",
        });
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return { quote, loading, refetch: fetchQuote };
};
