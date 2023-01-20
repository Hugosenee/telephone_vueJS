<template lang="">
    <h1>Contact</h1>
    <button @click='active'>+</button>

    <FormContact id="form" class="active" :contacts="contacts"/>


    <div class="cartes">
        <div v-for="contact in contacts" :key="contact.name">
            <ContactInfo :contact="contact"/>
        </div>
    </div>

</template>
<script>
import FormContact from '@/components/FormContact.vue'
import ContactInfo from '@/components/ContactInfo.vue'

export default {
    name: 'ContactView',
    components: {
        FormContact,
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
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
}

#form {
    position: absolute;
    right: 360px;
}

.active{
    display: none;
}

</style>