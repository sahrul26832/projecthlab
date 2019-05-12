import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.page.html',
  styleUrls: ['./sound.page.scss'],
})
export class SoundPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  backHome(){
    console.log("go to home")

    this.router.navigate(['/home']);

  }
}
