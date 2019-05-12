
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Flashlight } from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-flash-light',
  templateUrl: './flash-light.page.html',
  styleUrls: ['./flash-light.page.scss'],
})
export class FlashLightPage implements OnInit {
i=0;
  constructor(public navCtrl: NavController,private router: Router,private route : ActivatedRoute,private flashlight: Flashlight) { 
    console.log(this.i);
  }

  ngOnInit() {
  }
  backHome(){
    this.router.navigate(['/home']);

  }
  //------------------------------------- Flash Nomal ---------------------------------------------//
  flashNomor(){
    this.i++;
    if(this.i%2==0){
      this.flashlight.switchOff();
    }else {
      this.flashlight.switchOn();
    }
  }
  //------------------------------------- Flash Blink ---------------------------------------------//
  flashBlink(){
    console.log("Flash Blink")

    
  }

}
