/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
/* Component */
import { TableComponent } from './table/table.component';
import { DataTableComponent } from './data-table/data-table.component'
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		children: [
	  		{
				path: 'table',
				component: TableComponent,
	  		}, {
				path: 'data-table',
				component: DataTableComponent,
	  		}
		]
  	}, { path: '**', redirectTo: '' }
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [TableComponent, DataTableComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class TablesModule { }

