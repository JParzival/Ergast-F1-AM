import { Component, OnInit } from '@angular/core';
import { ErgastService } from 'src/app/servicios/ergast.service';

@Component({
  selector: 'app-circuitos',
  templateUrl: './circuitos.component.html',
  styleUrls: ['./circuitos.component.css']
})
export class CircuitosComponent implements OnInit
{

  displayedColumns: string[] = ['circuitName', 'Location.locality', 'Location.country'];
  dataSource: any[] = [];

  constructor(private ergastService : ErgastService) 
  { 
    this.ergastService.getCircuitos().subscribe( (data:any) => this.dataSource = data );
  }

  ngOnInit() {
  }

}
