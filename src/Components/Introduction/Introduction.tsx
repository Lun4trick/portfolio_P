import React from 'react';
import ContactPlatforms from '../ContactPlatforms/ContactPlatforms';

const Introduction: React.FC = () => (
  <>
    <div className="text-center p-10 py-10">
      <h2 className="laptop:text-5xl tablet:text-3xl py-2 text-gray-200">Levente Krotos</h2>
      <h3 className="laptop:text-2xl tablet:text-xl py-2 text-gray-200">Front-end developer</h3>
      <p className="laptop:text-lg py-5 tablet:text-sm mobile:text-xs leading-8 text-gray-200 max-w-2xl mx-auto">
        I&apos;m currently looking for a job as a front-end developer. 
        I&apos;ve created this website to keep my front-end skills sharp while I search for a job, 
        as well as to learn new things that I can bring to your company.
        Please feel free to contact me on any platform, 
        and be sure to check out my poker application on the &apos;Projects&apos; page.
      </p>
      <ContactPlatforms />
    </div>
    <div className="mx-auto flex justify-center gap-10 mobile:flex-col tablet:flex-row">
      <img 
        className="rounded-full max-w-lg tablet:w-2/5 laptop:h-full tablet:h-3/5 mobile:h-full mobile:w-1/2 mobile:mx-auto tablet:mx-0" 
        src='./utils/imgs/me.jpg' 
        alt="It should be me..." 
      />
      <p className="laptop:text-2xl tablet:text-xl mobile:text-sm  text-slate-300 font-mono max-w-lg flex items-center shadow-lg p-10">
        I was a sponsored online poker player for 7 years,
        which developed my problem-solving skills, strategic thinking.
        I believe my combination of front-end skills and my ability to think critically
        and work well under pressure make me a valuable addition to your team.
      </p>
    </div>
  </>
  
);

export default Introduction;