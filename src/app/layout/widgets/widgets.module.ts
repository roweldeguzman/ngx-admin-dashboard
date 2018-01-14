/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
/* Component */
import { TemplateComponent } from './template/template.component';
import { WidgetComponent } from './widget/widget.component'
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'template',
				component: TemplateComponent,
			},{
				path: 'widget',
				component: WidgetComponent,
			}
		]
  	},{ path: '**', redirectTo: ''}
];
  

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [TemplateComponent, WidgetComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class WidgetsModule { }

