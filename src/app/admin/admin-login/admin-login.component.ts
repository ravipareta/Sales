import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm=this.formBuilder.group({
    "UserName":[''],
    "Passsword":['']
  })

  constructor(private formBuilder:FormBuilder,private userService:UserService ,private router:Router, private adminComp:AdminComponent) { }

  ngOnInit(): void {
  }
   login():any
  {
    console.log("Login Form",this.loginForm.value);
    this.userService.Login(this.loginForm.value).subscribe((data)=>{
      console.warn("success-response",data);
      localStorage.setItem("token",data);
      this.router.navigate(['admin']);

    },(err)=>{
      console.error("error-response",err);
      localStorage.removeItem("token");
    }
    );
  }
    logout():any{
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
    }
  }


