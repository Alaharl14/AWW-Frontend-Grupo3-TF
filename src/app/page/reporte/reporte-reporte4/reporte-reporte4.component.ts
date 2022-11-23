import { Respuesta5 } from './../../../model/respuesta5';
import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte-reporte4',
  templateUrl: './reporte-reporte4.component.html',
  styleUrls: ['./reporte-reporte4.component.css']
})
export class ReporteReporte4Component implements OnInit {
  lista: Respuesta5[] = [];
  dataSource: MatTableDataSource<Respuesta5> = new MatTableDataSource();
  displayedColumns:string[]=['nombre_estado_reporte','cantidad'];
  constructor(private ps: ReporteService,) { }

  ngOnInit(): void {
    this.ps.reporteCantidad2().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
