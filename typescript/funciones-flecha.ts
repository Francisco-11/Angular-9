
(function(){

    // funcion normal asignada a una variable

    const miFuncion = function(a:string) {

    }

    // funciones de flecha
    
    const miFuncionF = (a:string) => a.toUpperCase();


    const sumaF = (a:number, b:number) => a+b;

    console.log(sumaF(5,4));

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(()=> {
                console.log(`${this.nombre} Smash!!!`);
                
            },1000);
        }
    }


    hulk.smash();

})();





