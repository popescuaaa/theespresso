import { getHash } from "@/app/utils/getHash";

export interface CardProps {
  title: string;
  content: string;
  tags: Array<string>;
}

const Card = (props: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl border-1 border-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-200 text-base">{props.content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.tags.map((tag: string) => (
          <span
            key={getHash(tag)}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
