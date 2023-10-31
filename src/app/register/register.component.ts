import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService, private service : AuthService, private route : Router){

  }

  registerForm=this.builder.group({
    id : this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name : this.builder.control('',Validators.required),
    password : this.builder.control('',Validators.required),
    email : this.builder.control('', Validators.required),
    gender : this.builder.control('male'),
    role : this.builder.control(''),
    isActive : this.builder.control(false)
  });

  proceedRegisteration(){
    if(this.registerForm.valid){
      this.service.registerUser(this.registerForm.value).subscribe(res => { 
        this.toastr.success('Registered Successfully');
        this.route.navigate(['login'])
    })
    }
    else{
        this.toastr.warning('Please Enter valid data')
    }
  }
  

}
