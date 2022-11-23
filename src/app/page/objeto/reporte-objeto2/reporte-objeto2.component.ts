import { Respuesta4 } from './../../../model/respuesta4';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ObjetoService } from 'src/app/service/objeto.service';

@Component({
  selector: 'app-reporte-objeto2',
  templateUrl: './reporte-objeto2.component.html',
  styleUrls: ['./reporte-objeto2.component.css']
})
export class ReporteObjeto2Component implements OnInit {
  lista: Respuesta4[] = [];
  dataSource: MatTableDataSource<Respuesta4> = new MatTableDataSource();
  displayedColumns:string[]=['nombre_distrito','cantidad'];
  constructor(private objetoService: ObjetoService) { }

  ngOnInit(): void {
    {
      this.objetoService.reporteCantidad().subscribe(data => {
        this.lista = data;
        this.dataSource=new MatTableDataSource(data);
      });
       }
  }

}
