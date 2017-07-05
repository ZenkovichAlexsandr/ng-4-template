import { RouterModule, Routes }  from '@angular/router';
import { States } from './constants/States';

const routes: Routes = [
    // DEFAULT ROUTE
    {
        path: '',
        redirectTo: States.LOGIN,
        pathMatch: 'full',
    },
    // LOGIN DASHBOARD
    {
        path: States.LOGIN,
        loadChildren: './components/containers/login-dashboard/login-dashboard.module'
    }
];

export const routing = RouterModule.forRoot(routes);
