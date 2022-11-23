import { Respuesta5 } from './../model/respuesta5';
import { Respuesta2 } from './../model/respuesta2';
import { Respuesta } from './../model/respuesta';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { Reporte } from '../model/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url: string = "https://aww-backend-grupo3-tf.herokuapp.com/reporte"
  private listaCambio = new Subject<Reporte[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Reporte[]>(this.url);
  }

  insertar(reporte: Reporte) {

    return this.http.post(this.url, reporte);
  }

  modificar(reporte: Reporte) {

    return this.http.put(this.url, reporte);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {
    return this.http.post<Reporte[]>(`${this.url}/buscar`, texto);
  }

  buscar1(texto:string) {
    console.log("algo")
  if (texto.length != 0) {
   return this.http.post<Reporte[]>(`${this.url}/buscar`, texto.toLowerCase());
  }
    return EMPTY;
  }

  reporte(){
    return this.http.get<Reporte[]>(`${this.url}/buscarultimosdias`);
  }

  reporte2(){
    return this.http.get<Reporte[]>(`${this.url}/reportetomado`);
  }

  reporteCantidad(){
    return this.http.get<Respuesta2[]>(`${this.url}/reportes`);
  }

  reporteCantidad2(){
    return this.http.get<Respuesta5[]>(`${this.url}/reportes2`);
  }

  listarId(id: number) {
    return this.http.get<Reporte>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Reporte[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
