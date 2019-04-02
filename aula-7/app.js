const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Vue.js - Ciclo de vida'
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }

});