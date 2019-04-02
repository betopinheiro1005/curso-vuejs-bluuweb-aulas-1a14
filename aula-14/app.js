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
        <button class="btn btn-primary" @click="obterCursos">Obter cursos</button>
        <h1>numero {{numero}}</h1>
        <ul v-for="item of cursos">
            <li>{{item.nome}}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero','cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'diminuir']),
        ...Vuex.mapActions(['obterCursos'])
    }
});

const store = new Vuex.Store({
    state: {
      numero: 10,
      cursos: []
    },
    mutations: {
      aumentar (state) {
        state.numero++
      },
      diminuir (state,n) {
        state.numero -= n
      },
      preencherCursos(state, cursosAcao){
          state.cursos = cursosAcao
      }
    },
    actions: {
        obterCursos: async function({commit}){
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            commit('preencherCursos', cursos);
        }
    }
  });

const app = new Vue({
    el: '#app',
    store: store
});
