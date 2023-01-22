<template lang="">
    <h1>Contact</h1>
    <!--<button @click='active'>+</button>-->
    <router-link id="plus" to="/form">+</router-link>




    <div class="cartes">
        <div v-for="contact in contacts" :key="contact.name">
            <ContactInfo :contact="contact"/>
        </div>
    </div>

</template>
<script>
import ContactInfo from '@/components/ContactInfo.vue'

export default {
    name: 'ContactView',
    components: {
        ContactInfo
    },
    computed: {
        contacts() {
        return this.$store.state.contacts
        }
    },
    methods: {
        active() {
        let form = document.getElementById('form')
        form.classList.toggle('active')
        },
    }
}


</script>
<style>

.cartes {
    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
}

#plus{
    text-decoration: none;
    font-size: 30px;
    color: blue;
}

</style>