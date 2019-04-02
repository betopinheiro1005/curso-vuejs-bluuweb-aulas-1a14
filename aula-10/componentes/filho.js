Vue.component('filho',{
    template: //html
    `
        <div class="py-5 bg-success">
            <h4>Componente Filho: {{numero}}</h4>
            <h4>Nome: {{nome}}</h4>
        </div>
    `,
    props: ['numero'],
    data(){
        return {
            nome: 'Ignacio'
        }
    },
    mounted(){
        this.$emit('nomeFilho', this.nome);
    }
})