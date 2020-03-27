import React from 'react';
import Card from '../component/Card';


const CardList = ({robots})=> {
    const cardComponent = robots.map((user, i)=> 
    <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    )
    return(
        <div className='tc'>
            {cardComponent}
        </div>
    )
}
export default CardList;