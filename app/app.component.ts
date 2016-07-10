// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {ROUTER_DIRECTIVES, RouteConfig,Router} from "angular2/router";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html',
    directives: [PeliculasListComponent,
      PeliculasFooterComponent,
      ContactoComponent,
      CrearPeliculaComponent,
      ROUTER_DIRECTIVES],
    styleUrls: ['../assets/css/styles.css']
})

@RouteConfig([
  { path: "/peliculas", name: "Peliculas",component:PeliculasListComponent, useAsDefault:true },
  { path: "/crear-pelicula", name: "CrearPelicula",component:CrearPeliculaComponent},
  {path: "/crear-pelicula/:titulo/:director/:anio", name: "CrearPeliculaBasadaEnOtra", component: CrearPeliculaComponent},
  { path: "/contacto", name: "Contacto",component:ContactoComponent},
])

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {

public titulo:string = 'Peliculas con Angular 2';



}
