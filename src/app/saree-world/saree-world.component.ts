import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MySaree } from 'src/model/mySaree';

@Component({
  selector: 'app-saree-world',
  templateUrl: './saree-world.component.html',
  styleUrls: ['./saree-world.component.css']
})
export class SareeWorldComponent {

loginDate:any

allSarees:MySaree[]=[]

searchKey:string=''

constructor(private api:ApiService){
  this.loginDate=new Date()
}

ngOnInit():void{
 
this.getAllSarees()
  
}

getAllSarees(){
  this.api.getAllSarees().subscribe((data:any)=>{
    console.log(data);
    this.allSarees=data;
  })
}

colorChange(){
  alert('color change')
}
search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value;
  
}

deleteSaree(sareeId:any){
  this.api.deleteSaree(sareeId).subscribe((data:any) =>{
    alert("Deleted");
    this.getAllSarees()
  })
}

}
