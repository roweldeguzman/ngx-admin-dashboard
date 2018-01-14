/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { InvoiceComponent } from './invoice.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: InvoiceComponent
	}, {
		path: '**', component: InvoiceComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [InvoiceComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class InvoiceModule { }

