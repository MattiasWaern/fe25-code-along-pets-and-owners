import { data } from 'react-router';
import petNames from './data/petNames.json' with {type: 'json'};
import petOwners from './data/petOwners.json' with {type: 'json'};
import petSpecies from './data/petSpecies.json' with {type: 'json'};


const PETS_WITHOUT_OWNERS_PERCENT = 15;
const MAX_PETS_PET_OWNER = 4;
const NUMBER_OF_PET_OWNERS = 5; // max 200
const NUMBER_OF_PETS = 10; // max 500
const STRAPI_PORT = 1337;
const STRAPI_HOST = "127.0.0.1";


function randomItemFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

// Shuffle/randomize the order of all items an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}



function generatePetData(){
    let speciesList = '';
    for(let {speces, percent} of petSpecies){
        speciesList += (speces +',').repeat(percent) 
    }
    speciesList = speciesList.split(',').slice(0, -1);
    
    shuffleArray(petNames);
    shuffleArray(speciesList);

    let petList = [];

    for(let i = 0; i < NUMBER_OF_PETS; i++){
        petList.push({
            name: petNames.shift(),
            species: randomItemFromArray(speciesList)
        })
    }
    return pets;
}


async function createPetOwners(){
    shuffleArray(petOwners);
    for ( let i = 0; i < NUMBER_OF_PET_OWNERS; i++ ){
        let response = await fetch(`http://${STRAPI_HOST}:${STRAPI_PORT}/api/pet-owner`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data: petOwners[i]})
        });
        let status = await response.json();
    }
}

