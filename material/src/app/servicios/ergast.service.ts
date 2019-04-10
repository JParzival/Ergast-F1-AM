import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})

export class ErgastService
{

  constructor(private http: HttpClient)
  {
  }

  getQuery(parametros: string)
  {
    const url=`https://ergast.com/api/f1/${parametros}`;
    return this.http.get(url);
  }

  getClasificacion()
  {
    return this.getQuery('current/driverStandings.json')
    .pipe( map( (data:any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings) );
  }

  getCircuitos()
  {
    return this.getQuery('current/circuits.json')
    .pipe( map ( (data:any) => data.MRData.CircuitTable.Circuits ) );
  }

  getCalendario()
  {

  }
}
