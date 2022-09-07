import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Card from './Card';
import './Trix.css';

const Trix = ({ allTrix }) => {
    let trix = allTrix.map(trix => {
        return (
            <Card
                id={trix.id}
                key={trix.id}
                stance={trix.stance}
                name={trix.name}
                obstacle={trix.obstacle}
                tutorial={trix.tutorial}
            />
        )
    })

    return (
        <div className='trix-container'>
            {trix}
        </div>
    )
}

export default Trix;