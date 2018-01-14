/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { FormExampleComponent } from './form-example.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: FormExampleComponent
  	}, {
		path: '**', component: FormExampleComponent
  	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [FormExampleComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class FormExampleModule { }


