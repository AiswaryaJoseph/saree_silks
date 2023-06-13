import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SareeWorldComponent } from './saree-world/saree-world.component';
import { AddSareeComponent } from './add-saree/add-saree.component';
import { UpdateSareeComponent } from './update-saree/update-saree.component';
import { ViewSareeComponent } from './view-saree/view-saree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // localhost - http://localhost:4200/
  {
    path:'', redirectTo:'saree/admin',pathMatch:'full'
  },
  // saree-world -http://localhost:4200/saree/admin
  {
    path:'saree/admin',component:SareeWorldComponent}
    ,
  // add-Saree- http://localhost:4200/saree/add
  {
    path:'saree/add',component:AddSareeComponent
  },
  // updateSaree- http://localhost:4200/saree/update
  {
    path:'saree/update/:Id',component:UpdateSareeComponent
  },
  // viewSaree- http://localhost:4200/saree/view
  {
    path:'saree/view/:sareeId',component:ViewSareeComponent
  },
// page not found
{
  path:'**',component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
