import React from 'react';
import './Card.css';

const Card = ({ name, stance, obstacle, tutorial }) => {
    return (
        <div className='trix-card'>
            <p>{stance} {name}</p>
            <p>Obstacle: {obstacle} </p>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default Card;