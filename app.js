(function () {
    // Promesas y au tipado en TypeScript
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(function (montoActual) {
        console.log("Me queda " + montoActual);
    })["catch"](function (err) {
        console.warn(err);
    });
})();
