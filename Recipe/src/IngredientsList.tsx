import React from 'react'
import {Ingredient} from './Ingredient'

interface ListProps{
    list : ingredient[];
}
export const IngredientsList: React.FC<ListProps> = ({list}) => {
    return <ul className="ingredients">
        {list.map((ingredient, i) => 
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>
}