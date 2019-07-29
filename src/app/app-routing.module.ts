import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CTInfoProjectPageComponent } from './projects/ctinfo-project-page/ctinfo-project-page.component'

const routes: Routes = [
  { path: 'projects/ct-info', component: CTInfoProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
