import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { LoginDashboardComponent } from './login-dashboard.component';

import { loginDashboardRoutes } from './login-dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forChild(loginDashboardRoutes),
        SharedModule,
    ],
    declarations: [
        LoginDashboardComponent
    ],
    exports: [
        LoginDashboardComponent
    ]
})
export default class LoginDashboardModule { }
