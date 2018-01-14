/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { ColorsComponent } from './colors.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ColorsComponent
	}, {
		path: '**', component: ColorsComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [ColorsComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class ColorsModule { }


