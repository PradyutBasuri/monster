import React from 'react';

import './card.style.css';

export const Card=(props)=>{
    return <div className="card-container">
<img alt="monster" src={`https://robohash.org/${props.Monsters.id}?set=set2&size=180x180`} ></img>
        <h2>{props.Monsters.name}</h2>
<p>{props.Monsters.email}</p>
    </div>
}