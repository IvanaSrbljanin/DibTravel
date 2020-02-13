import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';
import { FormControl, Validators,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService) { }

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required)
    });


    if (this.sessionService.isAuthenticated()) {
      this.router.navigate(['albums']);
    }
  }


  onSubmit(): void {
    if (this.userName && this.password) {
      this.userService.get()
        .subscribe(user => {
          let userId = user["id"];
          let username = user["username"];
          this.sessionService.setUserId(userId, username);
          this.router.navigate(['albums']);
        });
    }
  }
}
