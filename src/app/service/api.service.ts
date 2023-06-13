import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MySaree } from 'src/model/mySaree';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl="http://localhost:3000/saree"
  constructor(private http:HttpClient) { }

  // getAllSarees function
  getAllSarees():Observable<MySaree>{
    return this.http.get(this.baseUrl)
  }

  // function to view saree - to fetch particular saree details in view page
  viewSaree(sareeId:any){
    return this.http.get(`${this.baseUrl}/${sareeId}`)
  }

  // function to get group name in viewSaree page
  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/group/'+groupId)
  }

  // function to fetch all group from local host
  getAllGroups(){
return this.http.get('http://localhost:3000/group')
  }

  // function to add new saree details in add page
  addSaree(sareeBody:any){
return this.http.post(this.baseUrl,sareeBody)
  }

  // function for deleting
  deleteSaree(sareeId:any){
    return this.http.delete(`${this.baseUrl}/${sareeId}`)
  }

  // function to perform update
  updateSaree(sareeId:any,sareeBody:any){
    return this.http.put(`${this.baseUrl}/${sareeId}`,sareeBody)
  }
}
