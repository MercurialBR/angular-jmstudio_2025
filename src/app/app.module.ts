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
import { ProceduresComponent } from './pages/procedures/procedures.component';
import { ModelCourseComponent } from './pages/components/model-course/model-course.component';
import { GalleryComponent } from './pages/components/gallery/gallery.component';
import { PhotosModel1Component } from './pages/components/gallery/photos-model1/photos-model1.component';
import { PhotosModel2Component } from './pages/components/gallery/photos-model2/photos-model2.component';

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
    FloatingButtonComponent,
    ProceduresComponent,
    ModelCourseComponent,
    GalleryComponent,
    PhotosModel1Component,
    PhotosModel2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
