// Importar el núcleo de Angular
import {Component} from 'angular2/core';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'contacto',
    templateUrl: 'app/view/contacto.html',
})


// Clase del componente donde iran los datos y funcionalidades
export class ContactoComponent {

public titulo:string = 'Contacto';

}
