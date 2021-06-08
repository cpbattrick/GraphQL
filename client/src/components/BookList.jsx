import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
    let { loading, error, data } = useQuery(getBooksQuery);

    let [selected, setSelected] = useState(null);

    return (
        <div>
            <ul id="book-list">
                {loading ? <div>Loading Books...</div> : data.books.map(b => <li onClick={(e)=> setSelected(b.id)} key={b.name}>{b.name}</li>)}
            </ul>

            {selected && <BookDetails bookId={selected}/>}
        </div>
    )
}

export default BookList
