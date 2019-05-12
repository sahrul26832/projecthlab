import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-screen',
  templateUrl: './color-screen.page.html',
  styleUrls: ['./color-screen.page.scss'],
})
export class ColorScreenPage implements OnInit {
  colors:string;
  value:String;
  constructor(private router: Router) { 
  
  }
  
  ngOnInit() {
  }
  backHome(){
    console.log("go to home")

    this.router.navigate(['/home']);

  }
  colorRed(){
    let colorParametter ={
      queryParams : {
        color : "rgb(255,0,0)"
      }
    }
    this.router.navigate(['/color'],colorParametter);
  }
  // 
  getColor(event){
    var color = event.target.id;
    let colorParametter ={
      queryParams : {
        color : color
      }
    }
    this.router.navigate(['/color'],colorParametter);
  }
}
