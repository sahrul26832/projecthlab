import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'flash-light', loadChildren: './flash-light/flash-light.module#FlashLightPageModule' },
  { path: 'color-screen', loadChildren: './color-screen/color-screen.module#ColorScreenPageModule' },
  { path: 'sound', loadChildren: './sound/sound.module#SoundPageModule' },
  { path: 'control', loadChildren: './control/control.module#ControlPageModule' },
  { path: 'color', loadChildren: './color/color.module#ColorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
