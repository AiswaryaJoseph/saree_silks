import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-saree',
  templateUrl: './view-saree.component.html',
  styleUrls: ['./view-saree.component.css']
})
export class ViewSareeComponent implements OnInit{


sareeId:string=''
saree:any=''
groupId:any=''
groupName:string=''
loginDate:any
constructor(private activatedRoute:ActivatedRoute, private api:ApiService){
  this.loginDate= new Date()
}


ngOnInit():void{
this.activatedRoute.params.subscribe((data:any) =>{
  console.log(data);
  this.sareeId=data.sareeId;
    console.log(this.sareeId);

  // api call
  this.api.viewSaree(this.sareeId).subscribe((data:any) =>{
    console.log(data);
    this.saree=data;
    this.groupId=data.groupId
    console.log(this.saree);

    // api call to get group name
    this.api.getGroupName(this.groupId).subscribe((data:any) =>{
      console.log(data);
      this.groupName=data.name;
      console.log(this.groupName);
      
      
    })
    
    })
  
  
})
}

}
