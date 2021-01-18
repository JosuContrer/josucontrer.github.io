import React from 'react'

import { emojify } from 'react-emojione';

import './Random.scss';

export const Random = () => {
    return (
        <div className="RandomPage">
            <h1>Random</h1>
            <p>Click on the following to get a random programming joke form the free API…</p>
            <button>Click Me {emojify(':joy:')}</button>
        </div>
    )
}
