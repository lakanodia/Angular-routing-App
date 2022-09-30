import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  });

  onSubmit(): void{
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((result) =>{
        this.router.navigate(['admin/home'])
      },
      (err: Error) =>{
        alert(err.message);
      })
      
    }
    
  }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin/home'])
    }


  }

}
