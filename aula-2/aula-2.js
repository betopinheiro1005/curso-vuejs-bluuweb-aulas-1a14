const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Olá mundo com Vue.js',
        novaFruta: '',
        // frutas: ['Maçã', 'Pera','Banana']
        frutas: [
            {
                nome: "Maçã",
                quantidade: 10
            },
            {
                nome: "Pera",
                quantidade: 0
            },
            {
                nome: "Banana",
                quantidade: 11
            }
        ]
    },
    methods: {
        addFruta(){
            // console.log('O botão foi clicado!');
            this.frutas.push(
                {nome: this.novaFruta, quantidade: 0}
            );
        }
    }    
});