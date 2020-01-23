import React from 'react';
import {useRoutes, A } from 'hookrouter';
import './App.css';
import HomePage from "./pages/HomePage";
import CreaturePage from "./pages/CreaturePage";
import MentionPage from "./pages/MentionPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreatureDetail from "./pages/Creature";


const routes = {
  '/home': () => <HomePage />,
  '/creatures': () => <CreaturePage />,
  '/creature/:id': ({id}) => <CreatureDetail id={id} />,
  '/mentions-legal': () => <MentionPage />,
};

const App = () => {
    const match = useRoutes(routes);

    return (
    <div>
      <A href="/home">Home</A>
      <A href="/creatures">Creatures</A>
      <A href="/mentions-legal">Mention Legal</A>
      {match|| <NotFoundPage />}
    </div>  
    

  );}

export default App;
