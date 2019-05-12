import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
  data:any;
  constructor(private  router : Router, private route : ActivatedRoute, public navCtrl: NavController,private statusBar: StatusBar) { 
    // this.statusBar.hide();
    this.route.queryParams.subscribe(params=>{
      this.data = params.color;
      console.log(this.data);
    });
  }

  ngOnInit() {
  }
  async ColorScreen(){
    this.router.navigate(['/color-screen']);


  }

}
