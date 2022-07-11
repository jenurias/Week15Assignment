const ANIMALS_ENDPOINT = 'https://62cb232e1eaf3786ebb626c2.mockapi.io/PetHub1';

class AnimalsApi {
    get = async () => {
        try {
            const resp = await fetch(ANIMALS_ENDPOINT);
            const data = await resp.json();
            return data;
        }
        catch(e) {
            console.log('Oops, looks like fetchAnimals had an issue.', e);
        }
    }
    put = async (animal) => {
        try {
            const resp = await fetch(`${ANIMALS_ENDPOINT}/${animal._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(animal)
            });
            return await resp.json();
        }
        catch(e) {
            console.log('Oops, looks like updating animals had an issue.', e);
        }
    }
}

export const animalsApi = new AnimalsApi();