import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyFotoComponent } from './my-foto/my-foto.component';
import { MySertComponent } from './my-sert/my-sert.component';
import { FormsModule } from '@angular/forms';











@NgModule({
   declarations: [
      AppComponent,
      MyWorkComponent,
      MyFotoComponent,
      MySertComponent
   ],
   imports: [
    FormsModule,


    BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule
   ],


   providers: [],
   bootstrap: [
      AppComponent
   ]

})
export class AppModule { }
