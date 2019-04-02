const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM com Vue',
        tarefas: [],
        novaTarefa: ''
    },
    methods: {
        agregarTarefa: function(){
            // console.log('O botão foi clicado! ', this.novaTarefa);
            this.tarefas.push({
                nome: this.novaTarefa,
                status: false
            });
            console.log(this.tarefas);
            this.novaTarefa = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
        },
        editarTarefa: function(index){
            this.tarefas[index].status = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
        },
        eliminarTarefa: function(index){
            this.tarefas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
        }
    },
    created: function(){
        let dadosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(dadosDB === null){
            this.tarefas = [];
        } else {
            this.tarefas = dadosDB;
        }
    }
});