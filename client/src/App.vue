<template>
<div id="app">
  <guest-form />
  <guest-grid :guests="guests"/>
</div>
</template>

<script>

import {eventBus} from './main.js'
import GuestForm from './components/GuestForm';
import GuestGrid from './components/GuestGrid';
import GuestService from './services/GuestService';
// import Guests from './components/Guest';



export default {
  name: 'App',
  components: {
    'guest-form': GuestForm,
    'guest-grid': GuestGrid,
  },
  data() {
    return {
      guests: []
    };
  },
  mounted() {
    this.fetchGuests();

    eventBus.$on('new-booking-added', payload => {
      GuestService.postGuest(payload)
      .then(guest => this.guests.push(guest));
    });

    // eventBus.$on()
  },
  methods: {
    fetchGuests() {
      GuestService.getGuests()
      .then(guests => this.guests = guests)
    }
  }
}
</script>

<style>

body {
  /* background: url('./assets/......') no-repeat; */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
