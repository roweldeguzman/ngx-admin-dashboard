/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { FormComponentComponent } from './form-component.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: FormComponentComponent
	}, {
		path: '**', component: FormComponentComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [FormComponentComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class FormComponentModule { }


