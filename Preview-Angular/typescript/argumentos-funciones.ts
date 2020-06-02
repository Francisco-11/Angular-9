
(function(){

    // Parámetros obligatorios, por defecto y opcionales
    function activar (quien  :string, 
                      momento?:string,
                      objeto :string = 'batiseñal') {
        
            if(momento){
                console.log(`${quien} activó en la ${momento} la ${objeto}`);
                
            }else {
                console.log(`${quien} activó la ${objeto}`);
            }
            
                                                            
    }

    activar('Gordon', 'tarde');

})();





