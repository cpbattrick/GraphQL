import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const AddBook = () => {
    let { loading, error, data } = useQuery(getAuthorsQuery);
    let [ addBook ] = useMutation(addBookMutation);

    let [ bookName, setBookName ] = useState("");
    let [ genre, setGenre ] = useState("");
    let [ author, setAuthor ] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        addBook({
            variables:{name:bookName, genre, authorId: author},
            refetchQueries:[{query: getBooksQuery}]
        });
    };

    return (
        <form id="add-book" onSubmit={ submitForm }>
            <div className="field">
                <label>Book Name:</label>
                <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select  onChange={(e) => setAuthor(e.target.value)}>
                    <option>Select Author</option>
                    {loading ? <option disabled>Loading Authors...</option> 
                    : data.authors.map(a => <option value={a.id} key={a.id}>{a.name}</option>)}
                </select>
            </div>

            <button>+</button>
        </form>
    )
}

export default AddBook
