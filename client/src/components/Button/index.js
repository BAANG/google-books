import React from 'react';

function Button(props) {
    if (props.href) {
        return (
        <button className='btn btn-light btn-large'>
            <a href={props.href}>{props.children}</a>
        </button>
        )
    }
    else if (props.onClick) {
        return (
            <button 
            className='btn btn-primary'
            onClick={props.onClick}
            data-id={props.id} 
            >
            {props.children}
        </button>
        )
    }

}

export default Button;