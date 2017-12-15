/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { UiBootstrapComponent } from './ui-bootstrap.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: UiBootstrapComponent
  	}, {
		path: '**', component: UiBootstrapComponent
  	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [UiBootstrapComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class UiBootstrapModule { }


