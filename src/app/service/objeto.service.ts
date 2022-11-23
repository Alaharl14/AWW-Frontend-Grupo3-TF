import { Respuesta4 } from './../model/respuesta4';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Objeto } from '../model/objeto';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  private url: string = "https://aww-backend-grupo3-tf.herokuapp.com/objeto"
  private listaCambio = new Subject<Objeto[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Objeto[]>(this.url);
  }

  insertar(objeto: Objeto) {

    return this.http.post(this.url, objeto);
  }

  modificar(objeto: Objeto) {

    return this.http.put(this.url, objeto);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {
    return this.http.post<Objeto[]>(`${this.url}/buscar`, texto);
  }

  reporte(){
    return this.http.get<Objeto[]>(`${this.url}/reportecuentacategoriapersonal`);
  }

  reporteCantidad(){
    return this.http.get<Respuesta4[]>(`${this.url}/reportes`);
  }

  listarId(id: number) {
    return this.http.get<Objeto>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Objeto[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
