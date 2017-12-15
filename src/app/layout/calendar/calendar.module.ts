/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
/* Component */
import { CalendarComponent } from './calendar.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: CalendarComponent
	}, {
		path: '**', component: CalendarComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [CalendarComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class CalendarModule { }

