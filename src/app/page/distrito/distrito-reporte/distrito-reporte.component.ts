import { Respuesta3 } from './../../../model/respuesta3';
import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/service/distrito.service';
import { Distrito } from 'src/app/model/distrito';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-distrito-reporte',
  templateUrl: './distrito-reporte.component.html',
  styleUrls: ['./distrito-reporte.component.css']
})
export class DistritoReporteComponent implements OnInit {
  lista: Respuesta3[] = [];
  dataSource: MatTableDataSource<Respuesta3> = new MatTableDataSource();
  displayedColumns:string[]=['nombre_distrito','cantidad'];
  constructor(private distritoService: DistritoService) { }

  ngOnInit(): void {
    {
      this.distritoService.reporteCantidad().subscribe(data => {
        this.lista = data;
        this.dataSource=new MatTableDataSource(data);
      });
       }
  }

}
