import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  backHome(){
    console.log("go to home")

    this.router.navigate(['/home']);

  }


}
