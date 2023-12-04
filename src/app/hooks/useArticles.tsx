import { useState, useEffect } from "react";
import axios from "axios";
import { load } from "cheerio";


const url = "https://www.economist.com/the-world-in-brief";


export interface Article {
    title: String,
    content: String,
    tags: Array<String>
}

const useArticles = (): [Array<Article>, boolean, String | null] => {
    const [articles, setArticles] = useState<Array<Article>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get(url, { headers: { 'crossdomain': "true" } });
                const $ = load(response.data);
                const news: Array<Article> = [];
                $("p").each((i, el) => {
                    const content = $(el).text();
                    const tags = $(el).find("strong").map((i, el) => $(el).text()).get();
                    news.push({
                        tags: tags,
                        content: content,
                        title: tags.join(" ")
                    });
                });

                setArticles(news);
                setIsLoading(false);
            } catch (error) {
                setError("The data was nit fetched correctly");
                setIsLoading(false);
            }
        };
        getArticles();
    }, []);
    return [articles, isLoading, error];
}

export default useArticles;