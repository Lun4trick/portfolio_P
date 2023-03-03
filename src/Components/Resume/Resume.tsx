import React from 'react';

const Resume: React.FC = () => (
  <div className='flex-1 desktop:px-96 laptop:px-64 tablet:px-14 pb-5 h-full'>
    <iframe
      className='h-full w-full'
      src="/utils/resume/Levente_Krotos_CV.pdf#view=Fit&toolbar=0&navpanes=0" title='resume'>
        Something gone wrong
      </iframe>
  </div>
  )

export default Resume;