System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, 'Civil war', 'Fulano', 2016),
                new pelicula_1.Pelicula(2, 'Pitufos', 'Fulano', 2016),
                new pelicula_1.Pelicula(3, 'Kunfu Panda', 'Fulano', 2016),
                new pelicula_1.Pelicula(4, 'Dead Pool', 'Fulano', 2016),
                new pelicula_1.Pelicula(5, 'Batman Vs Superman', 'Fulano', null),
                new pelicula_1.Pelicula(6, 'Spiderman', 'Fulano', null)
            ]);
        }
    }
});
//# sourceMappingURL=mock-peliculas.js.map