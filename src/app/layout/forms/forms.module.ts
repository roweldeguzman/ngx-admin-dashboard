/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsComponent } from './forms.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: FormsComponent,
		children: [
	  		{
				path: 'form-basic',
				loadChildren: './basic/basic.module#BasicModule'
	  		},{
				path: 'form-component',
				loadChildren: './form-component/form-component.module#FormComponentModule'
			},{
				path: 'form-example',
				loadChildren: './form-example/form-example.module#FormExampleModule'
			},{
				path: 'form-validation',
				loadChildren: './form-validation/form-validation.module#FormValidationModule'
			}
		]
	}, { path: '**', redirectTo: 'form-basic' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	declarations: [FormsComponent]
})
export class FormsModule { }

