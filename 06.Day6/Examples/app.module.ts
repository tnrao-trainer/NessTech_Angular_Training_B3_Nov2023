import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpDemo1Component } from './http-demo1/http-demo1.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpDemo2Component } from './http-demo2/http-demo2.component';
import { HttpDemo3Component } from './http-demo3/http-demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpDemo1Component,
    HttpDemo2Component,
    HttpDemo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,   // Required for Reactive Forms 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
