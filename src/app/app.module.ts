import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';

import { FooterComponent } from './footer/footer.component';
import { FotoComponent } from './foto/foto.component';
import { AlbunsComponent } from './albuns/albuns.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    
    FooterComponent,
    
    FotoComponent,
    
    AlbunsComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
