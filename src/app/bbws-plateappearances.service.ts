import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BbwsPlateappearancesService {

  public playerID = undefined;

  private readonly base_url = 'http://localhost:8080/bbws/api';
  
  constructor(private http: HttpClient) { }

  list(player:string):Observable<any> {

    if ( player == undefined) {
      // if not search term, return empty array.
      console.log("BbwsPlateappearancesService.list.ERROR -> Player must not be empty");
      return of([]);
    }

    const url = `${this.base_url}/pa?search=${player}`;
    console.log("BbwsPlateappearancesService.list.INFO -> http service: " + url);
    return this.http.get( url);
  }

  listLastTen(player:string):Observable<any> {

    if ( player == undefined) {
      // if not search term, return empty array.
      console.log("BbwsPlateappearancesService.list.ERROR -> Player must not be empty");
      return of([]);
    }

    const url = `${this.base_url}/pa?search=${player}&limit=10`;
    console.log("BbwsPlateappearancesService.list.INFO -> http service: " + url);
    return this.http.get( url);
  }
}
