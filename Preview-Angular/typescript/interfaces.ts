
(()=>{

        // Interfaces en TypeScript
        // Una forma de definir reglas
        
        interface Xmen {
                nombre:string,
                edad  :number;
        }

        const enviarMision = ( xmen:Xmen ) => {
                console.log(`Enviando a ${ xmen.nombre} a la misión`);
        }

        const regresarAlCuartel = ( xmen:Xmen) => {
                console.log(`Enviando a ${ xmen.nombre } a la misión`);
        }

        const wolverine: Xmen = {
                nombre: 'Logan',
                edad: 60
        }

        enviarMision(wolverine);
        regresarAlCuartel(wolverine);

})();





