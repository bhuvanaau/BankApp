import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banks } from '../app/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  apiUrl = 'https://vast-shore-74260.herokuapp.com';


  constructor(private http : HttpClient) { }

  getBanks() : Observable<Banks[]>{
    return this.http.get<Banks[]>(this.apiUrl + '/banks?city=MUMBAI');
  }

  getBankList(city: any) {
    const myCity = city.toUpperCase();
    return this.http.get<Banks[]>(this.apiUrl + '/banks?city=' + myCity);
  }


}
