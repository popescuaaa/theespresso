"use client"; // Because of the 'useEffect' in the custom hook

import Card from "./components/card";
import useArticles, { Article } from "@/app/hooks/useArticles";
import { getHash } from "@/app/utils/getHash";

const Home = () => {
  const [articles, isLoading, error, motto, credits] = useArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-r from-blue-600 to-gray-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex mb-10">
        <p className="text-lg">The Espresso</p>
        {motto && <p className="text-lg">{motto}</p>}
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-center lg:flex mb-10">
        {isLoading && (
          <svg
            className="animate-spin w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        )}
      </div>

      {articles && (
        <div className="grid grid-cols-3 gap-6">
          {articles.map((item: Article) => (
            <Card key={getHash(item.title)} {...item} />
          ))}
        </div>
      )}

      <div className="z-10 max-w-5xl w-full items-center justify-center lg:flex mb-10 mt-10">
        {credits && <p className="text-lg text-white">{credits}</p>}
      </div>
    </main>
  );
};

export default Home;
