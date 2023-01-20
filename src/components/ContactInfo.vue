<template>
    <div  @click="appel(contact)">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.number }}</h3>
    </div>
</template>
<script>
    export default {
        name: 'ContactInfo',
        props: {
        contact: {
        }
        },
        data() {
        return {
    
        }
        },
        methods: {
            appel(contact) {
				console.log(contact)
			}
        }
    
    }
</script>
<style scoped>
div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: #42b983;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>