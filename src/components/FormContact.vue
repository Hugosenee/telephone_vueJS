<template lang="">
    <div>
        <form @submit.prevent="ajoutContact">
            <h2>Ajouter un contact</h2>
            <input type="text" placeholder="Name :" v-model="FormContact.name">
            <!--<span v-if="FormContact.name.length < 3"  className="error">Le pseudo doit avoir au moins 3 caractères</span>-->
            <input type="number" placeholder="Number :" v-model="FormContact.number">
            <button type="submit">Ajouter</button>
        </form>
    </div>

</template>

<script>
export default {
    name: 'FormContact',

    props: [
        'contacts'
    ],

    data() {
        return {
        error: false,

        FormContact: {
            name: '',
            number: null
        },
        }
    },

    methods: {
        ajoutContact() {


        this.$store.commit('ajoutContact', this.FormContact)

        this.FormContact = {
            name: "",
            number: null
        }
        }
    }

}
</script>

<style>
form {
    background-color: white;
    border: 2px solid blue;
    width: 50vw;
    height: 50vh;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    padding: 10px;
    border-radius: 10px;
}

button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
    border: 2px solid blue;
}
</style>