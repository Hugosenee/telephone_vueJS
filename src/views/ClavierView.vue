<template >
    <div>
        <h1>je suis un clavier</h1>
    </div>
    <div>
        <p id="inputnumero"></p>    
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
            },
            appelDirect () {
                let numero = document.getElementById('inputnumero')
                //this.myArray.push(numero.textContent)
                this.$store.commit('appelDirect', numero.textContent)
                //console.log(this.myArray[0])
                
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
    }

    #touche div{
        width: 30%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid grey;
        cursor: pointer;
    }

    #touche div:hover{
        background-color: gray;
    }
</style>    