import { useState, useEffect } from "react";
import axios from "axios";
import {load} from "cheerio";
import getHash from "../utils/getHash";

export interface Article {
    title: Array<string>;
    content: string;
    id: number;
}

const useEconomistArticles = (): [Article[], boolean, string] => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const url = "https://www.economist.com/the-world-in-brief";
    useEffect(() => {
        const getArticles = async () => {
            try {
                const { data } = await axios.get(url);
                const $ = load(data);
                const news: Article[] = [];
                $("p").each((i, el) => {
                    const content = $(el).text();
                    const title = $(el).find("strong").map((i, el) => $(el).text()).get();
                    news.push({
                        title: title,
                        content: content,
                        id: getHash(content)
                    });
                });
                
                // Check if the news is defined
                if (news.length === 0) {
                    setError("The data was nit fetched correctly");
                    setIsLoading(false);
                    return [articles, isLoading, error];
                } else {
                    setArticles(news);
                    setIsLoading(false);
                }   
            } catch (error) {
                setError("The data was not fetched correctly");
                setIsLoading(false);
            }
        };
        getArticles();
    }, []);

    return [articles, isLoading, error];
}

export default useEconomistArticles;