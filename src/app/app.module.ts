import { Flashlight } from '@ionic-native/flashlight/ngx';
import { FlashLightPageModule } from './flash-light/flash-light.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlashLightPage } from './flash-light/flash-light.page';
import {HomePage} from './home/home.page';
import { HomePageModule } from './home/home.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FlashLightPageModule,
    HomePageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
