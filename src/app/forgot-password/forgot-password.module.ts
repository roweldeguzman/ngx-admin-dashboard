/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

/* Component */
import { ForgotPasswordComponent } from './forgot-password.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ForgotPasswordComponent
	}, {
		path: '**', component: ForgotPasswordComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [ForgotPasswordComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class ForgotPasswordModule { }
