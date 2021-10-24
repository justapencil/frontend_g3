import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LandingComponent } from './components/layouts/landing/landing.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,SharedModule, RouterModule
  ],
  exports: [HeaderComponent,FooterComponent,LandingComponent]
})
export class CoreModule { }
