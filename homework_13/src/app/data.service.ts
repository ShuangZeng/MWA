import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getOnlineDate(){
    return this.http.get('https://randomuser.me/api/?results=10')
  }

  getCachedData(){
    return JSON.parse(localStorage.getItem('data'));
  }
  getUserByUUID(id){
   const data = JSON.parse(localStorage.getItem('data')).results;
   
    return data.filter(d=> id === d.login.uuid)
  }
}
