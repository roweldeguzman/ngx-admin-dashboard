/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

/* Component */
import { TypographyComponent } from './typography.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '', component: TypographyComponent
	},{
		path: '**', component: TypographyComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [TypographyComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class TypographyModule { }

