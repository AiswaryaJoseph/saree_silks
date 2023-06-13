import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SareeWorldComponent } from './saree-world/saree-world.component';
import { AddSareeComponent } from './add-saree/add-saree.component';
import { UpdateSareeComponent } from './update-saree/update-saree.component';
import { ViewSareeComponent } from './view-saree/view-saree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SareeWorldComponent,
    AddSareeComponent,
    UpdateSareeComponent,
    ViewSareeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
