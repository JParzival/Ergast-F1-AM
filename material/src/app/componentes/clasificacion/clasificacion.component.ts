import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../servicios/ergast.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit 
{

  dataSource: any[] = [];
  displayedColumns: string[] = ['position', 'Driver.driverId', 'points', 'wins'];

  constructor( private ergastService: ErgastService ) 
  { 
    this.ergastService.getClasificacion().subscribe( (data:any) => this.dataSource = data );
  }

  ngOnInit()
  {
  }

}
