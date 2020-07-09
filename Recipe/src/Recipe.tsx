import React from 'react'
import {Instructions} from './Instructions'
import {IngredientsList} from './IngredientsList'


export const Recipe: React.FC<data> = ({name, ingredients, steps}) => {
    return <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients} />
        <Instructions title="조리 절차" steps={steps} />
        </section>
}