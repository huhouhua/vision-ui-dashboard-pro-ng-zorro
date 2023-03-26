import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TwoerComponent } from './pages/twoer/twoer.component';
import { CpTableComponent } from './pages/table/cp-table/cp-table.component';
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
