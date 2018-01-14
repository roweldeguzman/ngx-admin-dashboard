/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

/* Component */
import { LoginSecondComponent } from './loginSecond.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: LoginSecondComponent
	}, {
		path: '**', component: LoginSecondComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [LoginSecondComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class LoginSecondModule { }
