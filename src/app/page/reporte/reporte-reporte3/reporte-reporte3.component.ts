import { Respuesta2 } from './../../../model/respuesta2';
import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte-reporte3',
  templateUrl: './reporte-reporte3.component.html',
  styleUrls: ['./reporte-reporte3.component.css']
})
export class ReporteReporte3Component implements OnInit {
  lista: Respuesta2[] = [];
  dataSource: MatTableDataSource<Respuesta2> = new MatTableDataSource();
  displayedColumns:string[]=['nombre_categoria_objeto','cantidad'];
  constructor(private ps: ReporteService) { }

  ngOnInit(): void {
    this.ps.reporteCantidad().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
