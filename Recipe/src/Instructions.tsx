import React from 'react'

interface InstrunctionProps{
    title: string;
    steps: string[];
}

export const Instructions: React.FC<InstrunctionProps> = ({title, steps}) => {
    return <section className="instructions">
        <h2>{title}</h2>
        {steps.map((step, i) => 
            <p key={i}>{step}</p>
        )}
    </section>
}