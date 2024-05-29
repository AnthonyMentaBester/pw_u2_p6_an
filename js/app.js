console.log(Vue);
/*VUE su forma de trabajar es atravez de opciones definidas 
options API*/
const app = Vue.createApp({

    /*utiliza progrmacion declarativa como plus que es el codigo JAVASCRIPT */
    /*todo lo que esta dentro de {{}} lo vhe como JAVASCRIPT */
    template: `
    <h1>HOLA MUNDO :3 desde Vue.js </h1>
    
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{true?'True':'False'}}</p>`

});

app.mount("#myApp");


