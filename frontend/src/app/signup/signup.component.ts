import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,Form} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../sharedModule/service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userform: FormGroup;
  submitted = false;
  text='Signup to continue';

  constructor(private formBuilder: FormBuilder,
              private userService: LoginService,
              private router: Router
              ) { 
    this.userform = this.formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
  }

  get f() { return this.userform.controls; }

  onSubmit(userform:FormGroup){
    this.submitted = true;
    if (this.userform.invalid) {
      return;
  }
    this.userService.register(this.userform.value).subscribe(data => {
      if(data==true){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/register']);
      }
    });

  }

}
