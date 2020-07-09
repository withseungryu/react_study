import React from 'react'
import {Recipe} from './Recipe'
interface MenuProps{
    title: string;
    recipes: data[];
}

export const Menu: React.FC<MenuProps> = ({title, recipes}) =>  {
    return <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) => 
                <Recipe key = {i} {...recipe} />
            )}
        </div>
    </article>

}