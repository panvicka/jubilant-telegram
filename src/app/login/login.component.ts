import { User } from './../user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage = "";


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.errorMessage = "";
    this.authService.login(this.user.name, this.user.password).subscribe(
      result => {
        console.log(result);
        if (typeof localStorage !== undefined) {
          localStorage.setItem("token", result.token);
        }
        this.router.navigate(["/dashboard"]);

      }, error => {
        this.errorMessage = "Wrong name or password";

      }
    );
  }

}
