Vue.component('pai',{
    template: //html
    `
        <div class="p-5 bg-dark text-white">
            <h2>Componente Pai: {{numeroPai}}</h2>
            <button @click="numeroPai++" class="btn btn-danger mb-3">+</button>
            {{nomePai}}
            <filho :numero="numeroPai" @nomeFilho="nomePai = $event"></filho>
        </div>
    `,
    data(){
        return {
            numeroPai: 0,
            nomePai: ''
        }
    }
})