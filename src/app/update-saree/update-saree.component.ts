import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MySaree } from 'src/model/mySaree';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-update-saree',
  templateUrl: './update-saree.component.html',
  styleUrls: ['./update-saree.component.css']
})
export class UpdateSareeComponent implements OnInit{

  
sareeId:string=''

saree:MySaree={}

group:MyGroup[]=[] as MyGroup[]

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService,private route:Router){}

  ngOnInit():void{
this.activatedRoute.params.subscribe((data:any) =>{
  console.log(data);
  console.log(data.Id);
this.sareeId=data.Id
console.log(this.sareeId);
this.api.viewSaree(this.sareeId).subscribe((data:any) =>{
  console.log(data);
  this.saree=data
  
})
this.api.getAllGroups().subscribe((data:any) =>{
  console.log(data);
  this.group=data;
  
})

  
})
  }

  updateContact(){
    this.api.updateSaree(this.sareeId,this.saree).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }

}
