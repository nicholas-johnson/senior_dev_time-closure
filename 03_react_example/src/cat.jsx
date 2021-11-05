import React from 'react';
import className from 'class-name'

export const Cat = ({ cat, active, onClick }) => {
    const catStyle = className(
        'cat',
        `${cat.leftEye}-left-eye`,
        `${cat.rightEye}-right-eye`,
        `${cat.face}-face`,
        { 'active': active }
    )

    return (
        <div className={catStyle} onClick={onClick}>
            <div className='head'>
                <div className={'face'} />
            </div>
            <div className="name">{cat.name}</div>
        </div>
    )
}