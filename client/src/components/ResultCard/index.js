import React from 'react';
import Button from '../Button'

function ResultCard({ title, link, id, author, image, description, saveBook }) {
    if (!saveBook) {
        return (
            <div>
                <div className='row'>
                    <h4 className='col-3'>{title}</h4>
                    <span className='col-3 offset-6'>
                        <Button
                            href={link}
                        >View
                        </Button>
                    </span>
                </div>
                <div className='row'>
                    <small>
                        <br />Written by {author}</small>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        {description}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='row'>
                    <h4 className='col-3'>{title}</h4>
                    <span className='col-3 offset-6'>
                        <Button
                            href={link}
                        >View
                        </Button>
                        <Button
                            id={id}
                            onClick={(event) => saveBook(event)}
                        >Save
                        </Button>
                    </span>
                </div>
                <div className='row'>
                    <small>
                        <br />Written by {author}</small>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultCard;