const baseURL = 'http://localhost:3000/api/guests/'

export default {
  // get index of sightings (from create_router)
  getGuests(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postNewBooking(newData){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteBooking(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
    .then(response => response.json())
  }
}
