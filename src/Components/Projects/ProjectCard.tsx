import React from 'react';
// @ts-ignore
import { Card } from '../types/Card';

type Props = {
  card: Card
}

const ProjectCard: React.FC<Props> = ({ card }) => {
  const {title, type, description, url} = card;

  return (
    <a href={url} className="bg-white shadow-lg flex flex-col max-h-96 h-96 hover:scale-125 transition-all laptop:w-1/5 tablet:w-1/3 mobile:w-full justify-center text-center text-lg text-slate-400"
    >
      <div className='flex tablet:h-1/3 h-1/2 justify-center items-center bg-slate-700'>
        {type}
      </div>
      <div className="h-2/3 p-4 bg-slate-300 flex flex-col items-center text-center">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 h-full w-full items-center tablet:text-sm mobile:text-xs">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;