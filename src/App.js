import React from 'react';
import {useRoutes, A } from 'hookrouter';
import './App.css';
import HomePage from "./components/HomePage";
import CreaturePage from "./components/CreaturePage";
import MentionPage from "./components/MentionPage";
import NotFoundPage from "./components/NotFoundPage";

const routes = {
  '/home': () => <HomePage />,
  '/creature': () => <CreaturePage />,
  '/mentions-legal': () => <MentionPage />,
  '/404': () => <NotFoundPage />,
};

const App = () => {
    const match = useRoutes(routes);

    return (
    <div>
      <A href="home">Home</A>
      <A href="creature">Creature</A>
      <A href="mentions-legal">Mention Legal</A>
      {match|| <NotFoundPage />}
    </div>  
    

  );}

export default App;
