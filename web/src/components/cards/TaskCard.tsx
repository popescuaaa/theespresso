import React from "react";
import CardTop from "../../assets/card-images/card-top.jpeg";

interface TaskCardProps {
  title: string;
  description?: string;
  tags?: Array<string>;
}

const TaskCard = (props: TaskCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={CardTop} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.tags &&
          props.tags.map((tag) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TaskCard;
