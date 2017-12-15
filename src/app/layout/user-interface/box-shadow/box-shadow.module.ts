/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { BoxShadowComponent } from './box-shadow.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: BoxShadowComponent
	}, {
		path: '**', component: BoxShadowComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [BoxShadowComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class BoxShadowModule { }


