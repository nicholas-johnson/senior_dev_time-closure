import React, { useState } from 'react';

import { Cat } from './cat';

export const CatList = ({ cats }) => {
    const [favouriteCat, setFavouriteCat] = useState();

    return (
        <div className='cat-list'>
            {favouriteCat && <h1>{favouriteCat.name} I choose you!</h1>}
            {!favouriteCat && <h1>Cat Selection</h1>}

            <ul>
                {
                    cats.map((cat) => (
                        <li key={cat.name}>
                            <Cat
                                cat={cat}
                                active={cat === favouriteCat}
                                onClick={() => setFavouriteCat(cat)}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
