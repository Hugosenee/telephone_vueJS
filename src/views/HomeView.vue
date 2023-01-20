<template>
  <div>
    <h1>Bonjour ici c'est le journal</h1>
  </div>
  <div v-for="call in calls" :key="call.name">
		<div>
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
    }
}
</script>
