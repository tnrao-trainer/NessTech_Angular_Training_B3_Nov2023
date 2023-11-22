import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  greeting(uname:string) : string
  {
    let message = `Hi ${uname}, Good afternoon. How are you?`;
    return message;
  }
}
