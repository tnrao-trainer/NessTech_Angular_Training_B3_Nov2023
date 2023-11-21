import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { HighLighterDirective } from './high-lighter.directive';
import { IsAdminDirective } from './is-admin.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
 
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HighLighterDirective,
    IsAdminDirective,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule   // Required for Reactive Forms 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
