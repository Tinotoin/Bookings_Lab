<template lang="html">
  <form id="bookings-form" v-on:submit.prevent="handleFormSubmit">
  <h2>Add a Booking</h2>
  <div class="formWrap">
    <label for="Name">Name:</label>
    <input type="text" id="name" v-model="name" required>
  </div>
  <div class="formWrap">
    <label for="Email">Email</label>
    <input type="text" id="email" v-model="email" required>
  </div>
  <div class="formWrap">
    <input type="radio" name="booked" value="Booked" v-model="booked">  <!-- v model? -->
    <label for="">Booked</label>
    <input type="radio" name="booked" value="Not Booked" v-model="booked"> <!-- v model? -->
    <label for="">Not Booked</label>
  </div>
  <button type="submit" name="button">Book!</button>
</form>
</template>

<script>

import GuestService from "../services/GuestService.js"
import {eventBus} from "../main.js"

export default {
  name: 'guest-form',
  data() {
    return {
      name: "",
      email: "",
      booked: null
    }
  },
  methods: {
    handleFormSubmit(event){
      event.preventDefault();

      const newBooking = {
        name: this.name,
        email: this.email,
        booked: this.booked
      };

      GuestService.postNewBooking(newBooking)
      .then(jsonResponse => eventBus.$emit('new-booking-added', jsonResponse))
        // this.name = this.email = '';
        // this.booked = null;
      }
    }
  }


</script>










<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
