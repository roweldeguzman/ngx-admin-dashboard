/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

/* Component */
import {HomeComponent } from './home.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: HomeComponent
	},{
		path: '**', component: HomeComponent
	}
];
  

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [HomeComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }

