import {Injectable} from "angular2/core";
import {PELICULAS} from "./mock-peliculas";
import {Pelicula} from "../model/pelicula";

@Injectable()

export class PeliculasService{
  getPeliculas(){
    return PELICULAS;
  }

  insertPelicula(pelicula: Pelicula){
		Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(pelicula));
	}
}
