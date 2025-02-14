import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/reactive-form/reactive-form.component').then((m) => m.ReactiveFormComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/reactive-form/reactive-form.component').then((m) => m.ReactiveFormComponent),
  },
  {
    path: 'reactiveForm',
    loadComponent: () => import('./pages/reactive-form/reactive-form.component').then((m) => m.ReactiveFormComponent),
  },
  {
    path: 'templateForm',
    loadComponent: () => import('./pages/template-form/template-form.component').then((m) => m.TemplateFormComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./layouts/layout/layout.component').then((m) => m.LayoutComponent),
  },
];
