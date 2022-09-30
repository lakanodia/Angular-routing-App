import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
   logOut(){
    console.log(this.auth);
    this.router.navigate(['login'])
   }

}
