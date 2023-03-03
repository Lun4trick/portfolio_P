import React from 'react';
import cn from 'classnames'
import projectCards from './projectCards';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => (
  <div className={cn(
    'p-10 flex justify-center items-center gap-10 tablet:items-start w-full max-w-5xl mx-auto h-fit min-h-fit h-fit flex-grow mobile:flex-col tablet:flex-row tablet:flex-wrap'
  )}>
    {projectCards.map(card => (
      <ProjectCard card={card}/>
    ))}
  </div>
)

export default Projects;