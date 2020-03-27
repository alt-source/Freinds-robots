import React from 'react';
const Card = ({id, name, email})=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
       
    <img alt='ROBOTS' src={`https://robohash.org/${id}`} />
    <h2>{name}</h2>
       <p>{email}</p>
        </div>
    )
}
export default Card;