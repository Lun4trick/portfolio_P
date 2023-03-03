import React from 'react';
import { NavLink } from 'react-router-dom';
import PlatformsIcons from './ContactPlatformTypes';

const ContactPlatforms: React.FC = () => (
      <div className="text-5xl flex justify-center gap-20 py-3 text-gray-300">
        {PlatformsIcons.map(platform => (
          <NavLink
          id={platform.id}
          className="hover:animate-bounce"
          to={platform.Path}
         >
           {platform.icon}
         </NavLink>
        ))}
      </div>
);

export default ContactPlatforms;