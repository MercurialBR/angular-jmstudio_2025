import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/components/banner/banner.component';
import { NavBarComponent } from './pages/components/nav-bar/nav-bar.component';
import { BtnHamburguerComponent } from './pages/components/nav-bar/btn-hamburguer/btn-hamburguer.component';
import { CardsComponent } from './pages/components/cards/cards.component';
import { CardComponent } from './pages/components/cards/card/card.component';
import { CursosComponent } from './pages/components/cursos/cursos.component';
import { StudioComponent } from './pages/components/studio/studio.component';
import { LocationComponent } from './pages/components/location/location.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { FloatingButtonComponent } from './pages/components/floating-button/floating-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavBarComponent,
    BtnHamburguerComponent,
    CardsComponent,
    CardComponent,
    CursosComponent,
    StudioComponent,
    LocationComponent,
    FooterComponent,
    FloatingButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
