
(()=>{
        
    const sumar = (a:number, b:number):number =>{
        return a+b;
    }

    // Casos cuando typescriopt no puede inferir el tipo

    const nombre = ():string => 'Hola Francisco'
    

    // Aqui no se q tipo de dato devuelve
    const obtenerSalario = ():Promise<string> =>{
        return new Promise ((resolve,reject)=>{
            resolve('Fernando');
        });
    }

    obtenerSalario().then(a =>console.log(a.toUpperCase()));
    

})();





