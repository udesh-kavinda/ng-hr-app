import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }
  apiurl='http://localhost:3000/user';

  getAll(){
    return this.http.get(this.apiurl)
  }
  getById(id : any){
    return this.http.get(this.apiurl+'/'+id)
  }

  registerUser(inptdata : any){
    return this.http.post(this.apiurl,inptdata)
  }
  updateUser(id : any, inptdata : any){
    return this.http.post(this.apiurl+'/'+id,inptdata)
  }
}

