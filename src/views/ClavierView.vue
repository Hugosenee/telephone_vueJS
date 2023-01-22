<template >
    <div>
        <h1 id="inputnumero"></h1>  
        <p id="contactname"></p>  
        <button @click="appelDirect">Appeler</button>
    </div>
    <div id="touche">
        <div @click="touches(1)">1</div>
        <div @click="touches(2)">2</div>
        <div @click="touches(3)">3</div>
        <div @click="touches(4)">4</div>
        <div @click="touches(5)">5</div>
        <div @click="touches(6)">6</div>
        <div @click="touches(7)">7</div>
        <div @click="touches(8)">8</div>
        <div @click="touches(9)">9</div>
        <div @click="touches(0)">0</div>
    </div>
</template>
<script>
export default {
    name: 'FormAppel',

    props: [
        'calls'
    ],

    data() {
        return {
            error: false,
        }   
    },
    computed: {
        contacts() {
				return this.$store.state.contacts
			}
    },
    methods: {
            touches(numero) {
                let inputnumero = document.getElementById('inputnumero')
                inputnumero.textContent += numero
                let findNumber = this.contacts.find(contact => contact.number == inputnumero.textContent)
                let contactname = document.getElementById('contactname')
                if (findNumber != undefined) {
                    contactname.innerHTML += (findNumber.name)
                }   else {
                    contactname.innerHTML = ''
                }
            },
            appelDirect () {
                let numero = document.getElementById('inputnumero')
                this.$store.commit('appelDirect', numero.textContent)
                
                numero.textContent = ""
            },
        }
}
</script>
<style>

    #touche{
        widows: 50%;
        height: 20vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
        gap: 15px;
    }

    #touche div{
        width: 30%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid blue;
        cursor: pointer;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        cursor: pointer;
    }

    #touche div:hover{
        background-color: blue;
    }

    button:hover{
        background-color: blue;
    }

    #contactname{
        font-size: x-large;
    }
</style>    