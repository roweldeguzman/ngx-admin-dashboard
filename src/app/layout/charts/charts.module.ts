/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
/* Component */
import { ChartsComponent } from './charts.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ChartsComponent
	}, {
		path: '**', component: ChartsComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [ChartsComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class ChartsModule { }

