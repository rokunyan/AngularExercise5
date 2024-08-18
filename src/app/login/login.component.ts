import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){

    this.form = this.fb.group({
      email: ['', new EmailValidator],
      password: ['', Validators.required]
    })
      
  }
   
  
  login() {
    let user = this.authService.isValidCred(this.form.value.email, this.form.value.password)
    
    if(!user){
      alert("Invalid username or password")
    } else{
      this.router.navigateByUrl('/blog')
    }

  }
}
