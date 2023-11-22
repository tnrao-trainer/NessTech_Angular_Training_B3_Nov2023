import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HelloService } from './hello.service';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { DataService } from './data.service';
import { EmpDbDataService } from './emp-db-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule   // Required for Reactive Forms 
  ],
  providers: [
    { provide :  DataService,   useClass :   EmpDbDataService  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
