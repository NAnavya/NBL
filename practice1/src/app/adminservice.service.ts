import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  getAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>("http://localhost:8080/admin/get");
}
getAdminById(id:any):Observable<Admin>{
  return this.http.get<Admin>("http://localhost:8080/admin/get/"+id);
}
}
