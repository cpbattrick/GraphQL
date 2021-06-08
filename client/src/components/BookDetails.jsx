import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({bookId}) => {
    let { loading, error, data } = useQuery(getBookQuery, { variables: { id:bookId } })

    return (
        <div id="book-details">
            { !data ? <p>No Book Selected</p> 
                : <div>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul>
                        {data.book.author.books.map(b => <li key={b.id}>{b.name}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default BookDetails