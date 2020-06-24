const baseURL = 'http://localhost:3000/api/guests/'

export default {
  // get index of sightings (from create_router)
  getGuests(){
    return fetch(baseURL)
    .then(res => res.json())
  },
