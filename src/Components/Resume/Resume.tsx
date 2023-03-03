/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillPhone, AiFillSkype } from 'react-icons/ai';
import { FaLaptop, FaMapMarker } from "react-icons/fa"
import React from 'react';

const Resume: React.FC = () => (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-full max-w-5xl mx-auto shadow-3xl">
    <div className="mb-4">
      <h1 className="text-4xl font-bold bg-slate-600 text-slate-300 mb-2">Levente Krotos</h1>
      <h2 className="text-xl font-bold text-gray-700 mb-2">FRONTEND DEVELOPER</h2>
      <div className="flex flex-col items-end">
      <a href="https://wa.me/36704298682" className="text-gray-700 mb-2">
        <label htmlFor="phoneContact" className="group flex items-center cursor-pointer">
          <div id='phoneContact' className="text-3xl group-hover:animate-pulse transition-all">
            <AiFillPhone/>
          </div>
          <i className="fas fa-phone-alt mr-2" />
          <p>+36 70 429 86 82</p>
        </label>
      </a>
      <a href='https://www.linkedin.com/in/levente-krotos-1933ab261/' className="text-gray-700 mb-2 flex items-center">
        <label htmlFor="linkedInContact" className="group flex items-center cursor-pointer">
          <div id='linkedInContact' className="text-3xl  group-hover:animate-pulse transition-all">
            <AiFillLinkedin/>
          </div>
          <i className="fab fa-linkedin mr-2" />
          <p>LinkedIn</p>
        </label>
      </a>
      <a href='mailto:krotos.levi@gmail.com' className="text-gray-700 mb-2 flex items-center">
        <label htmlFor="emailContact" className="group flex items-center cursor-pointer">
          <div id='emailContact' className="text-3xl group-hover:animate-pulse transition-all">
            <AiFillGoogleCircle/>
          </div>
          <i className="fas fa-envelope mr-2" />
          <p>krotos.levente@gmail.com</p>
        </label>
      </a>
      <a href='https://github.com/Lun4trick?tab=repositories' className="text-gray-700 mb-2 flex items-center">
      <label htmlFor="gitHubContact" className="group flex items-center cursor-pointer">
        <div id='gitHubContact' className="text-3xl group-hover:animate-pulse transition-all">
            <AiFillGithub/>
        </div>
        <i className="fab fa-github mr-2" />
        <p>GitHub</p>
      </label>
      </a>
      <a href='https://join.skype.com/invite/p2kJweZrhsxe' className="text-gray-700 mb-2 flex items-center">
      <label htmlFor="skypeContact" className="group flex items-center cursor-pointer">
        <div id='skypeContact' className="mr-2 text-3xl group-hover:animate-pulse transition-all">
            <AiFillSkype/>
        </div>
        levente.krotos
      </label>
      </a>
      <p className="text-gray-700 flex items-center mb-2">
        <div className="mr-2 text-3xl">
            <FaMapMarker />
        </div>
        Budapest, Hungary
      </p>
      <p className="text-gray-700 flex items-center mb-2">
      <div className="mr-2 text-3xl">
            <FaLaptop />
        </div>
        Ready to work remotely
      </p>
    </div>
    <div className="mb-4">
      <h2 className="text-lg font-bold text-gray-700 mb-2">SKILLS</h2>
      <ul className="list-disc list-inside mb-2">
        <li>React, Redux</li>
        <li>Typescript, JavaScript (ES2015 - 2019)</li>
        <li>HTML5, CSS3, Sass (SCSS), BEM, Bulma, Tailwind</li>
        <li>Fetch, REST API, Web sockets</li>
        <li>Figma</li>
        <li>Git/Github, VS Code, Chrome Developer Tools (incl. React, Redux), NPM</li>
        <li>Algorithms: Solved 100+ algorithmic tasks during the course</li>
        <li>OOP understanding</li>
        <li>Basic knowledge of cryptocurrencies ( POW, POS, exchanges, cold wallets, NFT-s)</li>
        <li>English: Intermediate</li>
      </ul>
    </div>
  </div>

  <div className="py-8">
  <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">Frontend Developer, Training projects, Oct 2022 - Present</h3>
    <p className="mb-2">Technologies: HTML, CSS, BEM, React, JS, TypeScript</p>
    <p className="mb-2">See some of my projects at:</p>
    <ul className="list-disc pl-6 mb-2">
      <li><a href="https://lun4trick.github.io/layout_miami/" className="text-blue-600 hover:underline">Landing page for MET</a></li>
      <li><a href="https://lun4trick.github.io/react_todo-app-with-api/" className="text-blue-600 hover:underline">Personal todo app</a></li>
      <li><a href="https://lun4trick.github.io/poker-project/" className="text-blue-600 hover:underline">Poker App</a></li>
    </ul>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-2">Sponsored online poker player, 2016 - Present</h3>
    <p className="mb-2">Responsibilities:</p>
    <ul className="list-disc pl-6 mb-2">
      <li>Continuously learning and adapting to new gameplay strategies and tactics.</li>
      <li>Staying up-to-date with the latest developments in online poker software and technology.</li>
      <li>Utilizing analytical tools and software to track performance and identify areas for improvement.</li>
      <li>Collaborating with other players to share knowledge and develop effective teamwork strategies.</li>
      <li>Constantly monitoring and adjusting to changes in the online poker landscape, such as new regulations and competition.</li>
      <li>Maintaining discipline and focus, both in terms of gameplay and bankroll management.</li>
    </ul>
    <p className="mb-2">Key accomplishments:</p>
    <ul className="list-disc pl-6 mb-2">
      <li>Played the Highest limit, with the most competent opponents in a specific game format. (Spent 100.000$ daily, on buy-ins in spin & go games)</li>
    </ul>
  </div>
</div>
  </div>

  )

export default Resume;