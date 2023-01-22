<template>
    <div class="contact"  @click="appel(contact)">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.number }}</h3>
        <p>Call</p>
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
				this.$store.commit('appel', contact)
			}
        }
    
    }
</script>
<style >
    .contact {
        display: flex;
        border: 2px solid blue;
        justify-content: space-evenly;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    .contact p {
        font-weight: bolder;
        font-size: larger;
    }

    .contact p:hover{
        color: blue;
        cursor: pointer;
    }
</style>