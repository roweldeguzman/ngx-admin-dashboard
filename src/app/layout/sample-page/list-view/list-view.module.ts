/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { ListViewComponent } from './list-view.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ListViewComponent
	}, {
		path: '**', component: ListViewComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [ListViewComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class ListViewModule { }

