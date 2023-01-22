<template>
  <div>
    <h1>Bonjour ici c'est le journal</h1>
  </div>
  <div v-for="call in calls" :key="call.name" class="calls">
		<div @click="appel(call)">
      <span  v-if=" call.name != undefined"> {{ call.name }}</span>
      <span v-else > {{ call }} </span>
		</div>
	</div> 
</template>

<script>


export default {
    computed: {
      calls() {
				return this.$store.state.calls
			}
    },
    methods: {
            appel(call) {
              this.$store.commit('appel', call)
              console.log(this.calls)
			}
        }
}
</script>

<style>

</style>
