console.log(Vue);

//crear una lista estudiantes
const estudiantes = [{nombre:"Anthony",apellido:"Narvaez"},
{nombre:"Carmen",apellido:"Aguilar"},
{nombre:"Juan",apellido:"Salazar"},
{nombre:"Roberto",apellido:"Ramos"},
{nombre:"Xavier",apellido:"Contreras"},
];
const estudiate2 = {nombre:"Andrea",apellido:"Alvares"}

//para conectar aqui usamos propiedades reactivas 

/*VUE su forma de trabajar es atravez de opciones definidas 
options API*/
const app = Vue.createApp({

    /*utiliza progrmacion declarativa como plus que es el codigo JAVASCRIPT */
    /*todo lo que esta dentro de {{}} lo vhe como JAVASCRIPT */
   // template: `
    //<h1>HOLA MUNDO :3 desde Vue.js </h1>
    
    //<p>{{1+1}}</p>
    //<p>{{[1,2,3,4]}}</p>
    //<p>{{true?'True':'False'}}</p>`

    //forma de declarar propiedad reactiva 
    data(){
        return{
            mensaje: "hola Mundo Propiedad Reactiva",
            valor: 7,
            lista: estudiantes

        }
    }
    //otra funcion de options API va con ","
    //toda propiedad reactiva que se usa dentro del codigo javascript debe tener "this"
    , methods: {
        cambiarTexto(){
            this.mensaje = "El texto ha sido Cambiado";
            

        }, sumar(){
            this.valor = this.valor +100;
            
        }, agregarDato(){
            this.lista.unshift(estudiate2);

        }
    }



});

app.mount("#myApp");


