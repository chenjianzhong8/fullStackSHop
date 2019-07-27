import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MessageService } from '../../messages/message.service';

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public registerErrors: string;

  myData: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.initLoginForm();
    this.initRegisterForm();
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  private initRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    });
  }

  //注册 register
  public onRegister() {
    if (this.registerForm.valid) {
      const obj = {
        username: this.registerForm.controls.username.value,
        password: this.registerForm.controls.password.value,
        email: this.registerForm.controls.email.value,
      };

      this.authService.register(obj)
        .subscribe(
          data => {

            this.myData = data;
            if (this.myData.code == "0") {

              this.messageService.add('Account created successfully. Please login with your new credentials!');

              this.loginForm.setValue({ username: this.registerForm.value.username, password: '' });
              this.initRegisterForm();
            }
            else {
              this.messageService.add(this.myData.msg);  // 注意： msg 是server 给的key
            }
          }
        );
    }
  }

  // 登录： login
  public onLogin() {
    const obj = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.authService.login(obj)
      .subscribe(
        data => {
          this.myData = data;
          if (this.myData.code == "0") {  // login successful
            this.messageService.add('Login successful!');
            this.router.navigate(['/home']);
          }
          else
            this.messageService.add(this.myData.msg);
        }
      );
  }

}