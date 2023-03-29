import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CpTableComponent } from './pages/application/table/cp-table/cp-table.component';
import { TwoerComponent } from './pages/twoer/twoer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/table-custom' },
  { path: 'table-custom', component:CpTableComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
