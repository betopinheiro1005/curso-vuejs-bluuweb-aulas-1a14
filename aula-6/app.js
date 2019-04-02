const app = new Vue({
    el: '#app',
    data: {
        mensagem : 'Olá, seja bem-vindo!',
        contador: 0
    },
    computed: {
        invertido(){
            return this.mensagem.split('').reverse().join('');
        },
        cor(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador <= 20,
                'bg-danger' : this.contador > 20
            }
        }
    }
});