import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
} )
export class DataService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/depts";


  constructor(private httpObj: HttpClient) {
  }

  getData():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.url);
  }

  addData(dataObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, dataObj);
  }

}
