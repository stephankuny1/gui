import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  public getPvaData(): Observable<any> {
    const headers = new HttpHeaders()
     // .set("access-control-allow-origin", "http://localhost:8099");
    return this.http.get("http://192.168.1.150:8098/api/data", { headers });

  }
}
