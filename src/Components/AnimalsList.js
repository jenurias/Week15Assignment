import React from 'react';
import { Animal } from './Animal';
import { animalsApi } from '../rest/AnimalsApi.js';

export class AnimalsList extends React.Component {
    state = {
        animals: []
    };

    componentDidMount() {
        this.fetchAnimals();
    }

    fetchAnimals = async () => {
        const animals = await animalsApi.get();
        this.setState({ animals });
    };

    updateAnimal = async (updatedAnimal) => {
        await animalsApi.put(updatedAnimal);
        this.fetchAnimals();
    };

    render() {
        return (
            <div className='animal-list'>
                {this.state.animals.map((animal) => (
                    <Animal
                        animal={animal}
                        key={animal._id}
                        updateAnimal={this.updateAnimal}
                    />
                ))}
            </div>
        )
    }
}