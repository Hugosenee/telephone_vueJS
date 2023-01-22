<template>
  <div>
    <h1>Journal d'appel</h1>
  </div>
  <div v-for="call in calls" :key="call.name" class="calls">
		<div class="appels" @click="appel(call)">
      <h2  v-if=" call.name != undefined"> {{ call.name }}</h2>
      <h2 v-else > {{ call }} </h2>
      <p>Call</p>
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

    .appels {
      display: flex;
      border: 2px solid blue;
      justify-content: space-evenly;
      margin-top: 15px;
      border-top-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }

    .appels p {
      font-weight: bolder;
      font-size: larger;
    }

    .appels p:hover{
      color: blue;
      cursor: pointer;
    }
</style>
