import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=this.formBuild.group({
    name: [''],
    email: [''],
    mobile: [''],
    userName: [''],
    password: [''],
    role: ['']
  });
  constructor(private formBuild:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }
  register():any{
    console.warn(this.user.value)
    this.userService.RegistrationAsync(this.user.value).
    subscribe((data)=>{
      console.warn(data);
    },(err)=>{
      console.error(err);}
    );
  }

}
