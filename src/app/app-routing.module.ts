import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ContactPageComponent } from './contact-page/contact-page.component'
import { CTInfoProjectPageComponent } from './projects/ctinfo-project-page/ctinfo-project-page.component'

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects/ct-info', component: CTInfoProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
