var app = new Vue({ //intancia del objeto vue
    el: '#app',
    data: {
        message: 'Hello Vue!',
        src: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        getMessage: function () {
            return this.message;
        }
    }
})

var suma = new Vue({
    el:'#suma',
    data:{
        uno: 0,
        dos: 0,
        tres: 0,
        cuatro: 0,
        suma: 0
    },

    computed:{
        total:{
            function(){
                return this.suma = this.uno + this.dos + this.tres + this.cuatro;
            }
        }
    }
})