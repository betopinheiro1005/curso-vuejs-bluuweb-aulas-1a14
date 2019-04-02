Vue.component('filho',{
    template: //html
    `
        <div class="py-5 bg-success">
            <h4>Componente Filho: {{numero}}</h4>
        </div>
    `,
    props: ['numero']
})