import React from 'react';
import 'tachyons';

function Card(props){
    return(
        <div className = 'tc bg-light-yellow dib br3 pa3 ma2 grow'>
           <img alt = 'pic' src = {`https://robohash.org/${props.id}`} />
           <h2>{props.name}</h2>
           <h4>{props.email}</h4>
        </div>
    )
}

export default Card;