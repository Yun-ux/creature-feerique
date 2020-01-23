import React, { useEffect, useState } from "react";

const CreatureDetail = ({ id }) => {
  const [creature, setCreature] = useState(null);

  useEffect(() => {
    fetch(`/data/${id}.json`)
      .then(r => r.json())
      .then(data => {
        setCreatures(data);
      });
  }, []);
  return (
    <div>
      <h1>{creature && creature.nom}</h1>
      <p>{creature && creature.description}</p>
      <ol>
        {creature?.pouvoir?.map(p => (
          <li>{p}</li>
        ))}
      </ol>
    </div>
  );
};

export default CreatureDetail;
