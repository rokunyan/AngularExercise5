import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validUsers =  [{
    id: 1,
    email: 'email1@sample.com',
    password: '123456'
  },{
    id: 2,
    email: 'email2@sample.com',
    password: '456789'
  },{
    id: 3,
    email: 'email3@sample.com',
    password: '123789'
  }
]
  
session : any
constructor() {
  let session: any = localStorage.getItem('session');

  if(session){
    this.session = JSON.parse(session)
  }
}

isValidCred(email: string, password: string){
  let user = this.validUsers.find((u) => u.email === email && u.password === password)
  if(user){
    this.session = user;
    localStorage.setItem('session', JSON.stringify(this.session))
  }

  return user
}
  

}
