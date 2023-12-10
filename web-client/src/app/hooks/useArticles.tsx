import { useEffect, useState } from "react";
import axios from "axios";
import { load } from "cheerio";

export interface Article {
  title: string;
  content: string;
  tags: Array<string>;
}

const useArticles = (): [
  Article[] | null,
  boolean,
  string | null,
  string | null,
  string | null,
] => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [motto, setMotto] = useState<string | null>(null);
  const [credits, setCredits] = useState<string | null>(null);

  const url = "http://172.18.0.3:8080/api/articles";

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await axios.post(url);
        const { articles, motto, credits } = data;

        setArticles(articles);
        setError(null);
        setIsLoading(false);
        setMotto(motto);
        setCredits(credits);
      } catch (error) {
        setError("The data was nit fetched correctly");
        setIsLoading(false);
        setArticles(null);
        setMotto(null);
        setCredits(null);
      }
    };

    getArticles();
  }, []);

  return [articles, isLoading, error, motto, credits];
};

export default useArticles;
