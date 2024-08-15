import { Component } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrl: './profiler.component.css'
})
export class ProfilerComponent {

  profileForm : FormGroup;

  constructor(private fb:FormBuilder){
    this.profileForm = this.fb.group({
      email:'',
      name:'',
      bio:'',
      active: true,
    })
  }

  onSubmit = () =>{
  }
}
