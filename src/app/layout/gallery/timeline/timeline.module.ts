/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { TimelineComponent } from './timeline.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{ path: '', component: TimelineComponent },
	{ path: '**', component: TimelineComponent }
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [TimelineComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class TimelineModule { }


