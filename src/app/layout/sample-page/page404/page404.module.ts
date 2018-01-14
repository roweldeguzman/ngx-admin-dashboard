/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { Page404Component } from './page404.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: Page404Component
	}, {
		path: '**', component: Page404Component
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [Page404Component],
	schemas: [NO_ERRORS_SCHEMA]
})
export class Page404Module { }

