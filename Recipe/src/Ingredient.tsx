import React from 'react'



export const Ingredient: React.FC<ingredient> = ({amount, measurement, name}) => {
    return <ul className="ingredients">
        <li>
            <span className="amount">{amount}</span>
            <span className="measurement">{measurement}</span>
            <span className="name">{name}</span>
        </li>
    </ul>

}