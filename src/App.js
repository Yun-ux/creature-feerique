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
};

const App = () => {
    const match = useRoutes(routes);

    return (
    <div>
      <A href="home">Home Page</A>
      <A href="creature">Creature</A>
      <A href="mentions-legal">Mention Legal</A>
      {useRoutes}
    </div>  
    //match || <NotFoundPage />

  );}

export default App;
