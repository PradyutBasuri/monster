import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';
export const CardList= (props) =>{
    console.log(props);
return <div className="card-list">

{props.Monsters.map(Monsters=>(

<Card key={Monsters.id} Monsters={Monsters}></Card>
))}

</div>
}