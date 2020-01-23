import React, { useEffect, useState } from "react";
import { A } from "hookrouter";

const CreaturePage = () => {
  // const creatures = []; sans le useState
  const [creatures, setCreatures] = useState([]);
  // requete vers backend
  useEffect(() => {
    fetch("/data/creatures.json")
      // then ce que tu as recu puis tu le transforme en json
      .then(r => r.json())
      //revient a faire (r) => console.log(r)
      //.then(console.log);
      //then ((data) => {creatures = data}); mais on doit re render du coup on ne fait pas comme ça mais on utilise un hook
      .then(data => {
        setCreatures(data);
      });
  }, []);
  return (
    <ul>
      {creatures.map(item => (
        <li key={item.id}>
          <A href={"creature/" + item.id}>{item.nom}</A>
        </li>
      ))}
    </ul>
  );
};

export default CreaturePage;
