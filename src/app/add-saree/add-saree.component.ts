import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MySaree } from 'src/model/mySaree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-saree',
  templateUrl: './add-saree.component.html',
  styleUrls: ['./add-saree.component.css']
})
export class AddSareeComponent {
sareeModel:string='' //variable- used for one input field(model in add contact) to see if form-module is working
saree:MySaree={} //object - used to store all input field's data that the user has enterd and access them by object.key(ie,saree.model, saree.id)
allGroups:any[]=[]

  constructor(private api:ApiService, private router:Router ){
    this.saree.groupId="Select A Group"
  }

  
ngOnInit():void{
  this.api.getAllGroups().subscribe((data:any) => {
    console.log(data);
    this.allGroups=data;
  })
}
addSaree(){
  this.api.addSaree(this.saree).subscribe((data:any) =>{
this.router.navigateByUrl('')
  })
}
}
