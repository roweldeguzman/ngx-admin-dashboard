/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { AnimationsComponent } from './animations.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: AnimationsComponent
	}, {
		path: '**', component: AnimationsComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [AnimationsComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AnimationsModule { }


