const baseURL = 'https://fdnd.directus.app/';

const addressEndpoint = 'items/atlas_address';
const personEndpoint = 'items/atlas_person';
const familyEndpoint = 'items/atlas_family';
const posterEndpoint = 'items/atlas_poster';

const addressURL = baseURL + addressEndpoint;
const personURL = baseURL + personEndpoint;
const familyURL = baseURL + familyEndpoint;
const posterURL = baseURL + posterEndpoint;


getData(personURL).then(dataPerson => {
console.log(dataPerson);
});

// Get Json data 
async function getData(URL) {
    return (
        fetch(URL)
            .then(response => response.json())
            .then(jsonData => { return jsonData })
    );
}