import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FlashLightPage } from '../flash-light/flash-light.page';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-home',

  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataReturned: any;
  constructor(private modalController: ModalController, private router: Router, navCtrl: NavController,private statusBar: StatusBar) {
    this.statusBar.hide();
  }
  async flasLight() {
    // const modal = await this.modalController.create({
    //   component: FlashLightPage,
    // });

    // return await modal.present();
    this.router.navigate(['/flash-light']);
    // 

  }
  async ColorScreen() {
    this.router.navigate(['/color-screen']);

  }

  async Sound() {
    this.router.navigate(['/sound']);
  }

  async control() {
    this.router.navigate(['/control']);
  }
}
