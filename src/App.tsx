import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import {
  Navigate,
  Route,
  Routes,
  useLocation
//   Navigate,
} from 'react-router-dom';
import './App.css';
import Introduction from './Components/Introduction/Introduction';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';

const App: React.FC = () => {
  const [scrollBarVisible, setScrollBarVisible] = useState(false);
  const location = useLocation();

  function handleScroll() {
    const isScrollable = window.scrollY > 0;
    setScrollBarVisible(isScrollable);
  }

  useEffect(() => {
    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(handleScroll, [location])

  console.log(scrollBarVisible)


  
  return (
    <main className={cn(
      "desktop:px-10 mobile:px-2 flex bg-gradient-to-b from-slate-400 to-gray-700 min-h-screen h-fit"
    )}>
      <section className={cn(
        "flex flex-col flex-1 w-full"
      )}>
        <NavBar />
        <Routes>
          <Route
            path="/home"
            element={(
              <Navigate
                to="/"
                replace
              />
            )}
          />
          <Route 
          path="/"
          element={
            <Introduction />
          }
          />
          <Route 
          path="/projects"
          element={
            <Projects />
          }
          />
          <Route 
          path="/resume"
          element={
            <Resume />
          }
          />
        </Routes>
      </section>
    </main>
  );
}

export default App;
