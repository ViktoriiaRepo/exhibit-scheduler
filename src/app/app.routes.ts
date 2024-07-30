import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExhibitionsComponent } from './components/exhibitions/exhibitions.component';
import { DesignersComponent } from './components/designers/designers.component';
import { TechnologistsComponent } from './components/technologists/technologists.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { EmployeesComponent } from './components/employees/employees.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'designers', component: DesignersComponent },
  { path: 'technologists', component: TechnologistsComponent },
  { path: 'contractors', component: ContractorsComponent },
  { path: 'employees', component: EmployeesComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];
