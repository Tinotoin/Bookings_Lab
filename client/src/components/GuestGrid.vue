<template lang="html">
  <div id="guestsGrid">
    <guest v-for="guest in guests" :key="guest._id" :guest="guest" />
  </div>
</template>

<script>

import Guests from './Guests.vue';

export default {
  name: 'guests-grid',
  components: {
    'guest': Guests
  },
  props: ['guests']
}
</script>

<style lang="css" scoped>

#guestsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>
