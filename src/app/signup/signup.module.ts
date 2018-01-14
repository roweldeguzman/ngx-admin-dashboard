/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

/* Component */
import {SignupComponent } from './signup.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: SignupComponent
	},{
		path: '**', component: SignupComponent
	}
];
  

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [SignupComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class SignupModule { }
