import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: "dashboard",
    component: DashboardComponent,
    data: { titulo: 'Dashboard' }

  },

  { path: 'config', component: ConfigComponent, data: { titulo: 'Configuración' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
