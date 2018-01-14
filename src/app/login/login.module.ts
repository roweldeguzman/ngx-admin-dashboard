/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

/* Component */
import {LoginComponent } from './login.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: LoginComponent
	},{
		path: '**', component: LoginComponent
	}
];
  

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [LoginComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
