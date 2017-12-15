/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { PricingTableComponent } from './pricing-table.component'
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: PricingTableComponent
	}, {
		path: '**', component: PricingTableComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [PricingTableComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class PricingTableModule { }

