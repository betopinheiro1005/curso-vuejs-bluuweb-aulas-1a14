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
        <button class="btn btn-primary" @click="$store.commit('aumentar')">+</button>
        <h1>numero {{$store.state.numero}}</h1>
    </div>
    `
});

const store = new Vuex.Store({
    state: {
      numero: 10
    },
    mutations: {
      aumentar (state) {
        state.numero++
      }
    }
  });

const app = new Vue({
    el: '#app',
    store: store
});
