import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (component) => component.LandingComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(
        (component) => component.AboutComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (component) => component.ProjectsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (component) => component.ContactComponent
      ),
  },
];
