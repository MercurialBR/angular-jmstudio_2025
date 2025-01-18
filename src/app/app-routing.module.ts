import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProceduresComponent } from './pages/procedures/procedures.component';
import { CourseComponent } from './pages/course/course.component';
import { PageStudioComponent } from './pages/page-studio/page-studio.component';
import { PageAwardsComponent } from './pages/page-awards/page-awards.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'procedimentos', component: ProceduresComponent},
  {path: 'cursos', component: CourseComponent},
  {path: 'studio', component: PageStudioComponent},
  {path: 'parcerias', component: PageAwardsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
