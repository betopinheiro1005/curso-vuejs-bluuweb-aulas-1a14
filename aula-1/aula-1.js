    const app = new Vue({
        el: '#app',
        data: {
            titulo: 'Olá mundo com Vue.js',
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
        }
    });