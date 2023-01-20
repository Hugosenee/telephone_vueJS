<template>
  <div>
    <h1>Bonjour ici c'est le journal</h1>
  </div>
  <div v-for="call in calls" :key="call.name" class="calls">
		<div @click="appel(call)">
			<h2>{{ call.name }}</h2>
			<span> {{ call.number }}</span>
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
			}
        }
}
</script>

<style>

</style>
