/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { AlertsComponent } from './alerts.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: AlertsComponent
  	}, {
		path: '**', component: AlertsComponent
  	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],	
	declarations: [AlertsComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class AlertsModule { }


