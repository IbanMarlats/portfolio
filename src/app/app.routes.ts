import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PalmitoComponent } from './pages/palmito/palmito.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompetencesComponent } from './pages/competences/competences.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige "/" vers "/home"
  { path: 'home', component: HomeComponent },
  { path: 'palmito', component: PalmitoComponent },
  {path:'projets', component: ProjetsComponent},
  {path:'contact', component: ContactComponent},
  {path:'competences', component: CompetencesComponent}
];
