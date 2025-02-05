import { Routes } from '@angular/router';
import { Invoice } from './crud/crud';

export default [
    { path: 'invoice', component: Invoice },
    { path: '**', redirectTo: '/notfound' },
    //{path:'invoice',component: Invoice }
] as Routes;
