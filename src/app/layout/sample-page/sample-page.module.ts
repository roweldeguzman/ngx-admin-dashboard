/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Component */
import { SamplePageComponent } from './sample-page.component'
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: SamplePageComponent,
		children: [
			{
				path: 'profile',
				loadChildren: './profile/profile.module#ProfileModule'
			}, {
				path: 'list-view',
				loadChildren: './list-view/list-view.module#ListViewModule'
			}, {
				path: 'message',
				loadChildren: './message/message.module#MessageModule'
			}, {
				path: 'pricing-table',
				loadChildren: './pricing-table/pricing-table.module#PricingTableModule'
			}, {
				path: 'contact',
				loadChildren: './contact/contact.module#ContactModule'
			}, {
				path: 'invoice',
				loadChildren: './invoice/invoice.module#InvoiceModule'
			}, {
				path: 'wall',
				loadChildren: './wall/wall.module#WallModule'
			}, {
				path: 'page404',
				loadChildren: './page404/page404.module#Page404Module'
			}
		]
	}, { path: '**', redirectTo: 'profile' }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [SamplePageComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class SamplePageModule { }

