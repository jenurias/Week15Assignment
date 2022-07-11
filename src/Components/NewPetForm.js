import React, { useState } from 'react';

export const NewPetForm = (props) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState(undefined);

    /*const handleBreedInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setBreed(int >= 0 ? int : '');
    }*/

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && breed) {
            props.addNewPet({name, breed});
            setName('');
            setBreed('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a New Pet</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input 
                    type='text'
                    placeholder='breed'
                    onChange={(e) => setBreed(e.target.value)}
                    value={breed}
                />
                <button type='submit'>Add Pet</button>
            </form>
        </div>
    )
}