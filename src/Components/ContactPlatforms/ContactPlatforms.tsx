import React from 'react';
import { NavLink } from 'react-router-dom';
import PlatformsIcons from './ContactPlatformTypes';

const ContactPlatforms: React.FC = () => (
      <div className="text-5xl flex justify-center gap-20 py-3 text-gray-300">
        {PlatformsIcons.map(platform => (
          <label htmlFor={platform.id} className="group">
            <div id={platform.id} className="group-hover:animate-bounce">
            <NavLink
              to={platform.Path}
            >
              {platform.icon}
            </NavLink>
            </div>
          </label>
        ))}
      </div>
);

export default ContactPlatforms;