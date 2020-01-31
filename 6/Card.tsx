import React from 'react'
import { Button } from './Button'

type Props = {
    header: string;
}

export const Card: React.FC<Props> = ({ header }) => (<>
    <h1>{header}</h1>
    <div className="card">
        <div className="card-header">
            <img src="/static/some-random-image.png" />
        </div>
        <div className="card-content">
            <p>This is the lower half of my card component</p>
            <Button text='Click me to refresh the page' />
        </div>
    </div></>)