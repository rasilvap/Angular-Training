System.register(['angular2/core', "../services/peliculas.service", "angular2/router", "../model/SomeData"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, peliculas_service_1, router_1, SomeData_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_service_1_1) {
                peliculas_service_1 = peliculas_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SomeData_1_1) {
                SomeData_1 = SomeData_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            PeliculasListComponent = (function () {
                function PeliculasListComponent(PeliculasService) {
                    this.PeliculasService = PeliculasService;
                    this.momstrarDatos = false;
                    //this.datoServicio=PeliculasService.getPeliculas();
                    this.peliculas = PeliculasService.getPeliculas();
                    console.log(this.peliculas);
                    //this.pelicula = new Pelicula(1,'Civil war', 'Fulano',2016);
                    this.pelicula = this.peliculas[0];
                    this.peliculaElegida = this.peliculas[0];
                    this.price = ["1000", "2000", "3000"];
                    this.debug();
                    this.model = new SomeData_1.SomeData(this.price);
                    this.model = {
                        sex: "male"
                    };
                }
                PeliculasListComponent.prototype.getValue = function (price) {
                    this.model.price = price;
                };
                PeliculasListComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo == null) {
                        console.log(this.pelicula);
                    }
                    else {
                        console.log(this.pelicula.titulo);
                    }
                };
                PeliculasListComponent.prototype.onShowHide = function (value) {
                    this.momstrarDatos = value;
                };
                PeliculasListComponent.prototype.onCambiarPelicula = function (pelicula) {
                    this.pelicula = pelicula;
                    this.peliculaElegida = pelicula;
                };
                PeliculasListComponent = __decorate([
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: 'app/view/peliculas-list.html',
                        providers: [peliculas_service_1.PeliculasService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [peliculas_service_1.PeliculasService])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map