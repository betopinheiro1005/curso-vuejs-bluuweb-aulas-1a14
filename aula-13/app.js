Vue.component('titulo', {
    template: //html
    `
    <div>
        <h1>numero {{numero}}</h1>
        <filho></filho>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    }
});

Vue.component('filho', {
    template: //html
    `
    <div>
        <button class="btn btn-primary" @click="aumentar">+</button>
        <button class="btn btn-primary" @click="diminuir(2)">-</button>
        <h1>numero {{numero}}</h1>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'diminuir']),
    }
});

const store = new Vuex.Store({
    state: {
      numero: 10
    },
    mutations: {
      aumentar (state) {
        state.numero++
      },
      diminuir (state,n) {
        state.numero -= n
      }
    }
  });

const app = new Vue({
    el: '#app',
    store: store
});
