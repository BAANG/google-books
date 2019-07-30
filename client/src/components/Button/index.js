import React from 'react';

function Button(props) {
    if (props.href) {
        return (
        <button className='btn btn-primary'>
            <a href={props.href}>{props.children}</a>
        </button>
        )
    }
    else if (props.onClick) {
        return (
            <button onClick={props.onClick} className='btn btn-primary'>
            {props.children}
        </button>
        )
    }

}

export default Button;