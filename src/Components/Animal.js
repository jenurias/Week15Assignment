import React from 'react';
import { NewPetForm } from './NewPetForm.js'

export const Animal = (props) => {
    const { animal, updateAnimal } = props;

    const deletePet = (petId) => {
        const updatedAnimal = {
            ...animal,
            pets: animal.pets.filter((x) => x._id !== petId)
        };
        updateAnimal(updatedAnimal);
    }

    const addNewPet = (pet) => updateAnimal({ ...animal, pets: [...animal.pets, pet]})

    const pets = () => (
        <ul>
            {animal.pets.map((pet, index) => (
                <li key={index}>
                    <label> {`${pet.name} Breed: ${pet.breed}`} </label>
                    <button onClick={(e) => deletePet(pet._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{animal.name}</h1>
            {
                pets({ pets, animalId: animal._id, deletePet})
            }
            <NewPetForm addNewPet={addNewPet} />
        </div>
    );
};