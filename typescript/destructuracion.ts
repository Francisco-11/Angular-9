
(()=>{

    // Destructuración de arreglos y objetos

    const avenger = {
        nombre : 'Steve',
        clave  : 'Capitan América',
        poder  : 'Droga'
    }

    const { nombre, clave, poder } = avenger;

    // console.log(nombre);
    // console.log(clave);
    // console.log(poder);
    
    // Otro tipo de destructuración

    const extraer = ({nombre,clave, poder}:any) => {
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }

    // extraer(avenger);

    const avenger2:string [] = ['Thor', 'IronMan', 'Spiderman'];


    // const [thor,ironman, spiderman] = avenger2;

    // console.log(spiderman);
    
    const extraerArr = ([thor,ironman,spiderman]:string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
        
    }

    extraerArr(avenger2);

})();





