/* Module */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { FormValidationComponent } from './form-validation.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: FormValidationComponent
	},{
		path: '**', component: FormValidationComponent
	}
]
@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
	declarations: [FormValidationComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class FormValidationModule { }
