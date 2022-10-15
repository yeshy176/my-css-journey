import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { AnimationsComponent } from './animations/animations.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';



@NgModule({
  declarations: [
    CssComponent,
    AnimationsComponent,
    CircularProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CssComponent
  ]
})
export class CssModule { }
