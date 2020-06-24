<template lang="html">
  <div class="guest">
    <h2>{{ guest.name }}</h2>
    <p> {{ guest.email }}</p>
    <p> {{ guest.booked }}</p>

    <button v-on:click="handleDelete(guest._id)">Delete Guest</button>
  </div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: 'guest',
  props: ['guest'],

  methods: {
    handleDelete(id) {eventBus.$emit('delete-guest', id);
    }
  }
};




</script>




<style lang="css" scoped>
.guest {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}

h2 {
	padding: 0;
	margin: 0;
}
</style>
